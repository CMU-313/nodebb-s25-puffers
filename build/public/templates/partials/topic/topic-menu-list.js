
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
    return (guard((context != null && context['privileges'] != null) ? context['privileges']['editable'] : null) ?
        "\n<li " + 
          (guard((context != null) ? context['locked'] : null) ?
            "hidden" :
            "") + 
          ">\n<a component=\"topic/lock\" href=\"#\" class=\"dropdown-item " + 
          (guard((context != null) ? context['locked'] : null) ?
            "hidden" :
            "") + 
          "\" role=\"menuitem\"><i class=\"fa fa-fw fa-lock\"></i> [[topic:thread-tools.lock]]</a>\n</li>\n<li " + 
          (guard((context != null) ? context['locked'] : null) ?
            "" :
            "hidden") + 
          ">\n<a component=\"topic/unlock\" href=\"#\" class=\"dropdown-item " + 
          (guard((context != null) ? context['locked'] : null) ?
            "" :
            "hidden") + 
          "\" role=\"menuitem\"><i class=\"fa fa-fw fa-unlock\"></i> [[topic:thread-tools.unlock]]</a>\n</li>\n<li " + 
          (guard((context != null) ? context['pinned'] : null) ?
            "hidden" :
            "") + 
          ">\n<a component=\"topic/pin\" href=\"#\" class=\"dropdown-item " + 
          (guard((context != null) ? context['pinned'] : null) ?
            "hidden" :
            "") + 
          "\" role=\"menuitem\"><i class=\"fa fa-fw fa-thumb-tack\"></i> [[topic:thread-tools.pin]]</a>\n</li>\n<li " + 
          (guard((context != null) ? context['pinned'] : null) ?
            "" :
            "hidden") + 
          ">\n<a component=\"topic/unpin\" href=\"#\" class=\"dropdown-item " + 
          (guard((context != null) ? context['pinned'] : null) ?
            "" :
            "hidden") + 
          "\" role=\"menuitem\"><i class=\"fa fa-fw fa-thumb-tack fa-rotate-90\"></i> [[topic:thread-tools.unpin]]</a>\n</li>\n<li>\n<a component=\"topic/move\" class=\"dropdown-item\" href=\"#\" role=\"menuitem\"><i class=\"fa fa-fw fa-arrows\"></i> [[topic:thread-tools.move]]</a>\n</li>\n<li>\n<a component=\"topic/merge\" class=\"dropdown-item\" href=\"#\" role=\"menuitem\"><i class=\"fa fa-fw fa-code-fork\"></i> [[topic:thread-tools.merge]]</a>\n</li>\n<li>\n<a component=\"topic/fork\" class=\"dropdown-item\" href=\"#\" role=\"menuitem\"><i class=\"fa fa-fw fa-code-fork\"></i> [[topic:thread-tools.fork]]</a>\n</li>\n<li>\n<a component=\"topic/tag\" class=\"dropdown-item\" href=\"#\" role=\"menuitem\"><i class=\"fa fa-fw fa-tag\"></i> [[topic:thread-tools.tag]]</a>\n</li>\n" + 
          (guard((context != null) ? context['scheduled'] : null) ?
            "" :
            "\n<li>\n<a component=\"topic/move-posts\" class=\"dropdown-item\" href=\"#\" role=\"menuitem\"><i class=\"fa fa-fw fa-arrows\"></i> [[topic:thread-tools.move-posts]]</a>\n</li>\n") + 
          "\n<li>\n<a component=\"topic/mark-unread-for-all\" class=\"dropdown-item\" href=\"#\" role=\"menuitem\"><i class=\"fa fa-fw fa-inbox\"></i> [[topic:thread-tools.markAsUnreadForAll]]</a>\n</li>\n<li class=\"dropdown-divider\"></li>\n" :
        "") + 
      "\n" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['deletable'] : null) ?
        "\n<li " + 
          (guard((context != null) ? context['deleted'] : null) ?
            "hidden" :
            "") + 
          ">\n<a component=\"topic/delete\" href=\"#\" class=\"dropdown-item " + 
          (guard((context != null) ? context['deleted'] : null) ?
            "hidden" :
            "") + 
          "\" role=\"menuitem\"><i class=\"fa fa-fw fa-trash-o\"></i> [[topic:thread-tools.delete]]</a>\n</li>\n" + 
          (guard((context != null) ? context['scheduled'] : null) ?
            "" :
            "\n<li " + 
              (guard((context != null) ? context['deleted'] : null) ?
                "" :
                "hidden") + 
              ">\n<a component=\"topic/restore\" href=\"#\" class=\"dropdown-item " + 
              (guard((context != null) ? context['deleted'] : null) ?
                "" :
                "hidden") + 
              "\" role=\"menuitem\"><i class=\"fa fa-fw fa-history\"></i> [[topic:thread-tools.restore]]</a>\n</li>\n") + 
          "\n" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['purge'] : null) ?
            "\n<li " + 
              (guard((context != null) ? context['deleted'] : null) ?
                "" :
                "hidden") + 
              ">\n<a component=\"topic/purge\" href=\"#\" class=\"dropdown-item " + 
              (guard((context != null) ? context['deleted'] : null) ?
                "" :
                "hidden") + 
              "\" role=\"menuitem\"><i class=\"fa fa-fw fa-eraser\"></i> [[topic:thread-tools.purge]]</a>\n</li>\n" :
            "") + 
          "\n" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['isAdminOrMod'] : null) ?
            "\n<li>\n<a component=\"topic/delete/posts\" class=\"dropdown-item\" href=\"#\" role=\"menuitem\"><i class=\"fa fa-fw fa-trash-o\"></i> [[topic:thread-tools.delete-posts]]</a>\n</li>\n" :
            "") + 
          "\n" + 
          compiled.blocks['thread_tools'](helpers, context, guard, iter, helper) + 
          "\n" :
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
