
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
        "\n<div class=\"btn-group bottom-sheet\" component=\"topic/watch\">\n<button class=\"btn btn-outline-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span component=\"category/watching/menu\" " + 
          (guard((context != null) ? context['isWatched'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-bell-o\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"> [[category:watching]]</span></span>\n<span component=\"category/tracking/menu\" " + 
          (guard((context != null) ? context['isTracked'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-inbox\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"> [[category:tracking]]</span></span>\n<span component=\"category/notwatching/menu\" " + 
          (guard((context != null) ? context['isNotWatched'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-clock-o\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"> [[category:not-watching]]</span></span>\n<span component=\"category/ignoring/menu\" " + 
          (guard((context != null) ? context['isIgnored'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-eye-slash\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"> [[category:ignoring]]</span></span>\n<span class=\"caret\"></span>\n</button>\n<ul class=\"dropdown-menu dropdown-menu-end\" role=\"menu\">\n<li>\n<a class=\"dropdown-item d-flex\" href=\"#\" component=\"category/watching\" data-state=\"watching\" role=\"menuitem\">\n<span><i component=\"category/watching/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isWatched'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n<div class=\"d-flex flex-column\">\n<span><i class=\"fa fa-fw fa-bell-o\"></i> [[category:watching]]</span>\n<p class=\"help-text text-muted\"><small>[[category:watching.description]]</small></p>\n</div>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item d-flex\" href=\"#\" component=\"category/tracking\" data-state=\"tracking\" role=\"menuitem\">\n<span><i component=\"category/tracking/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isTracked'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n<div class=\"d-flex flex-column\">\n<span><i class=\"fa fa-fw fa-inbox\"></i> [[category:tracking]]</span>\n<p class=\"help-text text-muted\"><small>[[category:tracking.description]]</small></p>\n</div>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item d-flex\" href=\"#\" component=\"category/notwatching\" data-state=\"notwatching\" role=\"menuitem\">\n<span><i component=\"category/notwatching/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isNotWatched'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n<div class=\"d-flex flex-column\">\n<span><i class=\"fa fa-fw fa-clock-o\"></i> [[category:not-watching]]</span>\n<p class=\"help-text text-muted\"><small>[[category:not-watching.description]]</small></p>\n</div>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item d-flex\" href=\"#\" component=\"category/ignoring\" data-state=\"ignoring\" role=\"menuitem\">\n<span><i component=\"category/ignoring/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isIgnored'] : null) ?
            "fa-check" :
            "") + 
          "\"></i></span>\n<div class=\"d-flex flex-column\">\n<span><i class=\"fa fa-fw fa-eye-slash\"></i> [[category:ignoring]]</span>\n<p class=\"help-text text-muted\"><small>[[category:ignoring.description]]</small></p>\n</div>\n</a>\n</li>\n</ul>\n</div>\n" :
        "");
  }

  compiled.blocks = {
    
  };

  return compiled;
})
