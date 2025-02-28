
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
    return (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n<div class=\"search\">\n<div id=\"advanced-search\" class=\"d-flex flex-column flex-md-row\">\n<!-- sidebar -->\n<div class=\"flex-0 pe-2 border-end-md text-sm mb-3\" style=\"flex-basis: 240px!important;\">\n<form action=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/search\" method=\"get\" class=\"nav sticky-md-top d-flex flex-row flex-md-column flex-wrap gap-3 pe-md-3\" style=\"top: 1rem; z-index: 1;\">\n<h2 class=\"fw-semibold tracking-tight mb-0\">[[global:search]]</h2>\n<input id=\"search-input\" name=\"term\" type=\"text\" class=\"form-control fw-semibold py-2 ps-2 pe-3\" id=\"search-input\" placeholder=\"[[search:type-to-search]]\">\n<select id=\"search-in\" name=\"in\" class=\"form-select text-sm py-2 ps-2 pe-3\">\n<option value=\"titlesposts\">[[search:in-titles-posts]]</option>\n<option value=\"titles\">[[search:in-titles]]</option>\n<option value=\"posts\">[[search:in-posts]]</option>\n<option value=\"bookmarks\">[[search:in-bookmarks]]</option>\n<option value=\"categories\">[[search:in-categories]]</option>\n" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['search:users'] : null) ?
        "\n<option value=\"users\">[[search:in-users]]</option>\n" :
        "") + 
      "\n" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['search:tags'] : null) ?
        "\n<option value=\"tags\">[[search:in-tags]]</option>\n" :
        "") + 
      "\n</select>\n<select id=\"match-words-filter\" name=\"matchWords\" class=\"post-search-item form-select text-sm py-2 ps-2 pe-3\">\n<option value=\"all\">[[search:match-all-words]]</option>\n<option value=\"any\">[[search:match-any-word]]</option>\n</select>\n<select id=\"show-results-as\" name=\"showAs\" class=\"post-search-item form-select text-sm py-2 ps-2 pe-3\">\n<option value=\"posts\" selected>[[search:show-results-as-posts]]</option>\n<option value=\"topics\">[[search:show-results-as-topics]]</option>\n</select>\n<button type=\"submit\" class=\"btn btn-primary fw-semibold form-control py-2 px-3\">[[global:search]]</button>\n</form>\n</div>\n<!-- filters and search results -->\n<div class=\"flex-1 ps-md-2 ps-lg-5\" style=\"min-width:0;\">\n<div class=\"d-flex flex-column gap-3\">\n<div class=\"d-flex flex-wrap gap-2 align-items-center\" component=\"search/filters\">\n<!-- category filter -->\n<div class=\"post-search-item\">\n<div component=\"category/filter\" class=\"dropdown\" data-filter-name=\"category\">\n<a component=\"category/filter/button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null && context['filters']['categories'] != null) ? context['filters']['categories']['active'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null && context['filters']['categories'] != null) ? context['filters']['categories']['active'] : null) ?
        __escape(guard((context != null && context['filters'] != null && context['filters']['categories'] != null) ? context['filters']['categories']['label'] : null)) :
        "[[search:categories]]") + 
      "</span>\n<span class=\"caret\"></span>\n</a>\n<ul class=\"dropdown-menu p-1 text-sm\" role=\"menu\">\n<li class=\"px-3 py-1 mb-2 d-flex flex-column gap-2\">\n<div component=\"category-selector-search\">\n<input type=\"text\" class=\"form-control\" component=\"category/filter/search\" placeholder=\"[[search:type-a-category]]\">\n</div>\n</li>\n<div component=\"category/list\" class=\"overflow-auto\" style=\"max-height: 350px;\"></div>\n<div class=\"px-3 py-1\">\n<div class=\"form-check\">\n<input id=\"search-children\" class=\"form-check-input\" type=\"checkbox\"/>\n<label class=\"form-check-label\" for=\"search-children\">[[search:search-child-categories]]</label>\n</div>\n</div>\n</ul>\n</div>\n</div>\n<!-- tag filter -->\n<div class=\"post-search-item\">\n<div component=\"tag/filter\" class=\"dropdown\" data-filter-name=\"tag\">\n<a component=\"tag/filter/button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null && context['filters']['tags'] != null) ? context['filters']['tags']['active'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null && context['filters']['tags'] != null) ? context['filters']['tags']['active'] : null) ?
        __escape(guard((context != null && context['filters'] != null && context['filters']['tags'] != null) ? context['filters']['tags']['label'] : null)) :
        "[[search:tags]]") + 
      "</span>\n<span class=\"caret\"></span>\n</a>\n<ul class=\"dropdown-menu p-1 text-sm\" style=\"width: 350px;\" role=\"menu\">\n<li class=\"px-3 py-1 d-flex flex-column gap-2\">\n<input type=\"text\" class=\"form-control\" component=\"tag/filter/search\" placeholder=\"[[search:type-a-tag]]\">\n<div component=\"tag/filter/selected\" class=\"d-flex flex-wrap gap-2\">\n" + 
      compiled.blocks['tagFilterSelected'](helpers, context, guard, iter, helper) + 
      "\n</div>\n<hr/>\n<div component=\"tag/filter/results\" class=\"d-flex flex-wrap gap-2\">\n" + 
      compiled.blocks['tagFilterResults'](helpers, context, guard, iter, helper) + 
      "\n</div>\n</li>\n</ul>\n</div>\n</div>\n<!-- user name filter -->\n<div class=\"post-search-item\">\n<div component=\"user/filter\" class=\"dropdown\" data-filter-name=\"user\">\n<a component=\"user/filter/button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null && context['filters']['users'] != null) ? context['filters']['users']['active'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null && context['filters']['users'] != null) ? context['filters']['users']['active'] : null) ?
        __escape(guard((context != null && context['filters'] != null && context['filters']['users'] != null) ? context['filters']['users']['label'] : null)) :
        "[[search:posted-by]]") + 
      "</span>\n<span class=\"caret\"></span>\n</a>\n<ul class=\"dropdown-menu p-1 text-sm\" style=\"width: 350px;\" role=\"menu\">\n<li class=\"px-3 py-1 d-flex flex-column gap-2\">\n<input type=\"text\" class=\"form-control\" component=\"user/filter/search\" placeholder=\"[[search:type-a-username]]\">\n<div component=\"user/filter/selected\" class=\"d-flex flex-wrap gap-2\">\n" + 
      compiled.blocks['userFilterSelected'](helpers, context, guard, iter, helper) + 
      "\n</div>\n<hr/>\n<div component=\"user/filter/results\" class=\"d-flex flex-wrap gap-2\">\n" + 
      compiled.blocks['userFilterResults'](helpers, context, guard, iter, helper) + 
      "\n</div>\n</li>\n</ul>\n</div>\n</div>\n<!-- reply count filter -->\n<div class=\"post-search-item\">\n<div class=\"dropdown\" data-filter-name=\"replies\">\n<a id=\"reply-count-button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null && context['filters']['replies'] != null) ? context['filters']['replies']['active'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null && context['filters']['replies'] != null) ? context['filters']['replies']['active'] : null) ?
        __escape(guard((context != null && context['filters'] != null && context['filters']['replies'] != null) ? context['filters']['replies']['label'] : null)) :
        "[[search:replies]]") + 
      "</span>\n<span class=\"caret\"></span>\n</a>\n<ul class=\"dropdown-menu p-1 text-sm\" style=\"width: 300px;\" role=\"menu\">\n<li class=\"px-3 py-1 d-flex flex-nowrap gap-2\">\n<select id=\"reply-count-filter\" class=\"form-select py-2 ps-2 pe-3\">\n<option value=\"atleast\">[[search:at-least]]</option>\n<option value=\"atmost\">[[search:at-most]]</option>\n</select>\n<input id=\"reply-count\" type=\"number\" min=\"0\" class=\"form-control py-2 ps-2 pe-3\" />\n</li>\n</ul>\n</div>\n</div>\n<!-- time filter -->\n<div class=\"post-search-item\">\n<div class=\"dropdown\" data-filter-name=\"time\">\n<a id=\"post-time-button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null && context['filters']['time'] != null) ? context['filters']['time']['active'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null && context['filters']['time'] != null) ? context['filters']['time']['active'] : null) ?
        __escape(guard((context != null && context['filters'] != null && context['filters']['time'] != null) ? context['filters']['time']['label'] : null)) :
        "[[search:time]]") + 
      "</span>\n<span class=\"caret\"></span>\n</a>\n<ul class=\"dropdown-menu p-1 text-sm\" style=\"width: 350px;\" role=\"menu\">\n<li class=\"px-3 py-1 d-flex flex-nowrap gap-2\">\n<select id=\"post-time-filter\" class=\"form-select py-2 ps-2 pe-3\">\n<option value=\"newer\">[[search:newer-than]]</option>\n<option value=\"older\">[[search:older-than]]</option>\n</select>\n<select id=\"post-time-range\" class=\"form-select py-2 ps-2 pe-3\">\n<option value=\"\">[[search:any-date]]</option>\n<option value=\"86400\">[[search:yesterday]]</option>\n<option value=\"604800\">[[search:one-week]]</option>\n<option value=\"1209600\">[[search:two-weeks]]</option>\n<option value=\"2592000\">[[search:one-month]]</option>\n<option value=\"7776000\">[[search:three-months]]</option>\n<option value=\"15552000\">[[search:six-months]]</option>\n<option value=\"31104000\">[[search:one-year]]</option>\n</select>\n</li>\n</ul>\n</div>\n</div>\n<!-- sort filter -->\n<div class=\"post-search-item\">\n<div class=\"dropdown\" data-filter-name=\"sort\">\n<a id=\"sort-by-button\" class=\"filter-btn btn btn-light btn-sm border " + 
      (guard((context != null && context['filters'] != null && context['filters']['sort'] != null) ? context['filters']['sort']['active'] : null) ?
        "active-filter" :
        "") + 
      " dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span class=\"filter-label\">" + 
      (guard((context != null && context['filters'] != null && context['filters']['sort'] != null) ? context['filters']['sort']['active'] : null) ?
        __escape(guard((context != null && context['filters'] != null && context['filters']['sort'] != null) ? context['filters']['sort']['label'] : null)) :
        "[[search:sort]]") + 
      "</span>\n<span class=\"caret\"></span>\n</a>\n<ul class=\"dropdown-menu p-1 text-sm\" style=\"width: 250px;\" role=\"menu\">\n<li class=\"px-3 py-1 d-flex flex-column gap-2\">\n<select id=\"post-sort-by\" class=\"form-select py-2 ps-2 pe-3\">\n<option value=\"relevance\">[[search:relevance]]</option>\n<option value=\"timestamp\">[[search:post-time]]</option>\n<option value=\"votes\">[[search:votes]]</option>\n<option value=\"topic.lastposttime\">[[search:last-reply-time]]</option>\n<option value=\"topic.title\">[[search:topic-title]]</option>\n<option value=\"topic.postcount\">[[search:number-of-replies]]</option>\n<option value=\"topic.viewcount\">[[search:number-of-views]]</option>\n<option value=\"topic.votes\">[[search:topic-votes]]</option>\n<option value=\"topic.timestamp\">[[search:topic-start-date]]</option>\n<option value=\"user.username\">[[search:username]]</option>\n<option value=\"category.name\">[[search:category]]</option>\n</select>\n<select id=\"post-sort-direction\" class=\"form-select py-2 ps-2 pe-3\">\n<option value=\"desc\">[[search:descending]]</option>\n<option value=\"asc\">[[search:ascending]]</option>\n</select>\n</li>\n</ul>\n</div>\n</div>\n<!-- save & reset preferences -->\n<div class=\"post-search-item\">\n<div class=\"dropdown\">\n<a class=\"btn btn-light btn-sm border border-gray-300 dropdown-toggle\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">[[search:save]] <span class=\"caret\"></span>\n</a>\n<ul class=\"dropdown-menu p-1 text-sm\" style=\"width: 300px;\" role=\"menu\">\n<li class=\"px-3 py-1 d-flex flex-column gap-2\">\n<button id=\"save-preferences\" class=\"btn btn-primary\">[[search:save-preferences]]</button>\n<button id=\"clear-preferences\" class=\"btn btn-ghost border\">[[search:clear-preferences]]</button>\n</li>\n</ul>\n</div>\n</div>\n</div>\n<div id=\"results\" class=\"search-results col-md-12\" data-search-query=\"" + 
      __escape(guard((context != null) ? context['search_query'] : null)) + 
      "\">\n" + 
      (guard((context != null) ? context['matchCount'] : null) ?
        "\n<div class=\"alert alert-info\">[[search:results-matching, " + 
          __escape(guard((context != null) ? context['matchCount'] : null)) + 
          ", " + 
          __escape(guard((context != null) ? context['search_query'] : null)) + 
          ", " + 
          __escape(guard((context != null) ? context['time'] : null)) + 
          "]] </div>\n" :
        "\n" + 
          (guard((context != null) ? context['search_query'] : null) ?
            "\n<div class=\"alert alert-warning\">[[search:no-matches]]</div>\n" :
            "") + 
          "\n") + 
      "\n" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\n" + 
      (guard((context != null && context['users'] != null) ? context['users']['length'] : null) ?
        "\n<ul id=\"users-container\" class=\"users-container list-unstyled d-flex flex-wrap gap-2\">\n" + 
          compiled.blocks['users'](helpers, context, guard, iter, helper) + 
          "\n" + 
          (guard((context != null) ? context['anonymousUserCount'] : null) ?
            "\n<li class=\"users-box anon-user text-center pb-3\" style=\"width: 102px;\">\n<span class=\"avatar avatar-rounded text-bg-secondary\" component=\"avatar/icon\" style=\"--avatar-size: 64px;\">G</span>\n<br/>\n<div class=\"user-info\">\n<span id=\"online_anon_count\">" + 
              __escape(guard((context != null) ? context['anonymousUserCount'] : null)) + 
              "</span>\n<span>[[global:guests]]</span>\n</div>\n</li>\n" :
            "") + 
          "\n</ul>\n" :
        "") + 
      "\n" + 
      (guard((context != null && context['tags'] != null) ? context['tags']['length'] : null) ?
        "\n" + 
          compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
          "\n" :
        "") + 
      "\n" + 
      (guard((context != null && context['categories'] != null) ? context['categories']['length'] : null) ?
        "\n<ul class=\"categories\">\n" + 
          compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
          "\n</ul>\n" :
        "") + 
      "\n<nav component=\"pagination\" class=\"pagination-container" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
        "" :
        " hidden") + 
      "\" aria-label=\"[[global:pagination]]\">\n<ul class=\"pagination hidden-xs justify-content-center\">\n<li class=\"page-item previous float-start" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n<a class=\"page-link\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
      "\" aria-label=\"[[global:pagination.previouspage]]\"><i class=\"fa fa-chevron-left\"></i> </a>\n</li>\n" + 
      compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + 
      "\n<li class=\"page-item next float-end" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n<a class=\"page-link\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
      "\" aria-label=\"[[global:pagination.nextpage]]\"><i class=\"fa fa-chevron-right\"></i></a>\n</li>\n</ul>\n<ul class=\"pagination hidden-sm hidden-md hidden-lg justify-content-center\">\n<li class=\"page-item first" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n<a class=\"page-link\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['first'] != null) ? context['pagination']['first']['qs'] : null)) + 
      "\" data-page=\"1\" aria-label=\"[[global:pagination.firstpage]]\"><i class=\"fa fa-fast-backward\"></i> </a>\n</li>\n<li class=\"page-item previous" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n<a class=\"page-link\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
      "\" aria-label=\"[[global:pagination.previouspage]]\"><i class=\"fa fa-chevron-left\"></i> </a>\n</li>\n<li component=\"pagination/select-page\" class=\"page-item page select-page\">\n<a class=\"page-link\" href=\"#\" aria-label=\"[[global:pagination.go-to-page]]\">" + 
      __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['currentPage'] : null)) + 
      " / " + 
      __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
      "</a>\n</li>\n<li class=\"page-item next" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n<a class=\"page-link\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
      "\" aria-label=\"[[global:pagination.nextpage]]\"><i class=\"fa fa-chevron-right\"></i></a>\n</li>\n<li class=\"page-item last" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n<a class=\"page-link\" href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['last'] != null) ? context['pagination']['last']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
      "\" aria-label=\"[[global:pagination.lastpage]]\"><i class=\"fa fa-fast-forward\"></i> </a>\n</li>\n</ul>\n</nav>\n</div>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    'breadcrumbs': function breadcrumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['breadcrumbs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li" + 
          (index === length - 1 ?
            " component=\"breadcrumb/current\"" :
            "") + 
          " itemscope=\"itemscope\" itemprop=\"itemListElement\" itemtype=\"http://schema.org/ListItem\" class=\"breadcrumb-item " + 
          (index === length - 1 ?
            "active" :
            "") + 
          "\">\n<meta itemprop=\"position\" content=\"" + 
          __escape(index) + 
          "\" />\n" + 
          (guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null) ?
            "<a href=\"" + 
              __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null)) + 
              "\" itemprop=\"item\">" :
            "") + 
          "\n<span itemprop=\"name\">\n" + 
          __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['text'] : null)) + 
          "\n" + 
          (index === length - 1 ?
            "\n" + 
              (guard((context != null) ? context['feeds:disableRSS'] : null) ?
                "" :
                "\n" + 
                  (guard((context != null) ? context['rssFeedUrl'] : null) ?
                    "<a target=\"_blank\" href=\"" + 
                      __escape(guard((context != null) ? context['rssFeedUrl'] : null)) + 
                      "\" itemprop=\"item\"><i class=\"fa fa-rss-square\"></i></a>" :
                    "")) + 
              "\n" :
            "") + 
          "\n</span>\n" + 
          (guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null) ?
            "</a>" :
            "") + 
          "\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'tagFilterSelected': function tagFilterSelected(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tagFilterSelected'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"d-flex px-2 py-1 rounded-1 text-bg-primary gap-2 align-items-center text-sm\">\n<div>" + 
          __escape(guard((context != null && context['tagFilterSelected'] != null && context['tagFilterSelected'][key0] != null) ? context['tagFilterSelected'][key0]['valueEscaped'] : null)) + 
          "</div>\n<button component=\"tag/filter/delete\" data-tag=\"" + 
          __escape(guard((context != null && context['tagFilterSelected'] != null && context['tagFilterSelected'][key0] != null) ? context['tagFilterSelected'][key0]['valueEscaped'] : null)) + 
          "\" class=\"btn btn-primary btn-sm py-0\"><i class=\"fa fa-times fa-xs\"></i></button>\n</div>\n";
      }, function alt() {
        return "";
      });
    },
    'tagFilterResults': function tagFilterResults(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tagFilterResults'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<button class=\"btn btn-light btn-sm border\" data-tag=\"" + 
          __escape(guard((context != null && context['tagFilterResults'] != null && context['tagFilterResults'][key0] != null) ? context['tagFilterResults'][key0]['valueEscaped'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['tagFilterResults'] != null && context['tagFilterResults'][key0] != null) ? context['tagFilterResults'][key0]['valueEscaped'] : null)) + 
          "</button>\n";
      }, function alt() {
        return "";
      });
    },
    'userFilterSelected': function userFilterSelected(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['userFilterSelected'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"d-flex px-2 py-1 rounded-1 text-bg-primary gap-2 align-items-center text-sm\">\n" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "16px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['userFilterSelected'] != null && context['userFilterSelected'][key0] != null) ? context['userFilterSelected'][key0]['username'] : null)) + 
          "\n<button component=\"user/filter/delete\" data-uid=\"" + 
          __escape(guard((context != null && context['userFilterSelected'] != null && context['userFilterSelected'][key0] != null) ? context['userFilterSelected'][key0]['uid'] : null)) + 
          "\" class=\"btn btn-primary btn-sm py-0\"><i class=\"fa fa-times fa-xs\"></i></button>\n</div>\n";
      }, function alt() {
        return "";
      });
    },
    'userFilterResults': function userFilterResults(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['userFilterResults'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<button class=\"btn btn-light btn-sm border\" data-uid=\"" + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['uid'] : null)) + 
          "\" data-username=\"" + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['username'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard(value), "16px", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['userFilterResults'] != null && context['userFilterResults'][key0] != null) ? context['userFilterResults'][key0]['username'] : null)) + 
          "</button>\n";
      }, function alt() {
        return "";
      });
    },
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"topic-row card clearfix mb-3\">\n<div class=\"card-body\">\n<div>\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n<span class=\"search-result-text search-result-title\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['title'] : null)) + 
          "</a></span>\n</div>\n" + 
          (guard((context != null) ? context['showAsPosts'] : null) ?
            "\n<div class=\"search-result-text\">\n" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
              "\n<p class=\"fade-out\"></p>\n</div>\n" :
            "") + 
          "\n<small class=\"post-info float-end\">\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/category/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['slug'] : null)) + 
          "\">\n<div class=\"category-item d-inline-block\">\n" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['category'] : null), "24px", "rounded-circle"])) + 
          "\n" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['name'] : null)) + 
          "\n</div>\n</a> &bull;\n<span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\"></span>\n</small>\n</div>\n</div>\n";
      }, function alt() {
        return "";
      });
    },
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li class=\"users-box registered-user text-center pb-3\" data-uid=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\" style=\"width: 102px;\">\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['users'] != null) ? context['users'][key0] : null), "64px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n<div class=\"user-info\">\n<div class=\"text-nowrap text-truncate\">\n<span>\n<i component=\"user/status\" class=\"fa fa-circle status " + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['status'] : null)) + 
          "\" title=\"[[global:" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['status'] : null)) + 
          "]]\"></i>\n<a  href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "</a>\n</span>\n</div>\n" + 
          (guard((context != null) ? context['section_online'] : null) ?
            "\n<div class=\"lastonline\">\n<span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['lastonlineISO'] : null)) + 
              "\"></span>\n</div>\n" :
            "") + 
          "\n" + 
          (guard((context != null) ? context['section_joindate'] : null) ?
            "\n<div class=\"joindate\">\n<span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['joindateISO'] : null)) + 
              "\"></span>\n</div>\n" :
            "") + 
          "\n" + 
          (guard((context != null) ? context['section_sort-reputation'] : null) ?
            "\n<div class=\"reputation\">\n<i class=\"fa fa-star\"></i>\n<span>" + 
              __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['reputation'] : null)])) + 
              "</span>\n</div>\n" :
            "") + 
          "\n" + 
          (guard((context != null) ? context['section_sort-posts'] : null) ?
            "\n<div class=\"post-count\">\n<i class=\"fa fa-pencil\"></i>\n<span>" + 
              __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['postcount'] : null)])) + 
              "</span>\n</div>\n" :
            "") + 
          "\n" + 
          (guard((context != null) ? context['section_flagged'] : null) ?
            "\n<div class=\"flag-count\">\n<i class=\"fa fa-flag\"></i>\n<span><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/flags?targetUid=" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['flags'] : null)) + 
              "</a></span>\n</div>\n" :
            "") + 
          "\n</div>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<h5 class=\"float-start tag-container me-4 mb-4 fw-bold\">\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/tags/" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEncoded'] : null)) + 
          "\" data-tag=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "\"><span class=\"tag-item text-muted text-uppercase text-nowrap tag-class-" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['class'] : null)) + 
          " me-2\" data-tag=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "</span><span class=\"tag-topic-count text-primary text-nowrap\" title=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['score'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'formattedNumber', [guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['score'] : null)])) + 
          "</span></a>\n</h5>\n";
      }, function alt() {
        return "";
      });
    },
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categories'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li component=\"categories/category\" data-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" data-numRecentReplies=\"1\" class=\"row clearfix category-" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          " " + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['unread-class'] : null)) + 
          "\">\n<meta itemprop=\"name\" content=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
          "\">\n<div class=\"content col-12 " + 
          (guard((context != null && context['config'] != null) ? context['config']['hideCategoryLastPost'] : null) ?
            "col-md-10 col-sm-12" :
            "col-md-7 col-sm-9") + 
          "\">\n<div class=\"float-start\">\n" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "48px", "rounded-circle"])) + 
          "\n</div>\n<h2 class=\"title\">\n" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['isSection'] : null) ?
            "\n" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
              "\n" :
            "\n" + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null) ?
                "\n<a href=\"" + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null)) + 
                  "\" itemprop=\"url\">\n" :
                "\n<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/category/" + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['slug'] : null)) + 
                  "\" itemprop=\"url\">\n") + 
              "\n" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
              "\n</a>\n") + 
          "\n</h2>\n<div>\n" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['descriptionParsed'] : null) ?
            "\n<div class=\"description text-muted\">\n" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['descriptionParsed'] : null)) + 
              "\n</div>\n" :
            "") + 
          "\n" + 
          (guard((context != null && context['config'] != null) ? context['config']['hideSubCategories'] : null) ?
            "" :
            "\n" + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['children'] != null) ? context['categories'][key0]['children']['length'] : null) ?
                "\n<div class=\"category-children\">\n" + 
                  iter(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['children'] : null), function each(key1, index, length, value) {
                    var key = key1;
                    return "\n" + 
                      (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['children'] != null && context['categories'][key0]['children'][key1] != null) ? context['categories'][key0]['children'][key1]['isSection'] : null) ?
                        "" :
                        "\n<span class=\"category-children-item\">\n" + 
                          __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "24px", "rounded-circle"])) + 
                          "\n" + 
                          (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['children'] != null && context['categories'][key0]['children'][key1] != null) ? context['categories'][key0]['children'][key1]['link'] : null) ?
                            "\n<a href=\"" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['children'] != null && context['categories'][key0]['children'][key1] != null) ? context['categories'][key0]['children'][key1]['link'] : null)) + 
                              "\">" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['children'] != null && context['categories'][key0]['children'][key1] != null) ? context['categories'][key0]['children'][key1]['name'] : null)) + 
                              "</a>\n" :
                            "\n<a href=\"" + 
                              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                              "/category/" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['children'] != null && context['categories'][key0]['children'][key1] != null) ? context['categories'][key0]['children'][key1]['slug'] : null)) + 
                              "\">" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['children'] != null && context['categories'][key0]['children'][key1] != null) ? context['categories'][key0]['children'][key1]['name'] : null)) + 
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
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['teaser'] != null) ? context['categories'][key0]['teaser']['timestampISO'] : null) ?
            "\n<a class=\"permalink\" href=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['teaser'] != null) ? context['categories'][key0]['teaser']['url'] : null)) + 
              "\">\n<small class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['teaser'] != null) ? context['categories'][key0]['teaser']['timestampISO'] : null)) + 
              "\"></small>\n</a>\n" :
            "") + 
          "\n</span>\n</div>\n" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null) ?
            "" :
            "\n<div class=\"col-md-1 d-none d-md-block stats text-muted\">\n<span title=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['totalTopicCount'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['totalTopicCount'] : null)])) + 
              "</span><br />\n<small>[[global:topics]]</small>\n</div>\n<div class=\"col-md-1 d-none d-md-block stats text-muted\">\n<span title=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['totalPostCount'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['totalPostCount'] : null)])) + 
              "</span><br />\n<small>[[global:posts]]</small>\n</div>\n" + 
              (guard((context != null && context['config'] != null) ? context['config']['hideCategoryLastPost'] : null) ?
                "" :
                "\n<div class=\"col-md-3 col-sm-3 teaser d-none d-sm-block\" component=\"topic/teaser\">\n<div class=\"lastpost background-link-container\" style=\"border-color: " + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['bgColor'] : null)) + 
                  "\">\n" + 
                  iter(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['posts'] : null), function each(key1, index, length, value) {
                    var key = key1;
                    return "\n" + 
                      (index === 0 ?
                        "\n<div component=\"category/posts\">\n<a class=\"background-link\" href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/topic/" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['topic'] != null) ? context['categories'][key0]['posts'][key1]['topic']['slug'] : null)) + 
                          (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['index'] : null) ?
                            "/" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['index'] : null)) :
                            "") + 
                          "\"></a>\n<p>\n<a href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/user/" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['user'] != null) ? context['categories'][key0]['posts'][key1]['user']['userslug'] : null)) + 
                          "\">" + 
                          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['user'] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
                          "</a>\n<a class=\"permalink text-muted\" href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/topic/" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['topic'] != null) ? context['categories'][key0]['posts'][key1]['topic']['slug'] : null)) + 
                          (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['index'] : null) ?
                            "/" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['index'] : null)) :
                            "") + 
                          "\">\n<small class=\"timeago\" title=\"" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['timestampISO'] : null)) + 
                          "\"></small>\n</a>\n</p>\n<div class=\"post-content\">\n" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['content'] : null)) + 
                          "\n</div>\n</div>\n" :
                        "") + 
                      "\n";
                  }, function alt() {
                    return "";
                  }) + 
                  "\n" + 
                  (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null) ? context['categories'][key0]['posts']['length'] : null) ?
                    "" :
                    "\n<div component=\"category/posts\">\n<div class=\"post-content\">\n[[category:no-new-posts]]\n</div>\n</div>\n") + 
                  "\n</div>\n</div>\n") + 
              "\n") + 
          "\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'pagination.pages': function paginationpages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['separator'] : null) ?
            "\n<li component=\"pagination/select-page\" class=\"page-item page select-page\">\n<a class=\"page-link\" href=\"#\" aria-label=\"[[global:pagination.go-to-page]]\"><i class=\"fa fa-ellipsis-h\"></i></a>\n</li>\n" :
            "\n<li class=\"page-item page" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['active'] : null) ?
                " active" :
                "") + 
              "\" >\n<a class=\"page-link\" href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "\" aria-label=\"[[global:pagination.page-x, " + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "]]\">" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "</a>\n</li>\n") + 
          "\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
