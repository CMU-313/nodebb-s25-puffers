
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
    return "<div class=\"notifications\">\n" + 
      (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n<div class=\"btn-toolbar justify-content-end\" role=\"toolbar\">\n<div class=\"btn-group me-2\">\n<button class=\"btn btn-outline-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" + 
      (guard((context != null) ? context['selectedFilter'] : null) ?
        __escape(guard((context != null && context['selectedFilter'] != null) ? context['selectedFilter']['name'] : null)) :
        "") + 
      " <span class=\"caret\"></span>\n</button>\n<ul class=\"dropdown-menu dropdown-menu-end\" role=\"menu\">\n" + 
      compiled.blocks['filters'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n<div class=\"btn-group\">\n<button class=\"btn btn-outline-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<i class=\"fa fa-eye\"></i>\n<span class=\"caret\"></span>\n</button>\n<ul class=\"dropdown-menu dropdown-menu-end\" role=\"menu\" aria-labelledby=\"dropdownMenu1\">\n<li role=\"presentation\"><a class=\"dropdown-item\" role=\"menuitem\" href=\"#\" component=\"notifications/mark_all\">[[notifications:mark-all-read]]</a></li>\n</ul>\n</div>\n</div>\n<hr />\n<div class=\"alert alert-info " + 
      (guard((context != null && context['notifications'] != null) ? context['notifications']['length'] : null) ?
        "hidden" :
        "") + 
      "\">\n[[notifications:no-notifs]]\n</div>\n<ul class=\"notifications-list list-unstyled\" data-nextstart=\"" + 
      __escape(guard((context != null) ? context['nextStart'] : null)) + 
      "\">\n" + 
      compiled.blocks['notifications'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n<nav component=\"pagination\" class=\"pagination-container" + 
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
      "\" aria-label=\"[[global:pagination.lastpage]]\"><i class=\"fa fa-fast-forward\"></i> </a>\n</li>\n</ul>\n</nav>\n</div>";
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
    'filters': function filters(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['filters'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          (guard((context != null && context['filters'] != null && context['filters'][key0] != null) ? context['filters'][key0]['separator'] : null) ?
            "\n<li role=\"separator\" class=\"dropdown-divider\"></li>\n" :
            "\n<li role=\"presentation\" class=\"category\">\n<a class=\"dropdown-item\" role=\"menuitem\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/notifications?filter=" + 
              __escape(guard((context != null && context['filters'] != null && context['filters'][key0] != null) ? context['filters'][key0]['filter'] : null)) + 
              "\"><i class=\"fa fa-fw " + 
              (guard((context != null && context['filters'] != null && context['filters'][key0] != null) ? context['filters'][key0]['selected'] : null) ?
                "fa-check" :
                "") + 
              "\"></i> " + 
              __escape(guard((context != null && context['filters'] != null && context['filters'][key0] != null) ? context['filters'][key0]['name'] : null)) + 
              "</a>\n</li>\n") + 
          "\n";
      }, function alt() {
        return "";
      });
    },
    'notifications': function notifications(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['notifications'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li data-nid=\"" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['nid'] : null)) + 
          "\" class=\"" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['readClass'] : null)) + 
          " " + 
          (guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['read'] : null) ?
            "" :
            "text-bg-warning") + 
          " d-flex pointer border p-3 mb-2\" component=\"notifications/item\">\n<div class=\"me-2\">\n" + 
          (guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['from'] : null) ?
            "\n" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['user'] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
              "\n" :
            "\n" + 
              (guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['image'] : null) ?
                "\n<img width=\"24\" height=\"24\" src=\"" + 
                  __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['image'] : null)) + 
                  "\" />\n" :
                "") + 
              "\n") + 
          "\n</div>\n<div>\n<p class=\"mb-1\">\n<a class=\"text-reset\" component=\"notifications/item/link\" href=\"" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['path'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['bodyShort'] : null)) + 
          "</a>\n</p>\n<p class=\"timestamp\">\n<span class=\"timeago small text-reset\" title=\"" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['datetimeISO'] : null)) + 
          "\"></span>\n</p>\n</div>\n</li>\n";
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
