
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
    return (guard((context != null && context['children'] != null) ? context['children']['length'] : null) ?
        "\n<div class=\"subcategory\">\n" + 
          (guard((context != null) ? context['hasMoreSubCategories'] : null) ?
            "\n<div class=\"mb-2\"><div component=\"category-selector\" class=\"btn-group dropdown-left category-dropdown-container bottom-sheet\">\n<button type=\"button\" class=\"btn btn-outline-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span component=\"category-selector-selected\">\n" + 
              ((guard((context != null) ? context['selectedCategory'] : null) && !guard((context != null) ? context['showCategorySelectLabel'] : null)) ?
                "\n<span class=\"category-item\">\n" + 
                  __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null) ? context['selectedCategory'] : null), "24px", "rounded-circle"])) + 
                  "\n" + 
                  __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) + 
                  "\n</span>\n" :
                "\n<span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">" + 
                  (guard((context != null) ? context['selectCategoryLabel'] : null) ?
                    __escape(guard((context != null) ? context['selectCategoryLabel'] : null)) :
                    "[[topic:thread-tools.select-category]]") + 
                  "</span><span class=\"visible-xs-inline\"><i class=\"fa fa-fw " + 
                  (guard((context != null) ? context['selectCategoryIcon'] : null) ?
                    __escape(guard((context != null) ? context['selectCategoryIcon'] : null)) :
                    "fa-list") + 
                  "\"></i></span>\n") + 
              "</span> <span class=\"caret\"></span>\n</button>\n<div component=\"category-selector-search\" class=\"hidden position-absolute\">\n<input type=\"text\" class=\"form-control\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\n</div>\n<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu\" role=\"menu\">\n<li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\n<a class=\"dropdown-item\" role=\"menuitem\">[[search:no-matches]]</a>\n</li>\n" + 
              compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
              "\n</ul>\n</div></div>\n" :
            "\n<p>[[category:subcategories]]</p>\n") + 
          "\n<ul component=\"category/subcategory/container\" class=\"categories list-unstyled\" itemscope itemtype=\"http://www.schema.org/ItemList\">\n" + 
          compiled.blocks['children'](helpers, context, guard, iter, helper) + 
          "\n</ul>\n" + 
          (guard((context != null) ? context['hasMoreSubCategories'] : null) ?
            "\n<button class=\"btn btn-outline-secondary mb-2\" component=\"category/load-more-subcategories\">[[category:x-more-categories, " + 
              __escape(guard((context != null) ? context['subCategoriesLeft'] : null)) + 
              "]]</button>\n" :
            "") + 
          "\n</div>\n" :
        "");
  }

  compiled.blocks = {
    'categoryItems': function categoryItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled " :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\">\n<a class=\"dropdown-item " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled " :
            "") + 
          "\" role=\"menuitem\" href=\"#\">" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "\n<span component=\"category-markup\" style=\"" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['match'] : null) ?
            "font-weight: bold;" :
            "") + 
          "\">\n<div class=\"category-item d-inline-block\">\n" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null) ?
            "\n" + 
              __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "24px", "rounded-circle"])) + 
              "\n" :
            "") + 
          "\n" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\n</div>\n</span>\n</a>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'children': function children(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['children'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li component=\"categories/category\" data-cid=\"" + 
          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['cid'] : null)) + 
          "\" data-numRecentReplies=\"1\" class=\"row clearfix category-" + 
          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['cid'] : null)) + 
          " " + 
          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['unread-class'] : null)) + 
          "\">\n<meta itemprop=\"name\" content=\"" + 
          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['name'] : null)) + 
          "\">\n<div class=\"content col-12 " + 
          (guard((context != null && context['config'] != null) ? context['config']['hideCategoryLastPost'] : null) ?
            "col-md-10 col-sm-12" :
            "col-md-7 col-sm-9") + 
          "\">\n<div class=\"float-start\">\n" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "48px", "rounded-circle"])) + 
          "\n</div>\n<h2 class=\"title\">\n" + 
          (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['isSection'] : null) ?
            "\n" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['name'] : null)) + 
              "\n" :
            "\n" + 
              (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['link'] : null) ?
                "\n<a href=\"" + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['link'] : null)) + 
                  "\" itemprop=\"url\">\n" :
                "\n<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/category/" + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['slug'] : null)) + 
                  "\" itemprop=\"url\">\n") + 
              "\n" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['name'] : null)) + 
              "\n</a>\n") + 
          "\n</h2>\n<div>\n" + 
          (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['descriptionParsed'] : null) ?
            "\n<div class=\"description text-muted\">\n" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['descriptionParsed'] : null)) + 
              "\n</div>\n" :
            "") + 
          "\n" + 
          (guard((context != null && context['config'] != null) ? context['config']['hideSubCategories'] : null) ?
            "" :
            "\n" + 
              (guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['children'] != null) ? context['children'][key0]['children']['length'] : null) ?
                "\n<div class=\"category-children\">\n" + 
                  iter(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['children'] : null), function each(key1, index, length, value) {
                    var key = key1;
                    return "\n" + 
                      (guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['children'] != null && context['children'][key0]['children'][key1] != null) ? context['children'][key0]['children'][key1]['isSection'] : null) ?
                        "" :
                        "\n<span class=\"category-children-item\">\n" + 
                          __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "24px", "rounded-circle"])) + 
                          "\n" + 
                          (guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['children'] != null && context['children'][key0]['children'][key1] != null) ? context['children'][key0]['children'][key1]['link'] : null) ?
                            "\n<a href=\"" + 
                              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['children'] != null && context['children'][key0]['children'][key1] != null) ? context['children'][key0]['children'][key1]['link'] : null)) + 
                              "\">" + 
                              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['children'] != null && context['children'][key0]['children'][key1] != null) ? context['children'][key0]['children'][key1]['name'] : null)) + 
                              "</a>\n" :
                            "\n<a href=\"" + 
                              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                              "/category/" + 
                              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['children'] != null && context['children'][key0]['children'][key1] != null) ? context['children'][key0]['children'][key1]['slug'] : null)) + 
                              "\">" + 
                              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['children'] != null && context['children'][key0]['children'][key1] != null) ? context['children'][key0]['children'][key1]['name'] : null)) + 
                              "</a>\n") + 
                          "\n</span>\n") + 
                      "\n";
                  }, function alt() {
                    return "";
                  }) + 
                  "\n</div>\n" :
                "") + 
              "\n") + 
          "\n</div>\n<span class=\"d-block d-sm-none float-end\">\n" + 
          (guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['teaser'] != null) ? context['children'][key0]['teaser']['timestampISO'] : null) ?
            "\n<a class=\"permalink\" href=\"" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['teaser'] != null) ? context['children'][key0]['teaser']['url'] : null)) + 
              "\">\n<small class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['teaser'] != null) ? context['children'][key0]['teaser']['timestampISO'] : null)) + 
              "\"></small>\n</a>\n" :
            "") + 
          "\n</span>\n</div>\n" + 
          (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['link'] : null) ?
            "" :
            "\n<div class=\"col-md-1 d-none d-md-block stats text-muted\">\n<span title=\"" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['totalTopicCount'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['totalTopicCount'] : null)])) + 
              "</span><br />\n<small>[[global:topics]]</small>\n</div>\n<div class=\"col-md-1 d-none d-md-block stats text-muted\">\n<span title=\"" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['totalPostCount'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['totalPostCount'] : null)])) + 
              "</span><br />\n<small>[[global:posts]]</small>\n</div>\n" + 
              (guard((context != null && context['config'] != null) ? context['config']['hideCategoryLastPost'] : null) ?
                "" :
                "\n<div class=\"col-md-3 col-sm-3 teaser d-none d-sm-block\" component=\"topic/teaser\">\n<div class=\"lastpost background-link-container\" style=\"border-color: " + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['bgColor'] : null)) + 
                  "\">\n" + 
                  iter(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['posts'] : null), function each(key1, index, length, value) {
                    var key = key1;
                    return "\n" + 
                      (index === 0 ?
                        "\n<div component=\"category/posts\">\n<a class=\"background-link\" href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/topic/" + 
                          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['topic'] != null) ? context['children'][key0]['posts'][key1]['topic']['slug'] : null)) + 
                          (guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['index'] : null) ?
                            "/" + 
                              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['index'] : null)) :
                            "") + 
                          "\"></a>\n<p>\n<a href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/user/" + 
                          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['user'] != null) ? context['children'][key0]['posts'][key1]['user']['userslug'] : null)) + 
                          "\">" + 
                          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['user'] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
                          "</a>\n<a class=\"permalink text-muted\" href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/topic/" + 
                          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['topic'] != null) ? context['children'][key0]['posts'][key1]['topic']['slug'] : null)) + 
                          (guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['index'] : null) ?
                            "/" + 
                              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['index'] : null)) :
                            "") + 
                          "\">\n<small class=\"timeago\" title=\"" + 
                          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['timestampISO'] : null)) + 
                          "\"></small>\n</a>\n</p>\n<div class=\"post-content\">\n" + 
                          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['content'] : null)) + 
                          "\n</div>\n</div>\n" :
                        "") + 
                      "\n";
                  }, function alt() {
                    return "";
                  }) + 
                  "\n" + 
                  (guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null) ? context['children'][key0]['posts']['length'] : null) ?
                    "" :
                    "\n<div component=\"category/posts\">\n<div class=\"post-content\">\n[[category:no-new-posts]]\n</div>\n</div>\n") + 
                  "\n</div>\n</div>\n") + 
              "\n") + 
          "\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
