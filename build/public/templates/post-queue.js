
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
        "\n<div class=\"btn-toolbar justify-content-end\">\n<div class=\"me-2\">\n<div component=\"category/dropdown\" class=\"btn-group dropdown-right category-dropdown-container bottom-sheet\">\n</div>\n</div>\n<div class=\"btn-group bottom-sheet\" component=\"post-queue/bulk-actions\">\n<button type=\"button\" class=\"btn btn-outline-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" autocomplete=\"off\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<i class=\"fa fa-clone\"></i> [[post-queue:bulk-actions]] <span class=\"caret\"></span>\n</button>\n<ul class=\"dropdown-menu dropdown-menu-end\" role=\"menu\">\n" + 
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
      "\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
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
    }
  };

  return compiled;
})
