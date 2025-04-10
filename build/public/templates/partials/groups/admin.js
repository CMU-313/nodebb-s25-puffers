
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
    return "<div class=\"card mb-3\">\n<div class=\"card-header\">\n<div class=\"fs-5\">\n<i class=\"fa fa-clock-o\"></i> [[groups:details.pending]]\n" + 
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
      ">\n<p class=\"form-text\">\n[[groups:details.hidden-help]]\n</p>\n</div>\n<button class=\"btn btn-link text-danger float-end\" type=\"button\" data-action=\"delete\">[[groups:details.delete-group]]</button>\n<button class=\"btn btn-primary\" type=\"button\" data-action=\"update\">[[global:save-changes]]</button>\n</form>\n</div>\n</div>";
  }

  compiled.blocks = {
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
    }
  };

  return compiled;
})
