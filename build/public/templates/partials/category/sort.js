
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
    return "<div class=\"btn-group bottom-sheet\" component=\"thread/sort\">\n<button class=\"btn btn-outline-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-label=\"[[aria:topic-sort-option, " + 
      __escape(guard((context != null) ? context['sortOptionLabel'] : null)) + 
      "]]\">\n<i class=\"fa fa-fw fa-sort\"></i>\n<span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">" + 
      __escape(guard((context != null) ? context['sortOptionLabel'] : null)) + 
      "</span>\n<span class=\"caret\"></span>\n</button>\n<ul class=\"dropdown-menu dropdown-menu-end\" role=\"menu\">\n<li><a class=\"dropdown-item\" href=\"#\" class=\"recently_replied\" data-sort=\"recently_replied\" role=\"menuitem\"><i class=\"fa fa-fw\"></i> [[topic:recently-replied]]</a></li>\n<li><a class=\"dropdown-item\" href=\"#\" class=\"recently_created\" data-sort=\"recently_created\" role=\"menuitem\"><i class=\"fa fa-fw\"></i> [[topic:recently-created]]</a></li>\n<li><a class=\"dropdown-item\" href=\"#\" class=\"most_posts\" data-sort=\"most_posts\" role=\"menuitem\"><i class=\"fa fa-fw\"></i> [[topic:most-posts]]</a></li>\n<li><a class=\"dropdown-item\" href=\"#\" class=\"most_votes\" data-sort=\"most_votes\" role=\"menuitem\"><i class=\"fa fa-fw\"></i> [[topic:most-votes]]</a></li>\n<li><a class=\"dropdown-item\" href=\"#\" class=\"most_views\" data-sort=\"most_views\" role=\"menuitem\"><i class=\"fa fa-fw\"></i> [[topic:most-views]]</a></li>\n</ul>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
