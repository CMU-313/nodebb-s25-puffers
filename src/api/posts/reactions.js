'use strict';

const db = require('../../database');

const Reactions = module.exports;

Reactions.add = async function (pid, uid, reaction) {
	await db.setAdd(`pid:${pid}:reactions:${reaction}`, uid);
	await db.sortedSetAdd(`pid:${pid}:reactions`, Date.now(), `${reaction}:${uid}`);

	return { pid, uid, reaction };
};

Reactions.remove = async function (pid, uid, reaction) {
	await db.setRemove(`pid:${pid}:reactions:${reaction}`, uid);
	await db.sortedSetRemove(`pid:${pid}:reactions`, `${reaction}:${uid}`);

	return { pid, uid, reaction };
};

Reactions.get = async function (pid) {
	const reactions = await db.getSortedSetRange(`pid:${pid}:reactions`, 0, -1);

	if (!reactions.length) {
		return [];
	}

	const reactionData = reactions
		.filter(reaction => reaction) // Removed trailing spaces
		.map((reaction) => { // Removed trailing spaces
			const [reactionName, uidValue] = reaction.split(':');
			return {
				value: reactionName,
				uid: uidValue,
			};
		});

	return reactionData;
};
