'use strict';

const db = require('../../database');
const posts = require('../../posts');
const plugins = require('../../plugins');
const privileges = require('../../privileges');
const api = require('../../api/posts/reactions');

module.exports = (SocketPosts) => {
	SocketPosts.react = async (socket, data) => {
		if (!socket.uid) {
			throw new Error('[[error:not-logged-in]]');
		}

		const canReact = await privileges.posts.can('posts:react', data.pid, socket.uid);
		if (!canReact) {
			throw new Error('[[error:no-privileges]]');
		}

		const reactionKey = `post:${data.pid}:reactions`;
		const userReactionKey = `post:${data.pid}:reactions:${socket.uid}`;
		const exists = await db.exists(userReactionKey);

		if (exists) {
			await db.delete(userReactionKey);
			await db.sortedSetIncrBy(reactionKey, -1, data.reaction);
		} else {
			await db.set(userReactionKey, data.reaction);
			await db.sortedSetIncrBy(reactionKey, 1, data.reaction);
		}

		const reactions = await db.getSortedSetWithScores(reactionKey);
		const postData = await posts.getPostFields(data.pid, ['tid']);

		const result = {
			pid: data.pid,
			tid: postData.tid,
			reactions: reactions.map(r => ({
				emoji: r.value,
				count: r.score,
			})),
		};

		await plugins.hooks.fire('action:post.react', { ...result, uid: socket.uid });

		return result;
	};

	SocketPosts.addReaction = async (socket, data) => {
		if (!socket.uid) {
			throw new Error('[[error:not-logged-in]]');
		}

		const canReact = await privileges.posts.can('posts:react', data.pid, socket.uid);
		if (!canReact) {
			throw new Error('[[error:no-privileges]]');
		}

		const reaction = await api.add(data.pid, socket.uid, data.reaction);

		await plugins.hooks.fire('action:post.react', {
			pid: data.pid,
			uid: socket.uid,
			reaction: data.reaction,
		});

		return reaction;
	};

	SocketPosts.removeReaction = async (socket, data) => {
		if (!socket.uid) {
			throw new Error('[[error:not-logged-in]]');
		}

		const reaction = await api.remove(data.pid, socket.uid, data.reaction);

		await plugins.hooks.fire('action:post.unreact', {
			pid: data.pid,
			uid: socket.uid,
			reaction: data.reaction,
		});

		return reaction;
	};

	SocketPosts.getReactionInfo = async (socket, pid) => {
		const reactions = await api.get(pid);

		return {
			reactions,
			count: reactions.length,
			uid: socket.uid,
		};
	};
};
