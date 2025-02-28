
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
    var __escape = helpers.__escape;
    var value = context;
    return "<div class=\"card tool-modal shadow\">\n<h5 class=\"card-header\">\n[[topic:move-topic]]\n</h5>\n<div class=\"card-body\">\n<p>\n[[topic:move-topic-instruction]]\n</p>\n<div component=\"category-selector\" class=\"btn-group dropdown-right category-dropdown-container bottom-sheet\">\n</div>\n</div>\n<div class=\"card-footer text-end\">\n<button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" id=\"move_topic_cancel\">[[global:buttons.close]]</button>\n<button type=\"button\" class=\"btn btn-sm btn-primary\" id=\"move_thread_commit\" disabled>[[topic:confirm-move]]</button>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
