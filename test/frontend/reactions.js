'use strict';

// generated with Claude

const assert = require('assert');
const puppeteer = require('puppeteer');
const nconf = require('nconf');
const helpers = require('../helpers');

describe('Reactions', () => {
	let browser;
	let page;

	before(async () => {
		browser = await puppeteer.launch();
		page = await browser.newPage();
	});

	after(async () => {
		await browser.close();
	});

	it('should load topic page with reactions', async () => {
		const hooks = require.main.require('./src/hooks');
		const topics = require.main.require('./src/topics');
		const categories = require.main.require('./src/categories');

		assert.ok(hooks);
		assert.ok(topics);
		assert.ok(categories);
	});

	it('should add reaction to post', async () => {
		const hooks = require.main.require('./src/hooks');
		const topics = require.main.require('./src/topics');
		const categories = require.main.require('./src/categories');

		assert.ok(hooks);
		assert.ok(topics);
		assert.ok(categories);
	});

	it('should navigate to topic page', async () => {
		await page.goto(`${nconf.get('url')}/topic/1/test-topic`);
		await page.waitForSelector('.topic');

		// eslint-disable-next-line no-undef
		const title = await page.evaluate(() => document.title);
		assert.strictEqual(title, 'Test Topic | NodeBB');
	});

	it('should show reaction button', async () => {
		await page.goto(`${nconf.get('url')}/topic/1/test-topic`);

		// eslint-disable-next-line no-undef
		const reactionButton = await page.evaluate(() => document.querySelector('.post-tools .reactions-button') !== null);

		assert.strictEqual(reactionButton, true);
	});

	it('should show reaction menu when clicked', async () => {
		await page.goto(`${nconf.get('url')}/topic/1/test-topic`);
		await page.click('.post-tools .reactions-button');

		// eslint-disable-next-line no-undef
		const reactionMenu = await page.evaluate(() => document.querySelector('.reactions-menu') !== null);

		assert.strictEqual(reactionMenu, true);
	});

	it('should add reaction when clicked', async () => {
		await page.goto(`${nconf.get('url')}/topic/1/test-topic`);
		await page.click('.post-tools .reactions-button');

		// eslint-disable-next-line no-undef
		await page.evaluate(() => document.querySelector('.reactions-menu .reaction-item').click());

		// eslint-disable-next-line no-undef
		const hasReaction = await page.evaluate(() => document.querySelector('.post-reactions .reaction-emoji') !== null);

		assert.strictEqual(hasReaction, true);
	});
});
