'use strict';

define('forum/topic/postEdit', ['components', 'translator', 'helpers'], function (components, translator, helpers) {
    const PostEdit = {};

    PostEdit.updateEditTime = function(pid, editData) {
        const postContainer = components.get('post', 'pid', pid);
        const editElement = postContainer.find('[component="post/editor"]');
        
        if (editData.edited) {
            editElement.removeClass('hidden');
            const editTimeEl = editElement.find('.timeago');
            editTimeEl.attr('title', editData.editedISO);
            helpers.timeago(editTimeEl);
        }
    };

    return PostEdit;
});