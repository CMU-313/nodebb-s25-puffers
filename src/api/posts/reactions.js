'use strict';

const db = require('../../database');
const posts = require('../../posts');
const privileges = require('../../privileges');

const api = module.exports;

const validReactions = ['👍', '❤️', '😄', '😮', '😢', '😡'];

function isValidReaction(reaction) {
	return validReactions.includes(reaction);
}

api.add = async function (pid, uid, reaction) {
	if (!reaction || !isValidReaction(reaction)) {
		throw new Error('[[error:invalid-reaction]]');
	}

	const canReact = await privileges.posts.can('posts:react', pid, uid);
	if (!canReact) {
		throw new Error('[[error:no-privileges]]');
	}

	const reactionKey = `post:${pid}:reactions`;
	const userReactionKey = `post:${pid}:reactions:${uid}`;
	const exists = await db.exists(userReactionKey);

	if (exists) {
		await db.delete(userReactionKey);
		await db.sortedSetIncrBy(reactionKey, -1, reaction);
	}

	await db.set(userReactionKey, reaction);
	await db.sortedSetIncrBy(reactionKey, 1, reaction);

	const reactions = await db.getSortedSetWithScores(reactionKey);
	const postData = await posts.getPostFields(pid, ['tid']);

	return {
		pid,
		uid,
		tid: postData.tid,
		reaction,
		reactions: reactions.map(r => ({
			emoji: r.value,
			count: r.score,
		})),
	};
};

api.remove = async function (pid, uid, reaction) {
	if (!reaction || !isValidReaction(reaction)) {
		throw new Error('[[error:invalid-reaction]]');
	}

	const userReactionKey = `post:${pid}:reactions:${uid}`;
	const exists = await db.exists(userReactionKey);

	if (!exists) {
		return;
	}

	const reactionKey = `post:${pid}:reactions`;
	await db.delete(userReactionKey);
	await db.sortedSetIncrBy(reactionKey, -1, reaction);

	const postData = await posts.getPostFields(pid, ['tid']);

	return {
		pid,
		uid,
		tid: postData.tid,
		reaction,
	};
};

api.get = async function (pid) {
	const reactionKey = `post:${pid}:reactions`;
	const reactions = await db.getSortedSetWithScores(reactionKey);

	return {
		pid,
		reactions: reactions.map(r => ({
			emoji: r.value,
			count: r.score,
		})),
	};
};
