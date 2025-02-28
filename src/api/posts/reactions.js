'use strict';

const db = require('../database');
const user = require('../user');
const plugins = require('../plugins');

const reactions = module.exports;

reactions.add = async function (pid, emoji, uid) {
    if (!pid || !emoji || !uid) {
        throw new Error('[[error:invalid-data]]');
    }
    
    await db.setAdd(`pid:${pid}:reactions:${emoji}`, uid);
    await plugins.hooks.fire('action:post.react', { pid, emoji, uid });
    
    return await reactions.get(pid);
};

reactions.remove = async function (pid, emoji, uid) {
    if (!pid || !emoji || !uid) {
        throw new Error('[[error:invalid-data]]');
    }
    
    await db.setRemove(`pid:${pid}:reactions:${emoji}`, uid);
    await plugins.hooks.fire('action:post.unreact', { pid, emoji, uid });
    
    return await reactions.get(pid);
};

reactions.get = async function (pid) {
    if (!pid) {
        throw new Error('[[error:invalid-data]]');
    }
    
    // Get all reaction keys for this post
    const reactionKeys = await db.scan({
        match: `pid:${pid}:reactions:*`,
    });
    
    if (!reactionKeys.length) {
        return [];
    }
    
    const result = [];
    
    for (const key of reactionKeys) {
        const emoji = key.split(':').pop();
        const uids = await db.getSetMembers(key);
        
        if (!uids.length) {
            continue;
        }
        
        const usernames = await user.getUsernamesByUids(uids);
        
        result.push({
            emoji: emoji,
            count: uids.length,
            usernames: usernames,
            userReacted: uids.includes(String(uid)),
        });
    }
    
    return result;
};