
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
    return "<div component=\"groups/container\" class=\"groups details row\">\n<div component=\"groups/cover\" style=\"background-image: url(" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['cover:url'] : null)) + 
      "); background-position: " + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['cover:position'] : null)) + 
      ";\">\n" + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "\n<div class=\"controls\">\n<span class=\"upload\"><i class=\"fa fa-fw fa-4x fa-upload\"></i></span>\n<span class=\"resize\"><i class=\"fa fa-fw fa-4x fa-arrows\"></i></span>\n<span class=\"remove\"><i class=\"fa fa-fw fa-4x fa-times\"></i></span>\n</div>\n<div class=\"save\">[[groups:cover-save]] <i class=\"fa fa-fw fa-floppy-o\"></i></div>\n<div class=\"indicator\">[[groups:cover-saving]] <i class=\"fa fa-fw fa-refresh fa-spin\"></i></div>\n" :
        "") + 
      "\n</div>\n<div class=\"col-12\">\n" + 
      (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n</div>\n<div class=\"col-lg-4 col-12\">\n<div class=\"card mb-3\">\n<div class=\"card-header\">\n<span class=\"fs-5\">\n<i class=\"fa fa-list-ul\"></i> [[groups:details.title]]\n" + 
      (guard((context != null && context['group'] != null) ? context['group']['private'] : null) ?
        "<span class=\"badge bg-info text-dark\">[[groups:details.private]]</span>" :
        "") + 
      "\n" + 
      (guard((context != null && context['group'] != null) ? context['group']['hidden'] : null) ?
        "<span class=\"badge bg-info text-dark\">[[groups:details.hidden]]</span>&nbsp;" :
        "") + 
      "\n</span>\n</div>\n<div class=\"card-body\">\n<h2>" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['displayName'] : null)) + 
      "</h2>\n<p>" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['descriptionParsed'] : null)) + 
      "</p>\n" + 
      (guard((context != null) ? context['isAdmin'] : null) ?
        "\n<div class=\"float-end\">\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/groups/" + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['nameEncoded'] : null)) + 
          "\" target=\"_blank\" class=\"btn btn-info\"><i class=\"fa fa-gear\"></i> [[user:edit]]</a>\n</div>\n" :
        "") + 
      "\n" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n<div class=\"float-end\">\n" + 
          __escape(helper(context, helpers, 'membershipBtn', [guard((context != null) ? context['group'] : null)])) + 
          "&nbsp;\n</div>\n" :
        "") + 
      "\n</div>\n</div>\n<div class=\"card mb-3\">\n<div class=\"card-header\">\n<span class=\"fs-5\">\n<i class=\"fa fa-users\"></i> [[groups:details.members]]\n</span>\n</div>\n<div class=\"card-body\">\n<div class=\"d-flex mb-3\">\n" + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "\n<div class=\"flex-shrink-0\">\n<button component=\"groups/members/add\" type=\"button\" class=\"btn btn-primary me-3\" title=\"[[groups:details.add-member]]\"><i class=\"fa fa-user-plus\"></i></button>\n</div>\n" :
        "") + 
      "\n<div class=\"flex-grow-1\">\n<div class=\"input-group\">\n<input class=\"form-control\" type=\"text\" component=\"groups/members/search\" placeholder=\"[[global:search]]\"/>\n<span class=\"input-group-text search-button\"><i class=\"fa fa-search\"></i></span>\n</div>\n</div>\n</div>\n<div component=\"groups/members\" data-nextstart=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['membersNextStart'] : null)) + 
      "\" style=\"max-height: 500px; overflow: auto;\">\n<table class=\"table table-striped table-hover\">\n<tbody>\n" + 
      compiled.blocks['group.members'](helpers, context, guard, iter, helper) + 
      "\n</tbody>\n</table>\n</div>\n</div>\n</div>\n" + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "\n<div class=\"card mb-3\">\n<div class=\"card-header\">\n<div class=\"fs-5\">\n<i class=\"fa fa-clock-o\"></i> [[groups:details.pending]]\n" + 
          (guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending']['length'] : null) ?
            "\n<div class=\"btn-group float-end\">\n<button type=\"button\" class=\"btn btn-outline-secondary btn-sm dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n[[global:more]] <span class=\"caret\"></span>\n</button>\n<ul class=\"dropdown-menu\" role=\"menu\">\n<li><a class=\"dropdown-item\" href=\"#\" data-action=\"acceptAll\" role=\"menuitem\">[[groups:pending.accept-all]]</a></li>\n<li><a class=\"dropdown-item\" href=\"#\" data-action=\"rejectAll\" role=\"menuitem\">[[groups:pending.reject-all]]</a></li>\n</ul>\n</div>\n" :
            "") + 
          "\n</div>\n</div>\n<div class=\"card-body\">\n<div component=\"groups/pending/alert\" class=\"alert alert-info " + 
          (guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending']['length'] : null) ?
            "hidden" :
            "") + 
          "\">[[groups:pending.none]]</div>\n<table component=\"groups/pending\" class=\"table table-striped table-hover\">\n<tbody>\n" + 
          compiled.blocks['group.pending'](helpers, context, guard, iter, helper) + 
          "\n</tbody>\n</table>\n</div>\n</div>\n<div class=\"card mb-3\">\n<div class=\"card-header\">\n<span class=\"fs-5\">\n<i class=\"fa fa-gift\"></i> [[groups:details.invited]]\n</span>\n</div>\n<div class=\"card-body\">\n<div class=\"input-group mb-2\">\n<input class=\"form-control\" type=\"text\" component=\"groups/members/invite\" placeholder=\"[[groups:invited.search]]\"/>\n<span class=\"input-group-text search-button\"><i class=\"fa fa-search\"></i></span>\n</div>\n<div class=\"mb-2\">\n<textarea class=\"form-control\" component=\"groups/members/bulk-invite\" placeholder=\"[[groups:bulk-invite-instructions]]\"></textarea>\n</div>\n<div class=\"mb-2 clearfix\">\n<button class=\"btn btn-outline-secondary btn-sm float-end\" component=\"groups/members/bulk-invite-button\">[[groups:bulk-invite]]</button>\n</div>\n<div component=\"groups/invited/alert\" class=\"alert alert-info " + 
          (guard((context != null && context['group'] != null && context['group']['invited'] != null) ? context['group']['invited']['length'] : null) ?
            "hidden" :
            "") + 
          "\">[[groups:invited.none]]</div>\n<table component=\"groups/invited\" class=\"table table-striped table-hover\">\n<tbody>\n" + 
          compiled.blocks['group.invited'](helpers, context, guard, iter, helper) + 
          "\n</tbody>\n</table>\n</div>\n</div>\n<div class=\"card mb-3\">\n<div class=\"card-header pointer\" data-bs-toggle=\"collapse\" data-bs-target=\".options\">\n<span class=\"fs-5\">\n<i class=\"fa fa-caret-down float-end\"></i>\n<i class=\"fa fa-cogs\"></i> [[groups:details.owner-options]]\n</span>\n</div>\n<div class=\"card-body options collapse\">\n<form component=\"groups/settings\" role=\"form\">\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"name\">[[groups:details.group-name]]</label>\n<input " + 
          (guard((context != null && context['group'] != null) ? context['group']['system'] : null) ?
            "readonly" :
            "") + 
          " class=\"form-control\" name=\"name\" id=\"name\" type=\"text\" value=\"" + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['displayName'] : null)) + 
          "\" />\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"description\">[[groups:details.description]]</label>\n<textarea class=\"form-control\" name=\"description\" id=\"description\" type=\"text\" maxlength=\"255\">" + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['description'] : null)) + 
          "</textarea>\n</div>\n<hr />\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"memberPostCids\">[[groups:details.member-post-cids]]</label>\n<div class=\"row\">\n<div class=\"col-md-6\">\n<input id=\"memberPostCids\" type=\"text\" class=\"form-control\" value=\"" + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['memberPostCids'] : null)) + 
          "\">\n</div>\n<div class=\"col-md-6 member-post-cids-selector\">\n<div component=\"category-selector\" class=\"btn-group dropdown-left category-dropdown-container bottom-sheet\">\n<button type=\"button\" class=\"btn btn-outline-secondary dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span component=\"category-selector-selected\">\n" + 
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
          "\n</ul>\n</div>\n</div>\n</div>\n</div>\n<hr />\n<div class=\"mb-3 user-title-option\">\n<label class=\"form-label\" for=\"userTitle\">[[groups:details.badge-text]]</label>\n<div class=\"d-flex gap-2\">\n<input component=\"groups/userTitleOption\" class=\"form-control\" name=\"userTitle\" id=\"userTitle\" type=\"text\" maxlength=\"40\" value=\"" + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['userTitleEscaped'] : null)) + 
          "\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
            "" :
            " disabled") + 
          " />\n<button component=\"groups/userTitleOption\" type=\"button\" class=\"btn btn-outline-secondary btn-sm text-nowrap\" data-action=\"icon-select\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
            "" :
            " disabled") + 
          ">[[groups:details.change-icon]]</button>\n</div>\n</div>\n<div class=\"mb-3 user-title-option\">\n<div class=\"d-flex align-items-center gap-3\">\n<label class=\"form-label mb-0\">[[groups:details.badge-preview]]</label>\n<span class=\"badge rounded-1 text-uppercase text-truncate rounded-1 " + 
          (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
            "" :
            " hide") + 
          "\" style=\"max-width:150px; color: " + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['textColor'] : null)) + 
          "; background-color: " + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['labelColor'] : null)) + 
          "\"><i class=\"fa" + 
          (guard((context != null && context['group'] != null) ? context['group']['icon'] : null) ?
            " " + 
              __escape(guard((context != null && context['group'] != null) ? context['group']['icon'] : null)) + 
              (guard((context != null && context['group'] != null) ? context['group']['userTitle'] : null) ?
                " me-1" :
                "") :
            "") + 
          "\"></i><span class=\"badge-text\">" + 
          (guard((context != null && context['group'] != null) ? context['group']['userTitle'] : null) ?
            __escape(guard((context != null && context['group'] != null) ? context['group']['userTitle'] : null)) :
            "") + 
          "</span></span>\n</div>\n<hr/>\n<div class=\"d-flex flex-column gap-2\">\n<div class=\"d-flex align-items-center gap-2\">\n<label class=\"form-label mb-0\" for=\"labelColor\" class=\"badge-color-label\">[[groups:details.change-label-colour]]</label>\n<input component=\"groups/userTitleOption\" type=\"color\" name=\"labelColor\" id=\"labelColor\"  value=\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['labelColor'] : null) ?
            __escape(guard((context != null && context['group'] != null) ? context['group']['labelColor'] : null)) :
            "") + 
          "\" />\n</div>\n<div class=\"d-flex align-items-center gap-2\">\n<label class=\"form-label mb-0\" for=\"textColor\" class=\"badge-color-label\">[[groups:details.change-text-colour]]</label>\n<input component=\"groups/userTitleOption\" type=\"color\" name=\"textColor\" id=\"textColor\" value=\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['textColor'] : null) ?
            __escape(guard((context != null && context['group'] != null) ? context['group']['textColor'] : null)) :
            "") + 
          "\" />\n</div>\n<input type=\"hidden\" name=\"icon\" value=\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['icon'] : null) ?
            __escape(guard((context != null && context['group'] != null) ? context['group']['icon'] : null)) :
            "") + 
          "\" />\n</div>\n<div id=\"icons\" class=\"hidden\">\n<div class=\"icon-container\">\n<div class=\"row nbb-fa-icons\">\n<div class=\"icon-container\">\n<div class=\"form-group\">\n<label class=\"form-label\" for=\"fa-filter\">Type to search for icons</label>\n<input type=\"text\" class=\"form-control\" id=\"fa-filter\" data-action=\"filter\" placeholder=\"e.g. umbrella\" />\n</div>\n<div class=\"d-flex nbb-fa-icons flex-wrap\">\n" + 
          compiled.blocks['icons'](helpers, context, guard, iter, helper) + 
          "\n</div>\n<p class=\"form-text text-center\">\nFor a full list of icons, please consult:\n<a href=\"https://fontawesome.com/v6/icons/\">FontAwesome</a>\n</p>\n</div>\n</div>\n</div>\n</div>\n</div>\n<hr />\n<div class=\"form-check\">\n<label class=\"form-check-label\" for=\"userTitleEnabled\">[[groups:details.userTitleEnabled]]</label>\n<input class=\"form-check-input\" name=\"userTitleEnabled\" id=\"userTitleEnabled\" type=\"checkbox\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
            " checked" :
            "") + 
          ">\n</div>\n<div class=\"form-check\">\n<label class=\"form-check-label\" for=\"private\">[[groups:details.private]]</label>\n<input class=\"form-check-input\" name=\"private\" id=\"private\" type=\"checkbox\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['private'] : null) ?
            " checked" :
            "") + 
          ">\n" + 
          (guard((context != null) ? context['allowPrivateGroups'] : null) ?
            "" :
            "\n<p class=\"form-text\">\n[[groups:details.private-system-help]]\n</p>\n") + 
          "\n<p class=\"form-text\">\n[[groups:details.private-help]]\n</p>\n</div>\n<div class=\"form-check\">\n<label class=\"form-check-label\" for=\"disableJoinRequests\">[[groups:details.disableJoinRequests]]</label>\n<input class=\"form-check-input\" name=\"disableJoinRequests\" id=\"disableJoinRequests\" type=\"checkbox\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['disableJoinRequests'] : null) ?
            " checked" :
            "") + 
          ">\n</div>\n<div class=\"form-check\">\n<label class=\"form-check-label\" for=\"disableLeave\">[[groups:details.disableLeave]]</label>\n<input class=\"form-check-input\" name=\"disableLeave\" id=\"disableLeave\" type=\"checkbox\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['disableLeave'] : null) ?
            " checked" :
            "") + 
          ">\n</div>\n<div class=\"form-check\">\n<label class=\"form-check-label\" for=\"hidden\">[[groups:details.hidden]]</label>\n<input class=\"form-check-input\" name=\"hidden\" id=\"hidden\" type=\"checkbox\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['hidden'] : null) ?
            " checked" :
            "") + 
          ">\n<p class=\"form-text\">\n[[groups:details.hidden-help]]\n</p>\n</div>\n<button class=\"btn btn-link text-danger float-end\" type=\"button\" data-action=\"delete\">[[groups:details.delete-group]]</button>\n<button class=\"btn btn-primary\" type=\"button\" data-action=\"update\">[[global:save-changes]]</button>\n</form>\n</div>\n</div>\n" :
        "") + 
      "\n<div data-widget-area=\"left\">\n" + 
      compiled.blocks['widgets.left'](helpers, context, guard, iter, helper) + 
      "\n</div>\n</div>\n<div class=\"col-lg-8 col-12\">\n<div class=\"col-lg-11\">\n" + 
      (guard((context != null && context['posts'] != null) ? context['posts']['length'] : null) ?
        "" :
        "\n<div class=\"alert alert-info\">[[groups:details.has-no-posts]]</div>\n") + 
      "\n<ul component=\"posts\" class=\"posts-list list-unstyled\" data-nextstart=\"" + 
      __escape(guard((context != null) ? context['nextStart'] : null)) + 
      "\">\n" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n<div component=\"posts/loading\" class=\"loading-indicator text-center hidden\">\n<i class=\"fa fa-refresh fa-spin\"></i>\n</div>\n</div>\n<div data-widget-area=\"right\">\n" + 
      compiled.blocks['widgets.right'](helpers, context, guard, iter, helper) + 
      "\n</div>\n</div>\n</div>";
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
    'group.members': function groupmembers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['members'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<tr data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['uid'] : null)) + 
          "\" data-isowner=\"" + 
          (guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['isOwner'] : null) ?
            "1" :
            "0") + 
          "\">\n<td class=\"p-2\">\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['group'] != null && context['group']['members'] != null) ? context['group']['members'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n</td>\n<td class=\"member-name w-100 p-2\">\n<a class=\"align-text-top\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['username'] : null)) + 
          "</a>\n<i component=\"groups/owner/icon\" title=\"[[groups:owner]]\" class=\"user-owner-icon fa fa-star align-text-top text-warning " + 
          (guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['isOwner'] : null) ?
            "" :
            "invisible") + 
          "\"></i>\n" + 
          (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
            "\n<div class=\"owner-controls btn-group float-end\">\n<a class=\"btn btn-sm\" href=\"#\" data-ajaxify=\"false\" data-action=\"toggleOwnership\" title=\"[[groups:details.grant]]\">\n<i class=\"fa fa-star\"></i>\n</a>\n<a class=\"btn btn-sm\" href=\"#\" data-ajaxify=\"false\" data-action=\"kick\" title=\"[[groups:details.kick]]\">\n<i class=\"fa fa-ban\"></i>\n</a>\n</div>\n" :
            "") + 
          "\n</td>\n</tr>\n";
      }, function alt() {
        return "";
      });
    },
    'group.pending': function grouppending(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['pending'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<tr data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['uid'] : null)) + 
          "\">\n<td class=\"p-2\">\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n</td>\n<td class=\"member-name p-2\">\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['username'] : null)) + 
          "</a>\n</td>\n<td class=\"p-2\">\n<div class=\"btn-group float-end\">\n<button type=\"button\" class=\"btn btn-outline-secondary btn-sm dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n[[global:more]] <span class=\"caret\"></span>\n</button>\n<ul class=\"dropdown-menu\" role=\"menu\">\n<li><a class=\"dropdown-item\" href=\"#\" data-action=\"accept\" role=\"menuitem\">[[groups:pending.accept]]</a></li>\n<li><a class=\"dropdown-item\" href=\"#\" data-action=\"reject\" role=\"menuitem\">[[groups:pending.reject]]</a></li>\n</ul>\n</div>\n</td>\n</tr>\n";
      }, function alt() {
        return "";
      });
    },
    'group.invited': function groupinvited(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['invited'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<tr data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['uid'] : null)) + 
          "\">\n<td class=\"p-2\">\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['group'] != null && context['group']['invited'] != null) ? context['group']['invited'][key0] : null), "24px", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n</td>\n<td class=\"member-name p-2\">\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['username'] : null)) + 
          "</a>\n</td>\n<td class=\"p-2\">\n<div class=\"btn-group float-end\">\n<button type=\"button\" class=\"btn btn-outline-secondary btn-sm dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n[[global:more]] <span class=\"caret\"></span>\n</button>\n<ul class=\"dropdown-menu\" role=\"menu\">\n<li><a class=\"dropdown-item\" href=\"#\" data-action=\"rescindInvite\" role=\"menuitem\">[[groups:invited.uninvite]]</a></li>\n</ul>\n</div>\n</td>\n</tr>\n";
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
    'icons': function icons(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['icons'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<i class=\"fa fa-xl fa-" + 
          __escape(guard((context != null && context['icons'] != null && context['icons'][key0] != null) ? context['icons'][key0]['style'] : null)) + 
          " fa-" + 
          __escape(guard((context != null && context['icons'] != null && context['icons'][key0] != null) ? context['icons'][key0]['id'] : null)) + 
          " rounded-1\"></i>\n";
      }, function alt() {
        return "";
      });
    },
    'widgets.left': function widgetsleft(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['left'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          guard((context != null && context['widgets'] != null && context['widgets']['left'] != null && context['widgets']['left'][key0] != null) ? context['widgets']['left'][key0]['html'] : null) + 
          "\n";
      }, function alt() {
        return "";
      });
    },
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li component=\"post\" class=\"posts-list-item row" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['deleted'] : null) ?
            " deleted" :
            (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['deleted'] : null) ?
                " deleted" :
                "")) + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['scheduled'] : null) ?
            " scheduled" :
            "") + 
          "\" data-pid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['uid'] : null)) + 
          "\">\n<div class=\"col-lg-11 col-sm-10 col-9 post-body\">\n<a class=\"topic-title\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\">\n" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['isMainPost'] : null) ?
            "" :
            "RE: ") + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['title'] : null)) + 
          "\n</a>\n<div component=\"post/content\" class=\"content\">\n" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
          "\n</div>\n<small class=\"topic-category\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/category/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['slug'] : null)) + 
          "\">[[global:posted-in, " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['name'] : null)) + 
          "]]</a></small>\n" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['isMainPost'] : null) ?
            "\n" + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null && context['posts'][key0]['topic']['tags'] != null) ? context['posts'][key0]['topic']['tags']['length'] : null) ?
                "\n<span class=\"tag-list\">\n" + 
                  iter(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['tags'] : null), function each(key1, index, length, value) {
                    var key = key1;
                    return "\n<a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/tags/" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null && context['posts'][key0]['topic']['tags'] != null && context['posts'][key0]['topic']['tags'][key1] != null) ? context['posts'][key0]['topic']['tags'][key1]['valueEncoded'] : null)) + 
                      "\"><span class=\"tag tag-item tag-class-" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null && context['posts'][key0]['topic']['tags'] != null && context['posts'][key0]['topic']['tags'][key1] != null) ? context['posts'][key0]['topic']['tags'][key1]['class'] : null)) + 
                      "\">" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null && context['posts'][key0]['topic']['tags'] != null && context['posts'][key0]['topic']['tags'][key1] != null) ? context['posts'][key0]['topic']['tags'][key1]['valueEscaped'] : null)) + 
                      "</span></a>\n";
                  }, function alt() {
                    return "";
                  }) + 
                  "\n</span>\n" :
                "") + 
              "\n" :
            "") + 
          "\n<div class=\"post-info\">\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "28px", guard((context != null) ? context['true'] : null), "user-img not-responsive"])) + 
          "</a>\n<div class=\"post-author\">\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['displayname'] : null)) + 
          "</a><br />\n<span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\"></span>\n</div>\n</div>\n</div>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'widgets.right': function widgetsright(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['right'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          guard((context != null && context['widgets'] != null && context['widgets']['right'] != null && context['widgets']['right'][key0] != null) ? context['widgets']['right'][key0]['html'] : null) + 
          "\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
