'use strict';

//generated with Claude

const assert = require('assert');
const async = require('async');
const db = require('../../mocks/databasemock');

const user = require('../../../src/user');
const topics = require('../../../src/topics');
const categories = require('../../../src/categories');
const posts = require('../../../src/posts');
const socketPosts = require('../../../src/socket.io/posts');

describe('Socket.IO Post Reactions', () => {
    let tid;
    let cid;
    let pid;
    let adminUid;
    let regularUid;

    before(async () => {
        [adminUid, regularUid, cid] = await Promise.all([
            user.create({ username: 'admin-socket', password: 'password' }),
            user.create({ username: 'regular-socket', password: 'password' }),
            categories.create({ name: 'Test Category Socket' }),
        ]);

        await user.setAdministrator(adminUid, true);

        const topicData = await topics.post({
            uid: adminUid,
            cid: cid,
            title: 'Test Topic for Socket Reactions',
            content: 'This is a test topic for testing socket reactions',
        });
        tid = topicData.topicData.tid;
        pid = topicData.postData.pid;
    });

    it('should add a reaction via socket', (done) => {
        socketPosts.toggleReaction(
            { uid: regularUid },
            { pid: pid, emoji: '👍' },
            (err, result) => {
                assert.ifError(err);
                assert(Array.isArray(result));
                
                const thumbsUpReaction = result.find(r => r.emoji === '👍');
                assert(thumbsUpReaction);
                assert.strictEqual(thumbsUpReaction.count, 1);
                assert(thumbsUpReaction.userReacted);
                
                done();
            }
        );
    });

    it('should emit event when reaction is added', (done) => {
        const socketMock = { emit: () => {} };
        const emitSpy = sinon.spy(socketMock, 'emit');
        
        socketPosts.toggleReaction(
            { uid: adminUid, emit: socketMock.emit },
            { pid: pid, emoji: '❤️' },
            (err) => {
                assert.ifError(err);
                assert(emitSpy.calledWith('event:post.reaction'));
                done();
            }
        );
    });

    it('should remove a reaction when toggled again', (done) => {
        socketPosts.toggleReaction(
            { uid: regularUid },
            { pid: pid, emoji: '👍' },
            (err, result) => {
                assert.ifError(err);
                
                const thumbsUpReaction = result.find(r => r.emoji === '👍');
                if (thumbsUpReaction) {
                    assert(!thumbsUpReaction.userReacted);
                }
                
                done();
            }
        );
    });

    it('should handle errors gracefully', (done) => {
        socketPosts.toggleReaction(
            { uid: regularUid },
            { pid: 9999999, emoji: '👍' },
            (err) => {
                assert(err);
                assert.strictEqual(err.message, '[[error:no-post]]');
                done();
            }
        );
    });
}); 