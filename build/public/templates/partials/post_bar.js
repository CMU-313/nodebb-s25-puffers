
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
    return "<div class=\"topic-main-buttons float-end d-inline-block\">\n<span class=\"loading-indicator btn float-start hidden\" done=\"0\">\n<span class=\"hidden-xs\">[[topic:loading-more-posts]]</span> <i class=\"fa fa-refresh fa-spin\"></i>\n</span>\n" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n<button component=\"topic/mark-unread\" class=\"btn btn-sm btn-outline-secondary\" title=\"[[topic:mark-unread]]\">\n<i class=\"fa fa-fw fa-inbox\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"></span>\n</button>\n" :
        "") + 
      "\n" + 
      (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\n<div class=\"btn-group bottom-sheet\" component=\"topic/watch\"\ndata-bs-toggle=\"tooltip\"\n" + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "title=\"[[topic:watching]]\"" :
            "") + 
          "\n" + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "title=\"[[topic:not-watching]]\"" :
            "") + 
          "\n" + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "title=\"[[topic:ignoring]]\"" :
            "") + 
          "\n>\n<button class=\"btn btn-sm btn-outline-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span component=\"topic/following/menu\" " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-bell-o\"></i></span>\n<span component=\"topic/not-following/menu\" " + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-bell-slash-o\"></i></span>\n<span component=\"topic/ignoring/menu\" " + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-eye-slash\"></i></span>\n</button>\n<ul class=\"dropdown-menu dropdown-menu-end\" role=\"menu\">\n<li>\n<a class=\"dropdown-item d-flex\" href=\"#\" component=\"topic/following\" role=\"menuitem\">\n<span><i component=\"topic/following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n<div class=\"d-flex flex-column\">\n<span><i class=\"fa fa-fw fa-bell-o\"></i> [[topic:watching]]</span>\n<p class=\"help-text text-muted\"><small>[[topic:watching.description]]</small></p>\n</div>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item d-flex\" href=\"#\" component=\"topic/not-following\" role=\"menuitem\">\n<span><i component=\"topic/not-following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n<div class=\"d-flex flex-column\">\n<span><i class=\"fa fa-fw fa-bell-slash-o\"></i> [[topic:not-watching]]</span>\n<p class=\"help-text text-muted\"><small>[[topic:not-watching.description]]</small></p>\n</div>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item d-flex\" href=\"#\" component=\"topic/ignoring\" role=\"menuitem\">\n<span><i component=\"topic/ignoring/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n<div class=\"d-flex flex-column\">\n<span><i class=\"fa fa-fw fa-eye-slash\"></i> [[topic:ignoring]]</span>\n<p class=\"help-text text-muted\"><small>[[topic:ignoring.description]]</small></p>\n</div>\n</a>\n</li>\n</ul>\n</div>\n" :
        "") + 
      "\n<div title=\"[[topic:sort-by]]\" class=\"btn-group bottom-sheet hidden-xs\" component=\"thread/sort\">\n<button class=\"btn btn-sm btn-outline-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-label=\"[[aria:post-sort-option, " + 
      __escape(guard((context != null) ? context['sortOptionLabel'] : null)) + 
      "]]\">\n<i class=\"fa fa-fw fa-sort\"></i></button>\n<ul class=\"dropdown-menu dropdown-menu-end\" role=\"menu\">\n<li><a class=\"dropdown-item\" href=\"#\" class=\"oldest_to_newest\" data-sort=\"oldest_to_newest\" role=\"menuitem\"><i class=\"fa fa-fw\"></i> [[topic:oldest-to-newest]]</a></li>\n<li><a class=\"dropdown-item\" href=\"#\" class=\"newest_to_oldest\" data-sort=\"newest_to_oldest\" role=\"menuitem\"><i class=\"fa fa-fw\"></i> [[topic:newest-to-oldest]]</a></li>\n<li><a class=\"dropdown-item\" href=\"#\" class=\"most_votes\" data-sort=\"most_votes\" role=\"menuitem\"><i class=\"fa fa-fw\"></i> [[topic:most-votes]]</a></li>\n</ul>\n</div>\n<div class=\"d-inline-block\">\n" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['view_thread_tools'] : null) ?
        "\n<div title=\"[[topic:thread-tools.title]]\" class=\"btn-group thread-tools bottom-sheet\">\n<button class=\"btn btn-sm btn-outline-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<i class=\"fa fa-fw fa-gear\"></i>\n</button>\n<ul class=\"dropdown-menu dropdown-menu-end\" role=\"menu\"></ul>\n</div>\n" :
        "") + 
      "\n</div>\n<div component=\"topic/reply/container\" class=\"btn-group bottom-sheet " + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
        "" :
        "hidden") + 
      "\">\n<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/compose?tid=" + 
      __escape(guard((context != null) ? context['tid'] : null)) + 
      "\" class=\"btn btn-sm btn-primary\" component=\"topic/reply\" data-ajaxify=\"false\" role=\"button\"><i class=\"fa fa-reply visible-xs-inline\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"> [[topic:reply]]</span></a>\n<button type=\"button\" class=\"btn btn-sm btn-primary dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span class=\"caret\"></span>\n</button>\n<ul class=\"dropdown-menu dropdown-menu-end\" role=\"menu\">\n<li><a class=\"dropdown-item\" href=\"#\" component=\"topic/reply-as-topic\" role=\"menuitem\">[[topic:reply-as-topic]]</a></li>\n</ul>\n</div>\n" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "" :
            "\n" + 
              (guard((context != null) ? context['locked'] : null) ?
                "\n<a component=\"topic/reply/locked\" class=\"btn btn-sm btn-primary\" disabled><i class=\"fa fa-lock\"></i> [[topic:locked]]</a>\n" :
                "") + 
              "\n") + 
          "\n" + 
          (guard((context != null) ? context['locked'] : null) ?
            "" :
            "\n<a component=\"topic/reply/locked\" class=\"btn btn-sm btn-primary hidden\" disabled><i class=\"fa fa-lock\"></i> [[topic:locked]]</a>\n") + 
          "\n" :
        "\n" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "" :
            "\n<a component=\"topic/reply/guest\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/login\" class=\"btn btn-sm btn-primary\">[[topic:guest-login-reply]]</a>\n") + 
          "\n") + 
      "\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
