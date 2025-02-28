'use strict';

// generated with Claude

const assert = require('assert');
const async = require('async');

const db = require('../../mocks/databasemock');
const helpers = require('../../helpers');
const meta = require('../../../src/meta');
const user = require('../../../src/user');
const groups = require('../../../src/groups');
const categories = require('../../../src/categories');
const topics = require('../../../src/topics');
const posts = require('../../../src/posts');
const socketPosts = require('../../../src/socket.io/posts');

describe('Socket.io Posts Reactions', () => {
	let adminUid;
	let regularUid;
	let categoryId;
	let topicId;
	let postId;

	before(async () => {
		adminUid = await user.create({ username: 'admin', password: '123456' });
		await groups.join('administrators', adminUid);

		regularUid = await user.create({ username: 'regular', password: '123456' });
	});

	it('should create a category and topic with a post for testing', async () => {
		categoryId = await categories.create({
			name: 'Test Category',
			description: 'Test category created by testing script',
		}).then(c => c.cid); // Removed parentheses around `c`

		const result = await topics.post({
			uid: adminUid,
			cid: categoryId,
			title: 'Test Topic Title',
			content: 'The content of test topic',
		});

		topicId = result.topicData.tid;
		postId = result.postData.pid;
	});

	it('should add a reaction to a post', async () => {
		const socketData = {
			uid: adminUid,
		};

		const data = {
			pid: postId,
			reaction: '👍',
		};

		const result = await socketPosts.addReaction(socketData, data);
		assert.strictEqual(result.uid, adminUid);
		assert.strictEqual(result.reaction, '👍');
		assert.strictEqual(result.pid, postId);
	});

	it('should get reactions from a post', async () => {
		const socketData = {
			uid: adminUid,
		};

		const result = await socketPosts.getReactionInfo(socketData, postId);

		assert(Array.isArray(result.reactions));
		assert.strictEqual(typeof result.count, 'number');
		assert.strictEqual(result.uid, adminUid);
	});

	it('should remove a reaction from a post', async () => {
		const socketData = {
			uid: adminUid,
		};

		const data = {
			pid: postId,
			reaction: '👍',
		};

		const result = await socketPosts.removeReaction(socketData, data);
		assert.strictEqual(result.uid, adminUid);
		assert.strictEqual(result.reaction, '👍');
		assert.strictEqual(result.pid, postId);
	});
});
