
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
    return "<div component=\"category-selector\" class=\"btn-group\">\n<button type=\"button\" class=\"btn btn-light btn-sm dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<i class=\"fa fa-fw fa-lock text-primary\"></i> <span>[[admin/manage/groups:privileges]]</span> <span class=\"caret\"></span>\n</button>\n<div component=\"category-selector-search\" class=\"hidden position-absolute\">\n<input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\n</div>\n<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu dropdown-menu-end p-1\" role=\"menu\">\n<li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\n<a class=\"dropdown-item\" role=\"menuitem\">[[search:no-matches]]</a>\n</li>\n" + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>";
  }

  compiled.blocks = {
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categories'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['disabledClass'] : null) ?
            "disabled" :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['parentCid'] : null)) + 
          "\">\n<a class=\"dropdown-item rounded-1\" role=\"menuitem\">" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['level'] : null)) + 
          "\n<span component=\"category-markup\">\n<div class=\"category-item d-inline-block\">\n" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "24px", "rounded-circle"])) + 
          "\n" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
          "\n</div>\n</span>\n</a>\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
