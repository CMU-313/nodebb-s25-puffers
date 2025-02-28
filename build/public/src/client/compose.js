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
		// Find the textarea
		const textarea = container.find('textarea');
	
		// Find or create the word count display
		let wordCountContainer = container.find('#word-count-display');
		if (!wordCountContainer.length) {
			wordCountContainer = $('<div class="text-muted text-xs mt-1" id="word-count-display">Words: 0</div>');
			textarea.after(wordCountContainer);
		}
	
		// Attach event listener to update word count
		textarea.on('input', function () {
			const text = $(this).val().trim();
			const wordCount = text.length > 0 ? text.split(/\s+/).length : 0;
			wordCountContainer.text(`Words: ${wordCount}`);
		});
	}	

	return Compose;
});