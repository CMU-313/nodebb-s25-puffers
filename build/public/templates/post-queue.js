
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
    return (guard((context != null) ? context['isAdmin'] : null) ?
        "\n" + 
          (guard((context != null) ? context['enabled'] : null) ?
            "" :
            "\n<div class=\"alert alert-info\">\n<p>[[post-queue:enabling-help, " + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/admin/settings/post#post-queue]]</p>\n</div>\n") + 
          "\n" :
        "\n<div>\n<p class=\"lead\">[[post-queue:public-intro]]</p>\n<p>[[post-queue:public-description]]</p>\n<hr />\n</div>\n") + 
      "\n" + 
      ((!guard((context != null) ? context['singlePost'] : null) && guard((context != null && context['posts'] != null) ? context['posts']['length'] : null)) ?
        "\n<div class=\"btn-toolbar justify-content-end\">\n<div class=\"me-2\">\n<div component=\"category/dropdown\" class=\"btn-group dropdown-right category-dropdown-container bottom-sheet\">\n<button type=\"button\" class=\"btn btn-outline-secondary d-flex gap-2 align-items-baseline dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" + 
          (guard((context != null) ? context['selectedCategory'] : null) ?
            "\n<span class=\"category-item\">\n" + 
              __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null) ? context['selectedCategory'] : null), "20px", "rounded-circle"])) + 
              "\n<span class=\"visible-md-inline visible-lg-inline\">" + 
              __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) + 
              "</span>\n</span>\n" :
            "\n<i class=\"fa fa-fw fa-list\"></i>\n<span class=\"visible-md-inline visible-lg-inline\">[[unread:all-categories]]</span>") + 
          "\n</button>\n<div component=\"category-selector-search\" class=\"hidden position-absolute\">\n<input type=\"text\" class=\"form-control\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\n</div>\n<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu\" role=\"menu\">\n<li role=\"presentation\" class=\"category\" data-cid=\"all\">\n<a class=\"dropdown-item\" role=\"menuitem\" href=\"" + 
          (guard((context != null) ? context['allCategoriesUrl'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/" + 
              __escape(guard((context != null) ? context['allCategoriesUrl'] : null)) :
            "#") + 
          "\"><i component=\"category/select/icon\" class=\"fa fa-fw fa-check " + 
          (guard((context != null) ? context['selectedCategory'] : null) ?
            "invisible" :
            "") + 
          "\"></i> [[unread:all-categories]]</a>\n</li>\n" + 
          compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
          "\n</ul>\n</div>\n</div>\n<div class=\"btn-group bottom-sheet\" component=\"post-queue/bulk-actions\">\n<button type=\"button\" class=\"btn btn-outline-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" autocomplete=\"off\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<i class=\"fa fa-clone\"></i> [[post-queue:bulk-actions]] <span class=\"caret\"></span>\n</button>\n<ul class=\"dropdown-menu dropdown-menu-end\" role=\"menu\">\n" + 
          (guard((context != null) ? context['canAccept'] : null) ?
            "\n<li><a class=\"dropdown-item\" href=\"#\" data-action=\"accept-all\" role=\"menuitem\">[[post-queue:accept-all]]</a></li>\n<li><a class=\"dropdown-item\" href=\"#\" data-action=\"accept-selected\" role=\"menuitem\">[[post-queue:accept-selected]]</a></li>\n<li class=\"dropdown-divider\"></li>\n<li><a class=\"dropdown-item\" href=\"#\" data-action=\"reject-all\" role=\"menuitem\">[[post-queue:reject-all]]</a></li>\n<li><a class=\"dropdown-item\" href=\"#\" data-action=\"reject-selected\" role=\"menuitem\">[[post-queue:reject-selected]]</a></li>\n" :
            "\n<li><a class=\"dropdown-item\" href=\"#\" data-action=\"reject-all\">[[post-queue:remove-all]]</a></li>\n<li><a class=\"dropdown-item\" href=\"#\" data-action=\"reject-selected\" role=\"menuitem\">[[post-queue:remove-selected]]</a></li>\n") + 
          "\n</ul>\n</div>\n</div>\n<hr/>\n" :
        "") + 
      "\n<div class=\"row\">\n<div class=\"col-12\">\n<div class=\"post-queue preventSlideout posts-list\">\n" + 
      (guard((context != null && context['posts'] != null) ? context['posts']['length'] : null) ?
        "" :
        "\n" + 
          (guard((context != null) ? context['singlePost'] : null) ?
            "\n<div class=\"alert alert-info d-flex align-items-md-center d-flex flex-column flex-md-row\">\n<p class=\"mb-md-0\">[[post-queue:no-single-post]]</p>\n<div class=\"d-grid ms-md-auto\">\n<a class=\"btn btn-sm btn-primary flex-shrink text-nowrap\" href=\".\">[[post-queue:back-to-list]]</a>\n</div>\n</div>\n" :
            "\n<div class=\"mx-auto\">\n<div class=\"d-flex flex-column gap-3 justify-content-center text-center\">\n<div class=\"mx-auto p-4 bg-light border rounded\">\n<i class=\"text-secondary fa fa-fw fa-4x fa-seedling\"></i>\n</div>\n[[post-queue:no-queued-posts]]\n</div>\n</div>\n") + 
          "\n") + 
      "\n" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\n</div>\n<nav component=\"pagination\" class=\"pagination-container" + 
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
      "\" aria-label=\"[[global:pagination.lastpage]]\"><i class=\"fa fa-fast-forward\"></i> </a>\n</li>\n</ul>\n</nav>\n</div>\n</div>";
  }

  compiled.blocks = {
    'categoryItems': function categoryItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled" :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\">\n<a class=\"dropdown-item\" role=\"menuitem\" href=\"#\">" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "<i component=\"category/select/icon\" class=\"fa fa-fw fa-check " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['selected'] : null) ?
            "" :
            "invisible") + 
          "\"></i>\n<span component=\"category-markup\" style=\"" + 
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
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"card mb-3\" data-id=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['id'] : null)) + 
          "\"data-uid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['uid'] : null)) + 
          "\">\n<div class=\"card-header\">\n" + 
          (guard((context != null) ? context['singlePost'] : null) ?
            "" :
            "\n<input type=\"checkbox\" class=\"form-check-input\" autocomplete=\"off\" />\n") + 
          "\n<strong>" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['tid'] : null) ?
            "[[post-queue:reply]]" :
            "[[post-queue:topic]]") + 
          "</strong>\n<span class=\"timeago float-end\" title=" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['timestampISO'] : null)) + 
          "></span>\n</div>\n<div class=\"card-body\">\n<div class=\"row\">\n<div class=\"col-lg-2 col-12\">\n<strong>[[post-queue:user]]</strong>\n<div>\n" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null) ?
            "\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/uid/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['uid'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "24px", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
              " " + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['username'] : null)) + 
              "</a>\n" :
            "\n" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['username'] : null)) + 
              "\n") + 
          "\n</div>\n</div>\n<div class=\"col-lg-3 col-12\">\n<strong>[[post-queue:category]]" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['cid'] : null) ?
            " <i class=\"fa fa-fw fa-edit\" data-bs-toggle=\"tooltip\" title=\"[[post-queue:category-editable]]\"></i>" :
            "") + 
          "</strong>\n<div class=\"topic-category\" " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['cid'] : null) ?
            "data-editable=\"editable\"" :
            "") + 
          "\">\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/category/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['slug'] : null)) + 
          "\">\n<div class=\"category-item d-inline-block\">\n" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['category'] : null), "24px", "rounded-circle"])) + 
          "\n" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['name'] : null)) + 
          "\n</div>\n</a>\n</div>\n</div>\n<div class=\"col-lg-7 col-12\">\n<strong>" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['tid'] : null) ?
            "[[post-queue:topic]]" :
            "[[post-queue:title]] <i class=\"fa fa-fw fa-edit\" data-bs-toggle=\"tooltip\" title=\"[[post-queue:title-editable]]\"></i>") + 
          "</strong>\n<div class=\"topic-title text-break\">\n" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['tid'] : null) ?
            "\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['tid'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['title'] : null)) + 
              "</a>\n" :
            "") + 
          "\n<span data-action=\"editTitle\" class=\"title-text\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['title'] : null)) + 
          "</span>\n</div>\n" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['tid'] : null) ?
            "" :
            "\n<div class=\"topic-title-editable hidden\">\n<input class=\"form-control\" type=\"text\" value=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['title'] : null)) + 
              "\"/>\n</div>\n") + 
          "\n</div>\n</div>\n<hr/>\n<div>\n<strong>[[post-queue:content]] <i class=\"fa fa-fw fa-edit\" data-bs-toggle=\"tooltip\" title=\"[[post-queue:content-editable]]\"></i></strong>\n<div data-action=\"editContent\" class=\"post-content text-break\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['content'] : null)) + 
          "</div>\n<div class=\"post-content-editable hidden\">\n<textarea class=\"form-control w-100\" style=\"height:300px;\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['data'] != null) ? context['posts'][key0]['data']['rawContent'] : null)) + 
          "</textarea>\n</div>\n</div>\n</div>\n<div class=\"card-footer text-end\">\n<div>\n" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['canAccept'] : null) ?
            "\n<button class=\"btn btn-danger btn-sm\" data-action=\"reject\"><i class=\"fa fa-fw fa-times\"></i> [[post-queue:reject]]</button>\n<button class=\"btn btn-info btn-sm\" data-action=\"notify\"><i class=\"fa fa-fw fa-bell-o\"></i> [[post-queue:notify]]</button>\n<button class=\"btn btn-success btn-sm\" data-action=\"accept\"><i class=\"fa fa-fw fa-check\"></i> [[post-queue:accept]] </button>\n" :
            "\n<button class=\"btn btn-danger btn-sm\" data-action=\"reject\"><i class=\"fa fa-fw fa-times\"></i> [[post-queue:remove]]</button>\n") + 
          "\n</div>\n</div>\n</div>\n";
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
