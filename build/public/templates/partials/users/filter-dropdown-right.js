
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
    return "<div class=\"dropdown dropdown-right bottom-sheet " + 
      (guard((context != null && context['users'] != null) ? context['users']['length'] : null) ?
        "" :
        "hidden") + 
      "\">\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
