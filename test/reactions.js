'use strict';

// generated with Claude

const assert = require('assert');
const async = require('async');
const fetch = require('node-fetch'); // Replaced `request-promise-native` with `node-fetch`
const nconf = require('nconf');
const util = require('util');

const db = require('./mocks/databasemock');
const helpers = require('./helpers');
const meta = require('../src/meta');
const user = require('../src/user');
const groups = require('../src/groups');
const categories = require('../src/categories');
const topics = require('../src/topics');
const posts = require('../src/posts');
const plugins = require('../src/plugins');
const socketPosts = require('../src/socket.io/posts');

describe('Reactions', () => {
	let adminUid;
	let adminJar;
	let adminCSRF;
	let regularUid;
	let regularJar;
	let regularCSRF;
	let categoryId;
	let topicId;
	let postId;

	before(async () => {
		adminUid = await user.create({ username: 'admin', password: '123456' });
		await groups.join('administrators', adminUid);

		regularUid = await user.create({ username: 'regular', password: '123456' });

		adminJar = await helpers.loginUser('admin', '123456');
		regularJar = await helpers.loginUser('regular', '123456');

		adminCSRF = await helpers.getCsrfToken(adminJar);
		regularCSRF = await helpers.getCsrfToken(regularJar);
	});

	it('should create a category', async () => {
		const category = {
			name: 'Test Category',
			description: 'Test category created by testing script',
		};

		const result = await categories.create(category);
		categoryId = result.cid;
	});

	it('should create a topic', async () => {
		const result = await topics.post({
			uid: adminUid,
			cid: categoryId,
			title: 'Test Topic Title',
			content: 'The content of test topic',
		});

		topicId = result.topicData.tid;
		postId = result.postData.pid;
	});

	it('should create a reply', async () => {
		const result = await topics.reply({
			uid: regularUid,
			tid: topicId,
			content: 'This is a reply',
		});

		assert.strictEqual(result.pid > 0, true);
	});

	it('should add a reaction to a post', async () => {
		const result = await socketPosts.addReaction(
			{ uid: adminUid },
			{ pid: postId, reaction: '👍' }
		);

		assert.strictEqual(result.uid, adminUid);
		assert.strictEqual(result.reaction, '👍');
		assert.strictEqual(result.pid, postId);
	});

	it('should get reactions from a post', async () => {
		const result = await socketPosts.getReactionInfo({ uid: adminUid }, postId);

		assert.strictEqual(result.reactions.length, 1);
		assert.strictEqual(result.reactions[0].value, '👍');
		assert.strictEqual(result.reactions[0].uid, adminUid);
	});

	it('should remove a reaction from a post', async () => {
		const result = await socketPosts.removeReaction(
			{ uid: adminUid },
			{ pid: postId, reaction: '👍' }
		);

		assert.strictEqual(result.uid, adminUid);
		assert.strictEqual(result.reaction, '👍');
		assert.strictEqual(result.pid, postId);
	});

	it('should have no reactions after removal', async () => {
		const result = await socketPosts.getReactionInfo({ uid: adminUid }, postId);

		assert.strictEqual(result.reactions.length, 0);
	});

	it('should add multiple reactions to a post', async () => {
		await socketPosts.addReaction({ uid: adminUid }, { pid: postId, reaction: '👍' });
		await socketPosts.addReaction({ uid: regularUid }, { pid: postId, reaction: '❤️' });

		const result = await socketPosts.getReactionInfo({ uid: adminUid }, postId);

		assert.strictEqual(result.reactions.length, 2);

		const reactions = result.reactions.map(r => r.value).sort(); // Fixed `arrow-parens`
		assert.deepStrictEqual(reactions, ['❤️', '👍']);
	});

	it('should not allow adding the same reaction twice', async () => {
		await socketPosts.addReaction({ uid: adminUid }, { pid: postId, reaction: '👍' });

		const result = await socketPosts.getReactionInfo({ uid: adminUid }, postId);

		const adminReactions = result.reactions.filter(r => parseInt(r.uid, 10) === adminUid); // Fixed `arrow-parens`
		assert.strictEqual(adminReactions.length, 1);
	});

	it('should handle invalid reactions gracefully', async () => {
		try {
			await socketPosts.addReaction({ uid: adminUid }, { pid: 999999, reaction: '👍' });
			assert.fail('Should have thrown an error');
		} catch (err) {
			assert(err);
		}
	});

	it('should not allow guests to react', async () => {
		try {
			await socketPosts.addReaction({ uid: 0 }, { pid: postId, reaction: '👍' });
			assert.fail('Should have thrown an error');
		} catch (err) {
			assert.strictEqual(err.message, '[[error:not-logged-in]]');
		}
	});
});
