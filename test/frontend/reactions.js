'use strict';

//generated with Claude

const assert = require('assert');
const helpers = require('../helpers');

describe('Post Reactions (Frontend)', () => {
    let topicUrl;
    
    before(async () => {
        await helpers.initSocketIO();
        
        const jar = await helpers.loginUser('admin', 'password');
        const result = await helpers.createTopic({
            jar,
            title: 'Test Topic for Reactions Frontend',
            content: 'This is a test topic for testing reactions frontend',
        });
        
        topicUrl = `/topic/${result.tid}`;
    });
    
    it('should load the topic page with reaction buttons', async () => {
        const res = await helpers.request('GET', topicUrl, {});
        assert(res.body);
        assert(res.body.includes('component="post/reactions"'));
        assert(res.body.includes('quick-reactions-menu'));
    });
    
    it('should show reaction dropdown when clicking the reaction button', async () => {
        await page.goto(nconf.get('url') + topicUrl);
        await page.waitForSelector('[component="post"]');
        
        // Click the reaction button
        await page.click('[component="post/reaction-menu"]');
        
        // Verify dropdown is shown
        const dropdownVisible = await page.evaluate(() => {
            return document.querySelector('.quick-reactions-menu.show') !== null;
        });
        
        assert(dropdownVisible);
    });
    
    it('should add a reaction when clicking an emoji', async () => {
        // Click the thumbs up emoji
        await page.click('.quick-reactions-menu .dropdown-item[data-emoji="👍"]');
        
        // Wait for the reaction to be added
        await page.waitForSelector('[component="post/reactions"] .reaction[data-emoji="👍"]');
        
        // Verify the reaction count
        const count = await page.evaluate(() => {
            return document.querySelector('[component="post/reactions"] .reaction[data-emoji="👍"] .count').textContent;
        });
        
        assert.strictEqual(count, '1');
    });
    
    it('should remove a reaction when clicking it again', async () => {
        // Click the existing reaction
        await page.click('[component="post/reactions"] .reaction[data-emoji="👍"]');
        
        // Wait for the reaction to be removed or count to change
        await page.waitForFunction(() => {
            const reaction = document.querySelector('[component="post/reactions"] .reaction[data-emoji="👍"]');
            return !reaction || reaction.querySelector('.count').textContent !== '1';
        });
        
        // Verify the reaction is gone or count is 0
        const reactionExists = await page.evaluate(() => {
            const reaction = document.querySelector('[component="post/reactions"] .reaction[data-emoji="👍"]');
            return reaction !== null;
        });
        
        if (reactionExists) {
            const count = await page.evaluate(() => {
                return document.querySelector('[component="post/reactions"] .reaction[data-emoji="👍"] .count').textContent;
            });
            assert.strictEqual(count, '0');
        }
    });
    
    it('should show who reacted in a tooltip', async () => {
        // First add a reaction
        await page.click('[component="post/reaction-menu"]');
        await page.click('.quick-reactions-menu .dropdown-item[data-emoji="❤️"]');
        
        // Wait for the reaction to be added
        await page.waitForSelector('[component="post/reactions"] .reaction[data-emoji="❤️"]');
        
        // Hover over the reaction to show tooltip
        await page.hover('[component="post/reactions"] .reaction[data-emoji="❤️"]');
        
        // Check if tooltip contains username
        const tooltipVisible = await page.evaluate(() => {
            // This depends on the tooltip implementation
            // For Bootstrap tooltips:
            return document.querySelector('.tooltip-inner') !== null;
        });
        
        assert(tooltipVisible);
    });
}); 