'use strict';

//generated with Claude

const assert = require('assert');
const async = require('async');
const request = require('request-promise-native');
const nconf = require('nconf');
const db = require('./mocks/databasemock');

const user = require('../src/user');
const topics = require('../src/topics');
const categories = require('../src/categories');
const posts = require('../src/posts');
const socketPosts = require('../src/socket.io/posts');
const apiPosts = require('../src/api/posts');
const helpers = require('./helpers');

describe('Post Reactions', () => {
    let tid;
    let cid;
    let pid;
    let adminUid;
    let regularUid;
    let regularUid2;

    before(async () => {
        // Create users, category, and topic for testing
        [adminUid, regularUid, regularUid2, cid] = await Promise.all([
            user.create({ username: 'admin', password: 'password' }),
            user.create({ username: 'regular', password: 'password' }),
            user.create({ username: 'regular2', password: 'password' }),
            categories.create({ name: 'Test Category' }),
        ]);

        await user.setUserField(adminUid, 'email', 'admin@example.com');
        await user.setUserField(regularUid, 'email', 'regular@example.com');
        await user.setUserField(regularUid2, 'email', 'regular2@example.com');

        await user.email.confirmByUid(adminUid);
        await user.email.confirmByUid(regularUid);
        await user.email.confirmByUid(regularUid2);

        await user.setAdministrator(adminUid, true);

        const topicData = await topics.post({
            uid: adminUid,
            cid: cid,
            title: 'Test Topic for Reactions',
            content: 'This is a test topic for testing reactions',
        });
        tid = topicData.topicData.tid;
        pid = topicData.postData.pid;
    });

    describe('API methods', () => {
        it('should add a reaction to a post', async () => {
            const result = await apiPosts.reactions.add(
                { uid: regularUid },
                { pid: pid, emoji: '👍' }
            );
            
            assert(Array.isArray(result));
            assert.strictEqual(result.length, 1);
            assert.strictEqual(result[0].emoji, '👍');
            assert.strictEqual(result[0].count, 1);
            assert(result[0].userReacted);
        });

        it('should get reactions for a post', async () => {
            const result = await apiPosts.reactions.list(
                { uid: regularUid },
                { pid: pid }
            );
            
            assert(Array.isArray(result));
            assert.strictEqual(result.length, 1);
            assert.strictEqual(result[0].emoji, '👍');
            assert.strictEqual(result[0].count, 1);
            assert(result[0].userReacted);
        });

        it('should allow a different user to add a reaction', async () => {
            await apiPosts.reactions.add(
                { uid: regularUid2 },
                { pid: pid, emoji: '👍' }
            );
            
            const result = await apiPosts.reactions.list(
                { uid: regularUid },
                { pid: pid }
            );
            
            assert.strictEqual(result.length, 1);
            assert.strictEqual(result[0].emoji, '👍');
            assert.strictEqual(result[0].count, 2);
        });

        it('should allow a user to add a different reaction', async () => {
            await apiPosts.reactions.add(
                { uid: regularUid2 },
                { pid: pid, emoji: '❤️' }
            );
            
            const result = await apiPosts.reactions.list(
                { uid: regularUid },
                { pid: pid }
            );
            
            assert.strictEqual(result.length, 2);
            
            const heartReaction = result.find(r => r.emoji === '❤️');
            assert(heartReaction);
            assert.strictEqual(heartReaction.count, 1);
            assert(!heartReaction.userReacted); // regularUid didn't react with heart
        });

        it('should remove a reaction when toggled', async () => {
            await apiPosts.reactions.remove(
                { uid: regularUid },
                { pid: pid, emoji: '👍' }
            );
            
            const result = await apiPosts.reactions.list(
                { uid: regularUid },
                { pid: pid }
            );
            
            const thumbsUpReaction = result.find(r => r.emoji === '👍');
            assert(thumbsUpReaction);
            assert.strictEqual(thumbsUpReaction.count, 1);
            assert(!thumbsUpReaction.userReacted); // regularUid removed their reaction
        });
    });

    describe('Socket methods', () => {
        it('should toggle a reaction via socket', (done) => {
            socketPosts.toggleReaction(
                { uid: regularUid },
                { pid: pid, emoji: '😄' },
                (err, result) => {
                    assert.ifError(err);
                    assert(Array.isArray(result));
                    
                    const smileReaction = result.find(r => r.emoji === '😄');
                    assert(smileReaction);
                    assert.strictEqual(smileReaction.count, 1);
                    assert(smileReaction.userReacted);
                    
                    done();
                }
            );
        });

        it('should toggle off a reaction when called again', (done) => {
            socketPosts.toggleReaction(
                { uid: regularUid },
                { pid: pid, emoji: '😄' },
                (err, result) => {
                    assert.ifError(err);
                    
                    const smileReaction = result.find(r => r.emoji === '😄');
                    if (smileReaction) {
                        assert.strictEqual(smileReaction.count, 0);
                        assert(!smileReaction.userReacted);
                    }
                    
                    done();
                }
            );
        });
    });

    describe('HTTP API', () => {
        let jar;
        let csrf_token;

        before(async () => {
            jar = await helpers.loginUser('regular', 'password');
            const config = await request({
                url: `${nconf.get('url')}/api/config`,
                json: true,
                jar: jar,
            });
            csrf_token = config.csrf_token;
        });

        it('should add a reaction via HTTP API', async () => {
            const response = await request({
                method: 'PUT',
                url: `${nconf.get('url')}/api/posts/${pid}/reactions/🎉`,
                jar: jar,
                json: true,
                headers: {
                    'x-csrf-token': csrf_token,
                },
            });
            
            assert(response);
            assert(response.reactions);
            
            const confettiReaction = response.reactions.find(r => r.emoji === '🎉');
            assert(confettiReaction);
            assert.strictEqual(confettiReaction.count, 1);
            assert(confettiReaction.userReacted);
        });

        it('should get reactions via HTTP API', async () => {
            const response = await request({
                method: 'GET',
                url: `${nconf.get('url')}/api/posts/${pid}/reactions`,
                jar: jar,
                json: true,
            });
            
            assert(response);
            assert(response.reactions);
            assert(Array.isArray(response.reactions));
            
            const confettiReaction = response.reactions.find(r => r.emoji === '🎉');
            assert(confettiReaction);
            assert.strictEqual(confettiReaction.count, 1);
            assert(confettiReaction.userReacted);
        });

        it('should remove a reaction via HTTP API', async () => {
            const response = await request({
                method: 'DELETE',
                url: `${nconf.get('url')}/api/posts/${pid}/reactions/🎉`,
                jar: jar,
                json: true,
                headers: {
                    'x-csrf-token': csrf_token,
                },
            });
            
            assert(response);
            assert(response.reactions);
            
            const confettiReaction = response.reactions.find(r => r.emoji === '🎉');
            if (confettiReaction) {
                assert.strictEqual(confettiReaction.count, 0);
                assert(!confettiReaction.userReacted);
            }
        });
    });

    describe('Error handling', () => {
        it('should error when adding a reaction to a non-existent post', async () => {
            try {
                await apiPosts.reactions.add(
                    { uid: regularUid },
                    { pid: 9999999, emoji: '👍' }
                );
                assert(false); // Should not reach here
            } catch (err) {
                assert(err);
                assert.strictEqual(err.message, '[[error:no-post]]');
            }
        });

        it('should error when using invalid emoji', async () => {
            try {
                await apiPosts.reactions.add(
                    { uid: regularUid },
                    { pid: pid, emoji: 'not-an-emoji' }
                );
                assert(false); // Should not reach here
            } catch (err) {
                assert(err);
                assert.strictEqual(err.message, '[[error:invalid-data]]');
            }
        });

        it('should error when not logged in', async () => {
            try {
                await apiPosts.reactions.add(
                    { uid: 0 },
                    { pid: pid, emoji: '👍' }
                );
                assert(false); // Should not reach here
            } catch (err) {
                assert(err);
                assert.strictEqual(err.message, '[[error:not-logged-in]]');
            }
        });
    });
}); 