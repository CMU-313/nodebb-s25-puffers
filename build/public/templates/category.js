
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
      "\n<div data-widget-area=\"header\">\n" + 
      compiled.blocks['widgets.header'](helpers, context, guard, iter, helper) + 
      "\n</div>\n<div class=\"row\">\n<div class=\"category " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "col-lg-9 col-sm-12" :
        "col-lg-12") + 
      "\">\n" + 
      (guard((context != null && context['children'] != null) ? context['children']['length'] : null) ?
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
        "") + 
      "\n" + 
      ((guard((context != null && context['topics'] != null) ? context['topics']['length'] : null) || guard((context != null && context['privileges'] != null) ? context['privileges']['topics:create'] : null)) ?
        "\n<div class=\"topic-list-header sticky-top btn-toolbar justify-content-between py-2 mb-2 flex-nowrap\">\n<div class=\"d-flex gap-1 align-items-stretch\">\n" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:create'] : null) ?
            "\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/compose?cid=" + 
              __escape(guard((context != null) ? context['cid'] : null)) + 
              "\" component=\"category/post\" id=\"new_topic\" class=\"btn btn-primary text-nowrap\" data-ajaxify=\"false\" role=\"button\">[[category:new-topic-button]]</a>\n" :
            "\n" + 
              (guard((context != null) ? context['loggedIn'] : null) ?
                "" :
                "\n<a component=\"category/post/guest\" href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/login\" class=\"btn btn-primary\">[[category:guest-login-post]]</a>\n") + 
              "\n") + 
          "\n<a href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "\" class=\"d-inline-block\">\n<div class=\"alert alert-warning h-100 m-0 px-2 py-1 d-flex gap-1 align-items-center hide\" id=\"new-topics-alert\"><i class=\"fa fa-fw fa-rotate-right\"></i>[[recent:load-new-posts]]</div>\n</a>\n</div>\n<div component=\"category/controls\" class=\"d-flex gap-1 align-items-stretch\">\n" + 
          (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
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
            "") + 
          "\n<div class=\"btn-group bottom-sheet\" component=\"thread/sort\">\n<button class=\"btn btn-outline-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-label=\"[[aria:topic-sort-option, " + 
          __escape(guard((context != null) ? context['sortOptionLabel'] : null)) + 
          "]]\">\n<i class=\"fa fa-fw fa-sort\"></i>\n<span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">" + 
          __escape(guard((context != null) ? context['sortOptionLabel'] : null)) + 
          "</span>\n<span class=\"caret\"></span>\n</button>\n<ul class=\"dropdown-menu dropdown-menu-end\" role=\"menu\">\n<li><a class=\"dropdown-item\" href=\"#\" class=\"recently_replied\" data-sort=\"recently_replied\" role=\"menuitem\"><i class=\"fa fa-fw\"></i> [[topic:recently-replied]]</a></li>\n<li><a class=\"dropdown-item\" href=\"#\" class=\"recently_created\" data-sort=\"recently_created\" role=\"menuitem\"><i class=\"fa fa-fw\"></i> [[topic:recently-created]]</a></li>\n<li><a class=\"dropdown-item\" href=\"#\" class=\"most_posts\" data-sort=\"most_posts\" role=\"menuitem\"><i class=\"fa fa-fw\"></i> [[topic:most-posts]]</a></li>\n<li><a class=\"dropdown-item\" href=\"#\" class=\"most_votes\" data-sort=\"most_votes\" role=\"menuitem\"><i class=\"fa fa-fw\"></i> [[topic:most-votes]]</a></li>\n<li><a class=\"dropdown-item\" href=\"#\" class=\"most_views\" data-sort=\"most_views\" role=\"menuitem\"><i class=\"fa fa-fw\"></i> [[topic:most-views]]</a></li>\n</ul>\n</div>\n" + 
          (guard((context != null) ? context['showTopicTools'] : null) ?
            "\n<div class=\"btn-group thread-tools bottom-sheet\">\n<button class=\"btn btn-outline-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[topic:thread-tools.title]]</span>\n<span class=\"visible-xs-inline\"><i class=\"fa fa-fw fa-gear\"></i></span>\n<span class=\"caret\"></span>\n</button>\n<ul class=\"dropdown-menu dropdown-menu-end\" role=\"menu\">\n<li>\n<a component=\"topic/mark-unread-for-all\" href=\"#\" class=\"dropdown-item\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-inbox\"></i> [[topic:thread-tools.markAsUnreadForAll]]\n</a>\n</li>\n<li>\n<a component=\"topic/pin\" href=\"#\" class=\"dropdown-item\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-thumb-tack\"></i> [[topic:thread-tools.pin]]\n</a>\n</li>\n<li>\n<a component=\"topic/unpin\" href=\"#\" class=\"hidden dropdown-item\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-thumb-tack fa-rotate-90\"></i> [[topic:thread-tools.unpin]]\n</a>\n</li>\n<li>\n<a component=\"topic/lock\" href=\"#\" class=\"dropdown-item\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-lock\"></i> [[topic:thread-tools.lock]]\n</a>\n</li>\n<li>\n<a component=\"topic/unlock\" href=\"#\" class=\"hidden dropdown-item\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-unlock\"></i> [[topic:thread-tools.unlock]]\n</a>\n</li>\n<li class=\"dropdown-divider\"></li>\n<li>\n<a component=\"topic/move\" href=\"#\" class=\"dropdown-item\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-arrows\"></i> [[topic:thread-tools.move]]\n</a>\n</li>\n" + 
              (guard((context != null && context['template'] != null) ? context['template']['category'] : null) ?
                "\n<li>\n<a component=\"topic/move-all\" href=\"#\" class=\"dropdown-item\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-arrows\"></i> [[topic:thread-tools.move-all]]\n</a>\n</li>\n" :
                "") + 
              "\n<li>\n<a component=\"topic/merge\" href=\"#\" class=\"dropdown-item\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-code-fork\"></i> [[topic:thread-tools.merge]]\n</a>\n</li>\n<li>\n<a component=\"topic/tag\" href=\"#\" class=\"dropdown-item\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-tag\"></i> [[topic:thread-tools.tag]]\n</a>\n</li>\n<li class=\"dropdown-divider\"></li>\n<li>\n<a component=\"topic/delete\" href=\"#\" class=\"dropdown-item\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-trash-o\"></i> [[topic:thread-tools.delete]]\n</a>\n</li>\n<li>\n<a component=\"topic/restore\" href=\"#\" class=\"hidden dropdown-item\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-history\"></i> [[topic:thread-tools.restore]]\n</a>\n</li>\n<li>\n<a component=\"topic/purge\" href=\"#\" class=\"hidden dropdown-item\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-eraser\"></i> [[topic:thread-tools.purge]]\n</a>\n</li>\n" + 
              compiled.blocks['thread_tools'](helpers, context, guard, iter, helper) + 
              "\n</ul>\n</div>\n" :
            "") + 
          "\n</div>\n</div>\n" :
        "") + 
      "\n" + 
      ((!guard((context != null && context['topics'] != null) ? context['topics']['length'] : null) && guard((context != null && context['privileges'] != null) ? context['privileges']['topics:create'] : null)) ?
        "\n<hr class=\"visible-xs\" />\n<div class=\"alert alert-warning\" id=\"category-no-topics\">\n[[category:no-topics]]\n</div>\n" :
        "") + 
      "\n<ul component=\"category\" class=\"topic-list\" itemscope itemtype=\"http://www.schema.org/ItemList\" data-nextstart=\"" + 
      __escape(guard((context != null) ? context['nextStart'] : null)) + 
      "\" data-set=\"" + 
      __escape(guard((context != null) ? context['set'] : null)) + 
      "\">\n" + 
      compiled.blocks['topics'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n" + 
      (guard((context != null && context['config'] != null) ? context['config']['usePagination'] : null) ?
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
          "\" aria-label=\"[[global:pagination.lastpage]]\"><i class=\"fa fa-fast-forward\"></i> </a>\n</li>\n</ul>\n</nav>\n" :
        "") + 
      "\n</div>\n<div data-widget-area=\"sidebar\" class=\"col-lg-3 col-sm-12 " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "" :
        "hidden") + 
      "\">\n" + 
      compiled.blocks['widgets.sidebar'](helpers, context, guard, iter, helper) + 
      "\n</div>\n</div>\n<div data-widget-area=\"footer\">\n" + 
      compiled.blocks['widgets.footer'](helpers, context, guard, iter, helper) + 
      "\n</div>\n" + 
      (guard((context != null && context['config'] != null) ? context['config']['usePagination'] : null) ?
        "" :
        "\n<noscript>\n<nav component=\"pagination\" class=\"pagination-container" + 
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
          iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
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
          }) + 
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
          "\" aria-label=\"[[global:pagination.lastpage]]\"><i class=\"fa fa-fast-forward\"></i> </a>\n</li>\n</ul>\n</nav>\n</noscript>\n");
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
    'widgets.header': function widgetsheader(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['header'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          guard((context != null && context['widgets'] != null && context['widgets']['header'] != null && context['widgets']['header'][key0] != null) ? context['widgets']['header'][key0]['html'] : null) + 
          "\n";
      }, function alt() {
        return "";
      });
    },
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
    },
    'thread_tools': function thread_tools(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['thread_tools'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li>\n<a href=\"#\" class=\"dropdown-item " + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['class'] : null)) + 
          "\" role=\"menuitem\"><i class=\"fa fa-fw " + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['icon'] : null)) + 
          "\"></i> " + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['title'] : null)) + 
          "</a>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'topics': function topics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['topics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li component=\"category/topic\" class=\"row clearfix category-item " + 
          __escape(helper(context, helpers, 'generateTopicClass', [guard(value)])) + 
          "\" data-tid=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['tid'] : null)) + 
          "\" data-index=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['cid'] : null)) + 
          "\" itemprop=\"itemListElement\" itemscope itemtype=\"https://schema.org/ListItem\">\n<link itemprop=\"url\" content=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
          "\" />\n<meta itemprop=\"name\" content=\"" + 
          __escape(helper(context, helpers, 'stripTags', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)])) + 
          "\" />\n<meta itemprop=\"itemListOrder\" content=\"descending\" />\n<meta itemprop=\"position\" content=\"" + 
          __escape(helper(context, helpers, 'increment', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null), "1"])) + 
          "\" />\n<a id=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
          "\" data-index=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
          "\" component=\"topic/anchor\"></a>\n<div class=\"col-md-6 col-sm-9 col-10 content\">\n<div class=\"avatar float-start me-2\">\n" + 
          (guard((context != null) ? context['showSelect'] : null) ?
            "\n<div class=\"select\" component=\"topic/select\">\n" + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['thumbs'] != null) ? context['topics'][key0]['thumbs']['length'] : null) ?
                "\n<img src=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['thumbs'] != null && context['topics'][key0]['thumbs']['0'] != null) ? context['topics'][key0]['thumbs']['0']['url'] : null)) + 
                  "\" class=\"user-img not-responsive\" />\n" :
                "\n" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['user'] : null), "48px", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
                  "\n") + 
              "\n<i class=\"fa fa-check\"></i>\n</div>\n" :
            "") + 
          "\n" + 
          (guard((context != null) ? context['showSelect'] : null) ?
            "" :
            "\n<a href=\"" + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null) ?
                __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null)) :
                "#") + 
              "\" class=\"float-start\">\n" + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['thumbs'] != null) ? context['topics'][key0]['thumbs']['length'] : null) ?
                "\n<img src=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['thumbs'] != null && context['topics'][key0]['thumbs']['0'] != null) ? context['topics'][key0]['thumbs']['0']['url'] : null)) + 
                  "\" class=\"user-img not-responsive\" />\n" :
                "\n" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['user'] : null), "48px", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
                  "\n") + 
              "\n</a>\n") + 
          "\n</div>\n<h2 component=\"topic/header\" class=\"title mb-1\">\n<i component=\"topic/watched\" class=\"fa fa-bell-o " + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['followed'] : null) ?
            "" :
            "hidden") + 
          "\" title=\"[[topic:watching]]\"></i>\n<i component=\"topic/watched\" class=\"fa fa-eye-slash " + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['ignored'] : null) ?
            "" :
            "hidden") + 
          "\" title=\"[[topic:ignoring]]\"></i>\n<i component=\"topic/scheduled\" class=\"fa fa-clock-o " + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['scheduled'] : null) ?
            "" :
            "hidden") + 
          "\" title=\"[[topic:scheduled]]\"></i>\n<i component=\"topic/pinned\" class=\"fa fa-thumb-tack " + 
          ((guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['scheduled'] : null) || !guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['pinned'] : null)) ?
            "hidden" :
            "") + 
          "\" title=\"" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['pinExpiry'] : null) ?
            "[[topic:pinned-with-expiry, " + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['pinExpiryISO'] : null)) + 
              "]]" :
            "[[topic:pinned]]") + 
          "\"></i>\n<i component=\"topic/locked\" class=\"fa fa-lock " + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['locked'] : null) ?
            "" :
            "hidden") + 
          "\" title=\"[[topic:locked]]\"></i>\n<i component=\"topic/moved\" class=\"fa fa-arrow-circle-right " + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['oldCid'] : null) ?
            "" :
            "hidden") + 
          "\" title=\"[[topic:moved]]\"></i>\n" + 
          iter(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['icons'] : null), function each(key1, index, length, value) {
            var key = key1;
            return __escape(guard(value));
          }, function alt() {
            return "";
          }) + 
          "\n" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['noAnchor'] : null) ?
            "\n<span>" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
              "</span>\n" :
            "\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['bookmark'] : null) ?
                "/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['bookmark'] : null)) :
                "") + 
              "\">" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
              "</a>\n") + 
          "\n</h2>\n<div class=\"info\">\n" + 
          (guard((context != null && context['template'] != null) ? context['template']['category'] : null) ?
            "" :
            "\n<div class=\"category-item d-inline-block\">\n" + 
              __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['category'] : null), "24px", "rounded-circle"])) + 
              "\n<a class=\"text-muted\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/category/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['slug'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['name'] : null)) + 
              "</a>\n</div>\n&bull;\n") + 
          "\n<span data-tid=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['tid'] : null)) + 
          "\" component=\"topic/tags\" class=\"tag-list hidden-xs " + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null) ? context['topics'][key0]['tags']['length'] : null) ?
            "" :
            "hidden") + 
          "\">\n" + 
          iter(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['tags'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/tags/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null && context['topics'][key0]['tags'][key1] != null) ? context['topics'][key0]['tags'][key1]['valueEncoded'] : null)) + 
              "\"><span class=\"tag tag-item fw-bold tag-class-" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null && context['topics'][key0]['tags'][key1] != null) ? context['topics'][key0]['tags'][key1]['class'] : null)) + 
              "\" data-tag=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null && context['topics'][key0]['tags'][key1] != null) ? context['topics'][key0]['tags'][key1]['value'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null && context['topics'][key0]['tags'][key1] != null) ? context['topics'][key0]['tags'][key1]['valueEscaped'] : null)) + 
              "</span></a>\n";
          }, function alt() {
            return "";
          }) + 
          "\n&bull;\n</span>\n<span class=\"hidden-xs\"><span class=\"timeago text-muted\" title=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['timestampISO'] : null)) + 
          "\"></span> &bull; <a class=\"text-muted\" href=\"" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\">" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['displayname'] : null)) + 
          "</a></span>\n<span class=\"visible-xs-inline timeago text-muted\" title=\"" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['timestampISO'] : null) ?
            __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['timestampISO'] : null)) :
            __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['timestampISO'] : null))) + 
          "\"></span>\n</div>\n</div>\n<div class=\"mobile-stat col-2 visible-xs text-end\">\n<span>" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['postcount'] : null)])) + 
          "</span> <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
          "/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['index'] : null)) + 
          "\"><i class=\"fa fa-arrow-circle-right\"></i></a>\n</div>\n<div class=\"col-md-1 hidden-sm hidden-xs stats stats-votes\">\n" + 
          (guard((context != null) ? context['reputation:disabled'] : null) ?
            "" :
            "\n<span title=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['votes'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['votes'] : null)])) + 
              "</span><br />\n<small>[[global:votes]]</small>\n") + 
          "\n</div>\n<div class=\"col-md-1 hidden-sm hidden-xs stats stats-postcount\">\n<span title=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['postcount'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['postcount'] : null)])) + 
          "</span><br />\n<small>[[global:posts]]</small>\n</div>\n<div class=\"col-md-1 hidden-sm hidden-xs stats stats-viewcount\">\n<span title=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['viewcount'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'humanReadableNumber', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['viewcount'] : null)])) + 
          "</span><br />\n<small>[[global:views]]</small>\n</div>\n<div class=\"col-md-3 col-sm-3 teaser hidden-xs\" component=\"topic/teaser\">\n<div class=\"lastpost background-link-container\" style=\"border-color: " + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['bgColor'] : null)) + 
          "\">\n<a class=\"background-link\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
          "/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['index'] : null)) + 
          "\"></a>\n" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['unreplied'] : null) ?
            "\n<p>\n[[category:no-replies]]\n</p>\n" :
            "\n" + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['pid'] : null) ?
                "\n<p>\n<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['userslug'] : null)) + 
                  "\">" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['user'] : null), "24px", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
                  "</a>\n<a class=\"permalink text-muted\" href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/topic/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
                  "/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['index'] : null)) + 
                  "\">\n<span class=\"timeago\" title=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['timestampISO'] : null)) + 
                  "\"></span>\n</a>\n</p>\n<div class=\"post-content\">\n" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['content'] : null)) + 
                  "\n</div>\n" :
                "") + 
              "\n") + 
          "\n</div>\n</div>\n</li>\n";
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
    },
    'widgets.sidebar': function widgetssidebar(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['sidebar'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null && context['widgets']['sidebar'][key0] != null) ? context['widgets']['sidebar'][key0]['html'] : null) + 
          "\n";
      }, function alt() {
        return "";
      });
    },
    'widgets.footer': function widgetsfooter(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['footer'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          guard((context != null && context['widgets'] != null && context['widgets']['footer'] != null && context['widgets']['footer'][key0] != null) ? context['widgets']['footer'][key0]['html'] : null) + 
          "\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
