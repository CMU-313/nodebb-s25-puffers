
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
    return "<div class=\"overflow-hidden\">\n<ul id=\"recent_topics\" class=\"list-unstyled d-flex flex-column gap-3\" data-numtopics=\"" + 
      __escape(guard((context != null) ? context['numTopics'] : null)) + 
      "\">\n" + 
      compiled.blocks['topics'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n<script>\n'use strict';\n/* globals app, socket*/\n(function() {\nfunction onLoad() {\nvar\ttopics = $('#recent_topics');\nvar recentTopicsWidget = app.widgets.recentTopics;\nvar numTopics = parseInt(topics.attr('data-numtopics'), 10) || 8;\nif (!recentTopicsWidget) {\nrecentTopicsWidget = {};\nrecentTopicsWidget.onNewTopic = function(topic) {\nvar recentTopics = $('#recent_topics');\nif (!recentTopics.length) {\nreturn;\n}\napp.parseAndTranslate('widgets/partials/topics', { topics: [topic] }, function(html) {\nprocessHtml(html);\nhtml.hide()\n.prependTo(recentTopics)\n.fadeIn();\nif (recentTopics.children().length > numTopics) {\nrecentTopics.children().last().remove();\n}\n});\n};\napp.widgets.recentTopics = recentTopicsWidget;\nsocket.on('event:new_topic', app.widgets.recentTopics.onNewTopic);\n}\nfunction processHtml(html) {\nif ($.timeago) {\nhtml.find('span.timeago').timeago();\n}\n}\n}\nif (document.readyState === 'loading') {\ndocument.addEventListener('DOMContentLoaded', onLoad);\n} else {\nonLoad();\n}\n})();\n</script>";
  }

  compiled.blocks = {
    'topics': function topics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['topics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li class=\"widget-topics\">\n<div class=\"d-flex gap-1\">\n<a class=\"text-decoration-none\" href=\"" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\">\n" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['user'] : null), "24px", guard((context != null) ? context['true'] : null), "avatar-tooltip not-responsive"])) + 
          "\n</a>\n<div class=\"px-1 text-truncate\">\n<a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
          "</a>\n</div>\n</div>\n<div class=\"text-end text-xs post-preview-footer fs-6\">\n<span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['lastposttimeISO'] : null)) + 
          "\"></span>\n</div>\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
