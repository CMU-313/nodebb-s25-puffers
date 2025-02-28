
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
    return (guard((context != null) ? context['showTopicTools'] : null) ?
        "\n<div class=\"btn-group thread-tools bottom-sheet\">\n<button class=\"btn btn-outline-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[topic:thread-tools.title]]</span>\n<span class=\"visible-xs-inline\"><i class=\"fa fa-fw fa-gear\"></i></span>\n<span class=\"caret\"></span>\n</button>\n<ul class=\"dropdown-menu dropdown-menu-end\" role=\"menu\">\n<li>\n<a component=\"topic/mark-unread-for-all\" href=\"#\" class=\"dropdown-item\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-inbox\"></i> [[topic:thread-tools.markAsUnreadForAll]]\n</a>\n</li>\n<li>\n<a component=\"topic/pin\" href=\"#\" class=\"dropdown-item\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-thumb-tack\"></i> [[topic:thread-tools.pin]]\n</a>\n</li>\n<li>\n<a component=\"topic/unpin\" href=\"#\" class=\"hidden dropdown-item\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-thumb-tack fa-rotate-90\"></i> [[topic:thread-tools.unpin]]\n</a>\n</li>\n<li>\n<a component=\"topic/lock\" href=\"#\" class=\"dropdown-item\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-lock\"></i> [[topic:thread-tools.lock]]\n</a>\n</li>\n<li>\n<a component=\"topic/unlock\" href=\"#\" class=\"hidden dropdown-item\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-unlock\"></i> [[topic:thread-tools.unlock]]\n</a>\n</li>\n<li class=\"dropdown-divider\"></li>\n<li>\n<a component=\"topic/move\" href=\"#\" class=\"dropdown-item\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-arrows\"></i> [[topic:thread-tools.move]]\n</a>\n</li>\n" + 
          (guard((context != null && context['template'] != null) ? context['template']['category'] : null) ?
            "\n<li>\n<a component=\"topic/move-all\" href=\"#\" class=\"dropdown-item\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-arrows\"></i> [[topic:thread-tools.move-all]]\n</a>\n</li>\n" :
            "") + 
          "\n<li>\n<a component=\"topic/merge\" href=\"#\" class=\"dropdown-item\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-code-fork\"></i> [[topic:thread-tools.merge]]\n</a>\n</li>\n<li>\n<a component=\"topic/tag\" href=\"#\" class=\"dropdown-item\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-tag\"></i> [[topic:thread-tools.tag]]\n</a>\n</li>\n<li class=\"dropdown-divider\"></li>\n<li>\n<a component=\"topic/delete\" href=\"#\" class=\"dropdown-item\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-trash-o\"></i> [[topic:thread-tools.delete]]\n</a>\n</li>\n<li>\n<a component=\"topic/restore\" href=\"#\" class=\"hidden dropdown-item\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-history\"></i> [[topic:thread-tools.restore]]\n</a>\n</li>\n<li>\n<a component=\"topic/purge\" href=\"#\" class=\"hidden dropdown-item\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-eraser\"></i> [[topic:thread-tools.purge]]\n</a>\n</li>\n" + 
          compiled.blocks['thread_tools'](helpers, context, guard, iter, helper) + 
          "\n</ul>\n</div>\n" :
        "");
  }

  compiled.blocks = {
    'thread_tools': function thread_tools(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['thread_tools'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li>\n<a href=\"#\" class=\"dropdown-item " + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['class'] : null)) + 
          "\" role=\"menuitem\"><i class=\"fa fa-fw " + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['icon'] : null)) + 
          "\"></i> " + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['title'] : null)) + 
          "</a>\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
