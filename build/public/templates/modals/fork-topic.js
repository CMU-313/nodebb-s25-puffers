
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
    return "<div class=\"card tool-modal shadow\">\n<h5 class=\"card-header\">\n[[topic:fork-topic]]\n</h5>\n<div class=\"card-body\">\n<p>\n[[topic:fork-topic-instruction]]\n</p>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"fork-title\"><strong>[[topic:title]]</strong></label>\n<input id=\"fork-title\" type=\"text\" class=\"form-control\" placeholder=\"[[topic:enter-new-topic-title]]\">\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\"><strong>[[category:category]]</strong></label>\n<div>\n<div component=\"category-selector\" class=\"btn-group dropdown-right category-dropdown-container bottom-sheet\">\n</div>\n</div>\n</div>\n<strong id=\"fork-pids\"></strong>\n</div>\n<div class=\"card-footer text-end\">\n<button class=\"btn btn-link btn-sm\" id=\"fork_thread_cancel\">[[global:buttons.close]]</button>\n<button class=\"btn btn-primary btn-sm\" id=\"fork_thread_commit\" disabled>[[topic:fork-topic]]</button>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
