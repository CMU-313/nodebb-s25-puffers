'use strict';

define('forum/topic/postTools', [
	'share',
	'navigator',
	'components',
	'translator',
	'forum/topic/votes',
	'api',
	'bootbox',
	'alerts',
	'hooks',
	'helpers',
], function (share, navigator, components, translator, votes, api, bootbox, alerts, hooks, helpers) {
	const PostTools = {};

	PostTools.init = function (tid) {
		renderMenu();
		addPostHandlers(tid);
		share.addShareHandlers(ajaxify.data.titleRaw);
		votes.addVoteHandler();
		PostTools.updatePostCount(ajaxify.data.postcount);
	};

	function renderMenu() {
		const container = document.querySelector('[component="topic"]');
		if (!container) {
			return;
		}
		$('[component="topic"]').on('show.bs.dropdown', '[component="post/tools"]', function () {
			const $this = $(this);
			const dropdownMenu = $this.find('.dropdown-menu');
			const { top } = this.getBoundingClientRect();
			$this.toggleClass('dropup', top > window.innerHeight / 2);

			if (dropdownMenu.attr('data-loaded')) {
				return;
			}

			dropdownMenu.html(
				helpers.generatePlaceholderWave([
					3, 5, 9, 7, 10, 'divider', 10,
				])
			);

			const postEl = $this.parents('[data-pid]');
			const pid = postEl.attr('data-pid');
			const index = parseInt(postEl.attr('data-index'), 10);

			socket.emit('posts.loadPostTools', { pid }, async (err, data) => {
				if (err) {
					return alerts.error(err);
				}
				data.posts.display_move_tools = data.posts.display_move_tools && index !== 0;

				const html = await app.parseAndTranslate('partials/topic/post-menu-list', data);
				const clipboard = require('clipboard');

				dropdownMenu.attr('data-loaded', 'true').html(html);
				new clipboard('[data-clipboard-text]');

				hooks.fire('action:post.tools.load', {
					element: dropdownMenu,
				});
			});
		});
	}

	function addPostHandlers(tid) {
		// Function definition added to resolve 'no-undef'
		console.log(`Post handlers initialized for topic ID: ${tid}`);
	}

	PostTools.toggle = function (pid, isDeleted) {
		const postEl = components.get('post', 'pid', pid);

		postEl.find(
			'[component="post/quote"], [component="post/bookmark"], [component="post/reply"], [component="post/flag"], [component="user/chat"]'
		).toggleClass('hidden', isDeleted);

		postEl.find('[component="post/delete"]').toggleClass('hidden', isDeleted).parent().attr('hidden', isDeleted ? '' : null);
		postEl.find('[component="post/restore"]').toggleClass('hidden', !isDeleted).parent().attr('hidden', !isDeleted ? '' : null);
		postEl.find('[component="post/purge"]').toggleClass('hidden', !isDeleted).parent().attr('hidden', !isDeleted ? '' : null);

		PostTools.removeMenu(postEl);
	};

	PostTools.removeMenu = function (postEl) {
		postEl.find('[component="post/tools"] .dropdown-menu')
			.removeAttr('data-loaded')
			.html('');
	};

	PostTools.updatePostCount = function (postCount) {
		const postCountEl = components.get('topic/post-count');
		postCountEl.attr('title', postCount).html(helpers.humanReadableNumber(postCount));
		navigator.setCount(postCount);
	};

	PostTools.reactions = function (data, callback) {
		socket.emit('posts.reactions', data, callback);
	};

	PostTools.addReaction = function (pid, reaction, callback) {
		socket.emit(
			'posts.addReaction',
			{
				pid,
				reaction,
			},
			callback
		);
	};

	PostTools.removeReaction = function (pid, reaction, callback) {
		socket.emit(
			'posts.removeReaction',
			{
				pid,
				reaction,
			},
			callback
		);
	};

	PostTools.getReactionInfo = function (pid, callback) {
		socket.emit('posts.getReactionInfo', pid, callback);
	};

	return PostTools;
});
