'use strict';

define('forum/compose', ['hooks'], function (hooks) {
	const Compose = {};

	Compose.init = function () {
		const container = $('.composer');

		if (container.length) {
			hooks.fire('action:composer.enhance', {
				container: container,
			});

			// Add Word Count Functionality
			addWordCount(container);
		}
	};

	function addWordCount(container) {
		// Create the word count element
		const wordCountContainer = $('<div class="word-count">Words: <span id="word-count">0</span></div>');
		container.append(wordCountContainer);

		// Attach event listener to the textarea
		const textarea = container.find('textarea');
		textarea.on('input', function () {
			const text = $(this).val().trim();
			const wordCount = text.length > 0 ? text.split(/\s+/).length : 0;
			$('#word-count').text(wordCount);
		});
	}

	return Compose;
});