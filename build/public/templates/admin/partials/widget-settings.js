
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
    return "<div class=\"mb-3\">\n<label class=\"form-label\">[[admin/extend/widgets:title]]</label>\n<input type=\"text\" class=\"form-control\" name=\"title\" placeholder=\"[[admin/extend/widgets:title.placeholder]]\" />\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\">[[admin/extend/widgets:container]]</label>\n<textarea rows=\"4\" class=\"form-control container-html\" name=\"container\" placeholder=\"[[admin/extend/widgets:container.placeholder]]\"></textarea>\n</div>\n<div class=\"row mb-3\">\n<div class=\"col-lg-6\">\n<label class=\"form-label\">[[admin/extend/widgets:show-to-groups]]</label>\n<select name=\"groups\" class=\"form-select\" multiple size=\"10\">\n" + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\n</select>\n</div>\n<div class=\"col-lg-6\">\n<label class=\"form-label\">[[admin/extend/widgets:hide-from-groups]]</label>\n<select name=\"groupsHideFrom\" class=\"form-select\" multiple size=\"10\">\n" + 
      iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<option value=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "</option>\n";
      }, function alt() {
        return "";
      }) + 
      "\n</select>\n</div>\n</div>\n<div class=\"row mb-3\">\n<div class=\"col-lg-6\">\n<label class=\"form-label\">[[admin/extend/widgets:start-date]]</label>\n<input class=\"form-control\" name=\"startDate\" type=\"datetime-local\" />\n</div>\n<div class=\"col-lg-6\">\n<label class=\"form-label\">[[admin/extend/widgets:end-date]]</label>\n<input class=\"form-control\" name=\"endDate\" type=\"datetime-local\" />\n</div>\n</div>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" name=\"hide-mobile\" id=\"hide-mobile-check\"/>\n<label class=\"form-check-label\" for=\"hide-mobile-check\">[[admin/extend/widgets:hide-on-mobile]]</label>\n</div>";
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<option value=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "</option>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
