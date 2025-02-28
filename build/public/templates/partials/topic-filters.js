
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
    return "<div class=\"btn-group bottom-sheet" + 
      (guard((context != null && context['filters'] != null) ? context['filters']['length'] : null) ?
        "" :
        " hidden") + 
      "\">\n<button type=\"button\" class=\"btn btn-outline-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">" + 
      __escape(guard((context != null && context['selectedFilter'] != null) ? context['selectedFilter']['name'] : null)) + 
      "</span><span class=\"visible-xs-inline\"><i class=\"fa fa-fw " + 
      __escape(guard((context != null && context['selectedFilter'] != null) ? context['selectedFilter']['icon'] : null)) + 
      "\"></i></span> <span class=\"caret\"></span>\n</button>\n<ul class=\"dropdown-menu dropdown-menu-end\" role=\"menu\">\n" + 
      compiled.blocks['filters'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>";
  }

  compiled.blocks = {
    'filters': function filters(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['filters'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['filters'] != null && context['filters'][key0] != null) ? context['filters'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          "\">\n<a class=\"dropdown-item\" role=\"menuitem\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/" + 
          __escape(guard((context != null && context['filters'] != null && context['filters'][key0] != null) ? context['filters'][key0]['url'] : null)) + 
          "\"><i class=\"fa fa-fw " + 
          (guard((context != null && context['filters'] != null && context['filters'][key0] != null) ? context['filters'][key0]['selected'] : null) ?
            "fa-check" :
            "") + 
          "\"></i>" + 
          __escape(guard((context != null && context['filters'] != null && context['filters'][key0] != null) ? context['filters'][key0]['name'] : null)) + 
          "</a>\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
