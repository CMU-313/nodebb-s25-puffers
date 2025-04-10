
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
    return (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\n<div class=\"btn-group bottom-sheet\" component=\"tag/watch\"\ndata-bs-toggle=\"tooltip\">\n<button class=\"btn btn-outline-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span component=\"tag/following/menu\" " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "" :
            "class=\"hidden\"") + 
          ">\n<i class=\"fa fa-fw fa-bell-o\"></i>\n<span class=\"d-none d-md-inline\">[[tags:watching]]</span>\n</span>\n<span component=\"tag/not-following/menu\" " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "class=\"hidden\"" :
            "") + 
          ">\n<i class=\"fa fa-fw fa-bell-slash-o\"></i>\n<span class=\"d-none d-md-inline\">[[tags:not-watching]]</span>\n</span>\n</button>\n<ul class=\"dropdown-menu dropdown-menu-end\" role=\"menu\">\n<li>\n<a class=\"dropdown-item d-flex\" href=\"#\" component=\"tag/following\" role=\"menuitem\">\n<span><i component=\"tag/following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n<div class=\"d-flex flex-column\">\n<span><i class=\"fa fa-fw fa-bell-o\"></i> [[tags:watching]]</span>\n<p class=\"help-text text-muted\"><small>[[tags:watching.description]]</small></p>\n</div>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item d-flex\" href=\"#\" component=\"tag/not-following\" role=\"menuitem\">\n<span><i component=\"tag/not-following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "" :
            "fa-check") + 
          "\"></i></span>\n<div class=\"d-flex flex-column\">\n<span><i class=\"fa fa-fw fa-bell-slash-o\"></i> [[tags:not-watching]]</span>\n<p class=\"help-text text-muted\"><small>[[tags:not-watching.description]]</small></p>\n</div>\n</a>\n</li>\n</ul>\n</div>\n" :
        "");
  }

  compiled.blocks = {
    
  };

  return compiled;
})
