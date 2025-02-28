'use strict';

const assert = require('assert');
const { JSDOM } = require('jsdom');

describe('Word Count Feature', () => {
    let dom, document;

    beforeEach(() => {
        dom = new JSDOM(`
            <div class="content mt-2 text-break" component="post/content" itemprop="text">
                This is a sample post content for testing purposes.
            </div>
            <div class="word-count text-muted small mt-2">
                Word Count: <span id="wordCount-123"></span>
            </div>
        `);
        document = dom.window.document;
    });

    function calculateWordCount() {
        const postContent = document.querySelector('[component="post/content"]');
        const wordCountElement = document.getElementById("wordCount-123");

        if (postContent) {
            const wordCount = postContent.textContent.trim().split(/\s+/).length;
            wordCountElement.textContent = wordCount;
        }
    }

    describe('.post', () => {
        it('should count words correctly', () => {
            calculateWordCount();
            const wordCount = parseInt(document.getElementById("wordCount-123").textContent);
            assert.strictEqual(wordCount, 9);
        });

        it('should handle empty content', () => {
            document.querySelector('[component="post/content"]').textContent = "";
            calculateWordCount();
            const wordCount = parseInt(document.getElementById("wordCount-123").textContent);
            assert.strictEqual(wordCount, 1);
        });

        it('should ignore extra spaces', () => {
            document.querySelector('[component="post/content"]').textContent = "    Hello      world!    ";
            calculateWordCount();
            const wordCount = parseInt(document.getElementById("wordCount-123").textContent);
            assert.strictEqual(wordCount, 2);
        });

        it('should count single-word content', () => {
            document.querySelector('[component="post/content"]').textContent = "Hello";
            calculateWordCount();
            const wordCount = parseInt(document.getElementById("wordCount-123").textContent);
            assert.strictEqual(wordCount, 1);
        });
    });
});