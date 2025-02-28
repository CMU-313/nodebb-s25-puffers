
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
    return "<li component=\"categories/category\" data-cid=\"" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      "\" data-numRecentReplies=\"1\" class=\"row clearfix category-" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      " " + 
      __escape(guard((context != null) ? context['unread-class'] : null)) + 
      "\">\n<meta itemprop=\"name\" content=\"" + 
      __escape(guard((context != null) ? context['name'] : null)) + 
      "\">\n<div class=\"content col-12 " + 
      (guard((context != null && context['config'] != null) ? context['config']['hideCategoryLastPost'] : null) ?
        "col-md-10 col-sm-12" :
        "col-md-7 col-sm-9") + 
      "\">\n<div class=\"float-start\">\n" + 
      __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "48px", "rounded-circle"])) + 
      "\n</div>\n<h2 class=\"title\">\n" + 
      (guard((context != null) ? context['isSection'] : null) ?
        "\n" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "\n" :
        "\n" + 
          (guard((context != null) ? context['link'] : null) ?
            "\n<a href=\"" + 
              __escape(guard((context != null) ? context['link'] : null)) + 
              "\" itemprop=\"url\">\n" :
            "\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/category/" + 
              __escape(guard((context != null) ? context['slug'] : null)) + 
              "\" itemprop=\"url\">\n") + 
          "\n" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "\n</a>\n") + 
      "\n</h2>\n<div>\n" + 
      (guard((context != null) ? context['descriptionParsed'] : null) ?
        "\n<div class=\"description text-muted\">\n" + 
          __escape(guard((context != null) ? context['descriptionParsed'] : null)) + 
          "\n</div>\n" :
        "") + 
      "\n" + 
      (guard((context != null && context['config'] != null) ? context['config']['hideSubCategories'] : null) ?
        "" :
        "\n" + 
          (guard((context != null && context['children'] != null) ? context['children']['length'] : null) ?
            "\n<div class=\"category-children\">\n" + 
              compiled.blocks['../children'](helpers, context, guard, iter, helper) + 
              "\n</div>\n" :
            "") + 
          "\n") + 
      "\n</div>\n<span class=\"d-block d-sm-none float-end\">\n" + 
      (guard((context != null && context['teaser'] != null) ? context['teaser']['timestampISO'] : null) ?
        "\n<a class=\"permalink\" href=\"" + 
          __escape(guard((context != null && context['teaser'] != null) ? context['teaser']['url'] : null)) + 
          "\">\n<small class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['teaser'] != null) ? context['teaser']['timestampISO'] : null)) + 
          "\"></small>\n</a>\n" :
        "") + 
      "\n</span>\n</div>\n" + 
      (guard((context != null) ? context['link'] : null) ?
        "" :
        "\n<div class=\"col-md-1 d-none d-md-block stats text-muted\">\n<span title=\"" + 
          __escape(guard((context != null) ? context['totalTopicCount'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null) ? context['totalTopicCount'] : null)])) + 
          "</span><br />\n<small>[[global:topics]]</small>\n</div>\n<div class=\"col-md-1 d-none d-md-block stats text-muted\">\n<span title=\"" + 
          __escape(guard((context != null) ? context['totalPostCount'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null) ? context['totalPostCount'] : null)])) + 
          "</span><br />\n<small>[[global:posts]]</small>\n</div>\n" + 
          (guard((context != null && context['config'] != null) ? context['config']['hideCategoryLastPost'] : null) ?
            "" :
            "\n<div class=\"col-md-3 col-sm-3 teaser d-none d-sm-block\" component=\"topic/teaser\">\n<div class=\"lastpost background-link-container\" style=\"border-color: " + 
              __escape(guard((context != null) ? context['bgColor'] : null)) + 
              "\">\n" + 
              compiled.blocks['./posts'](helpers, context, guard, iter, helper) + 
              "\n" + 
              (guard((context != null && context['posts'] != null) ? context['posts']['length'] : null) ?
                "" :
                "\n<div component=\"category/posts\">\n<div class=\"post-content\">\n[[category:no-new-posts]]\n</div>\n</div>\n") + 
              "\n</div>\n</div>\n") + 
          "\n") + 
      "\n</li>";
  }

  compiled.blocks = {
    '../children': function children(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['children'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['isSection'] : null) ?
            "" :
            "\n<span class=\"category-children-item\">\n" + 
              __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "24px", "rounded-circle"])) + 
              "\n" + 
              (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['link'] : null) ?
                "\n<a href=\"" + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['link'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['name'] : null)) + 
                  "</a>\n" :
                "\n<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/category/" + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['slug'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['name'] : null)) + 
                  "</a>\n") + 
              "\n</span>\n") + 
          "\n";
      }, function alt() {
        return "";
      });
    },
    './posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          (index === 0 ?
            "\n<div component=\"category/posts\">\n<a class=\"background-link\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['slug'] : null)) + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null) ?
                "/" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null)) :
                "") + 
              "\"></a>\n<p>\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
              "</a>\n<a class=\"permalink text-muted\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['slug'] : null)) + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null) ?
                "/" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null)) :
                "") + 
              "\">\n<small class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
              "\"></small>\n</a>\n</p>\n<div class=\"post-content\">\n" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
              "\n</div>\n</div>\n" :
            "") + 
          "\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
