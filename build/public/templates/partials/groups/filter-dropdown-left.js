
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
    return "<div class=\"dropdown dropdown-left bottom-sheet " + 
      (guard((context != null && context['groups'] != null) ? context['groups']['length'] : null) ?
        "" :
        "hidden") + 
      "\">\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
