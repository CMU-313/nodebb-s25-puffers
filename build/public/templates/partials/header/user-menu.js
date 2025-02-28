
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
    return "<li id=\"user_label\" class=\"nav-item dropdown\" title=\"[[global:header.profile]]\">\n<a href=\"#\" for=\"user-control-list-check\" data-bs-toggle=\"dropdown\" id=\"user_dropdown\" role=\"button\" component=\"header/avatar\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['user'] : null), "32px", guard((context != null) ? context['true'] : null)])) + 
      "\n<span id=\"user-header-name\" class=\"d-block d-sm-none\">" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['username'] : null)) + 
      "</span>\n</a>\n<input type=\"checkbox\" class=\"hidden\" id=\"user-control-list-check\" aria-hidden=\"true\">\n<ul id=\"user-control-list\" component=\"header/usercontrol\" class=\"dropdown-menu dropdown-menu-end\" aria-labelledby=\"user_dropdown\" role=\"menu\">\n<li>\n<a class=\"dropdown-item\" component=\"header/profilelink\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
      "\" role=\"menuitem\">\n<i component=\"user/status\" class=\"fa fa-fw fa-circle status " + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['status'] : null)) + 
      "\"></i> <span component=\"header/username\">" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['username'] : null)) + 
      "</span>\n</a>\n</li>\n<li role=\"presentation\" class=\"dropdown-divider\"></li>\n<li><h6 class=\"dropdown-header\">[[global:status]]</h6></li>\n<li>\n<a href=\"#\" class=\"dropdown-item user-status " + 
      (guard((context != null && context['user'] != null) ? context['user']['online'] : null) ?
        "selected" :
        "") + 
      "\" data-status=\"online\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-circle status online\"></i><span> [[global:online]]</span>\n</a>\n</li>\n<li>\n<a href=\"#\" class=\"dropdown-item user-status " + 
      (guard((context != null && context['user'] != null) ? context['user']['away'] : null) ?
        "selected" :
        "") + 
      "\" data-status=\"away\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-circle status away\"></i><span> [[global:away]]</span>\n</a>\n</li>\n<li>\n<a href=\"#\" class=\"dropdown-item user-status " + 
      (guard((context != null && context['user'] != null) ? context['user']['dnd'] : null) ?
        "selected" :
        "") + 
      "\" data-status=\"dnd\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-circle status dnd\"></i><span> [[global:dnd]]</span>\n</a>\n</li>\n<li>\n<a href=\"#\" class=\"dropdown-item user-status " + 
      (guard((context != null && context['user'] != null) ? context['user']['offline'] : null) ?
        "selected" :
        "") + 
      "\" data-status=\"offline\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-circle status offline\"></i><span> [[global:invisible]]</span>\n</a>\n</li>\n<li role=\"presentation\" class=\"dropdown-divider\"></li>\n<li>\n<a class=\"dropdown-item\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
      "/bookmarks\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-bookmark\"></i> <span>[[user:bookmarks]]</span>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item\" component=\"header/profilelink/edit\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
      "/edit\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-edit\"></i> <span>[[user:edit-profile]]</span>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item\" component=\"header/profilelink/settings\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
      "/settings\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-gear\"></i> <span>[[user:settings]]</span>\n</a>\n</li>\n" + 
      (guard((context != null) ? context['showModMenu'] : null) ?
        "\n<li role=\"presentation\" class=\"dropdown-divider\"></li>\n<li><h6 class=\"dropdown-header\">[[pages:moderator-tools]]</h6></li>\n<li>\n<a class=\"dropdown-item\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/flags\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-flag\"></i> <span>[[pages:flagged-content]]</span>\n</a>\n</li>\n<li>\n<a class=\"dropdown-item\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/post-queue\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-list-alt\"></i> <span>[[pages:post-queue]]</span>\n</a>\n</li>\n" + 
          (guard((context != null) ? context['registrationQueueEnabled'] : null) ?
            "\n<li>\n<a class=\"dropdown-item\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/registration-queue\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-list-alt\"></i> <span>[[pages:registration-queue]]</span>\n</a>\n</li>\n" :
            "") + 
          "\n<li>\n<a class=\"dropdown-item\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/ip-blacklist\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-ban\"></i> <span>[[pages:ip-blacklist]]</span>\n</a>\n</li>\n" :
        "\n" + 
          (guard((context != null) ? context['postQueueEnabled'] : null) ?
            "\n<li>\n<a class=\"dropdown-item\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/post-queue\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-list-alt\"></i> <span>[[pages:post-queue]]</span>\n</a>\n</li>\n" :
            "") + 
          "\n") + 
      "\n<li role=\"presentation\" class=\"dropdown-divider\"></li>\n<li component=\"user/logout\">\n<form method=\"post\" action=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/logout\">\n<input type=\"hidden\" name=\"_csrf\" value=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
      "\">\n<input type=\"hidden\" name=\"noscript\" value=\"true\">\n<button type=\"submit\" class=\"dropdown-item\" role=\"menuitem\">\n<i class=\"fa fa-fw fa-sign-out\"></i><span> [[global:logout]]</span>\n</button>\n</form>\n</li>\n</ul>\n</li>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
