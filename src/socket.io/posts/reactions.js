'use strict';

//FILE GENERATED WITH CLAUDE AFTER QUERYING TO WRITE A SERVER UPDATE FILE FROM VOTE.JS FILE SAME DIRECOTRY

const db = require('../../database');
const posts = require('../../posts');
const plugins = require('../../plugins');
const privileges = require('../../privileges');

module.exports = function (SocketPosts) {
    SocketPosts.react = async function (socket, data) {
        if (!socket.uid) {
            throw new Error('[[error:not-logged-in]]');
        }
        
        const canReact = await privileges.posts.can('posts:react', data.pid, socket.uid);
        if (!canReact) {
            throw new Error('[[error:no-privileges]]');
        }

        const reaction = {
            uid: socket.uid,
            pid: data.pid,
            emoji: data.reaction,
        };

        // Store reaction in Redis
        const reactionKey = `post:${data.pid}:reactions`;
        const userReactionKey = `post:${data.pid}:reactions:${socket.uid}`;
        
        const exists = await db.exists(userReactionKey);
        
        if (exists) {
            // Remove existing reaction
            await db.delete(userReactionKey);
            await db.sortedSetIncrBy(reactionKey, -1, data.reaction);
        } else {
            // Add new reaction
            await db.set(userReactionKey, data.reaction);
            await db.sortedSetIncrBy(reactionKey, 1, data.reaction);
        }

        // Get updated reaction counts
        const reactions = await db.getSortedSetWithScores(reactionKey);
        
        // Notify clients
        const postData = await posts.getPostFields(data.pid, ['tid']);
        const result = {
            pid: data.pid,
            tid: postData.tid,
            reactions: reactions.map(r => ({
                emoji: r.value,
                count: r.score
            }))
        };

        await plugins.hooks.fire('action:post.react', { ...result, uid: socket.uid });
        
        return result;
    };
}; 