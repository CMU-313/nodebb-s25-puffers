
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
    return "<ul component=\"user/list/menu\" class=\"nav nav-pills\">\n<li class=\"nav-item\">\n<a class=\"nav-link\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/users?section=online\">[[global:online]]</a>\n</li>\n<li class=\"nav-item\">\n<a class=\"nav-link\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/users?section=sort-posts\">[[users:top-posters]]</a>\n</li>\n" + 
      (guard((context != null) ? context['reputation:disabled'] : null) ?
        "" :
        "\n<li class=\"nav-item\">\n<a class=\"nav-link\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/users?section=sort-reputation\">[[users:most-reputation]]</a>\n</li>\n") + 
      "\n" + 
      (guard((context != null) ? context['isAdminOrGlobalMod'] : null) ?
        "\n<li class=\"nav-item\">\n<a class=\"nav-link\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/users?section=flagged\">[[users:most-flags]]</a>\n</li>\n<li class=\"nav-item\">\n<a class=\"nav-link\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/users?section=banned\">[[user:banned]]</a>\n</li>\n" :
        "") + 
      "\n</ul>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
