
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
    return "<section class=\"menu-section\" data-section=\"navigation\">\n<ul class=\"menu-section-list text-bg-dark\"></ul>\n</section>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
