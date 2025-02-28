
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
    return "<div title=\"[[topic:sort-by]]\" class=\"btn-group bottom-sheet hidden-xs\" component=\"thread/sort\">\n<button class=\"btn btn-sm btn-outline-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-label=\"[[aria:post-sort-option, " + 
      __escape(guard((context != null) ? context['sortOptionLabel'] : null)) + 
      "]]\">\n<i class=\"fa fa-fw fa-sort\"></i></button>\n<ul class=\"dropdown-menu dropdown-menu-end\" role=\"menu\">\n<li><a class=\"dropdown-item\" href=\"#\" class=\"oldest_to_newest\" data-sort=\"oldest_to_newest\" role=\"menuitem\"><i class=\"fa fa-fw\"></i> [[topic:oldest-to-newest]]</a></li>\n<li><a class=\"dropdown-item\" href=\"#\" class=\"newest_to_oldest\" data-sort=\"newest_to_oldest\" role=\"menuitem\"><i class=\"fa fa-fw\"></i> [[topic:newest-to-oldest]]</a></li>\n<li><a class=\"dropdown-item\" href=\"#\" class=\"most_votes\" data-sort=\"most_votes\" role=\"menuitem\"><i class=\"fa fa-fw\"></i> [[topic:most-votes]]</a></li>\n</ul>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
