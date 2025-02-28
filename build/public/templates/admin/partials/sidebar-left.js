
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
    return "<div id=\"sidebar-left\" style=\"width:240px;\" class=\"vh-100 sticky-top start-0 d-none d-lg-flex text-bg-light p-2 flex-column justify-content-start text-sm border-end gap-1 flex-shrink-0\">\n<div class=\"d-flex flex-column gap-1 ff-secondary\">\n<div class=\"alert " + 
      (guard((context != null) ? context['upgradeAvailable'] : null) ?
        "alert-warning" :
        "hidden") + 
      " mb-0 py-1 pe-2 alert-dismissible\">\n<div>[[admin/menu:alerts.version, " + 
      __escape(guard((context != null) ? context['version'] : null)) + 
      "]]</div>\n<a href=\"https://docs.nodebb.org/configuring/upgrade/\" target=\"_blank\">\n[[admin/menu:alerts.upgrade, " + 
      __escape(guard((context != null) ? context['latestVersion'] : null)) + 
      "]]\n</a>\n<button type=\"button\" class=\"btn-close p-2\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button>\n</div>\n<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/\" class=\"btn-ghost fw-semibold text-decoration-none justify-content-start\"><i class=\"fa fa-fw fa-home\"></i> [[admin/menu:view-forum]]</a>\n" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:settings'] : null) ?
        "\n<div component=\"acp/search\" class=\"my-1 acp-search\">\n<div class=\"dropdown\">\n<input type=\"text\" data-bs-toggle=\"dropdown\" class=\"form-control\" placeholder=\"[[admin/menu:search.placeholder]]\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<ul class=\"dropdown-menu state-start-typing p-1\" role=\"menu\">\n<li role=\"presentation\" class=\"no-results\">\n<a class=\"dropdown-item rounded-1\" role=\"menuitem\">[[admin/menu:search.no-results]]</a>\n</li>\n<li role=\"presentation\" class=\"dropdown-divider search-forum\"></li>\n<li role=\"presentation\" class=\"search-forum\">\n<a class=\"dropdown-item rounded-1\" role=\"menuitem\" target=\"_top\" href=\"#\">\n[[admin/menu:search.search-forum]]\n</a>\n</li>\n<li role=\"presentation\" class=\"keep-typing\">\n<a class=\"dropdown-item rounded-1\" role=\"menuitem\">[[admin/menu:search.keep-typing]]</a>\n</li>\n<li role=\"presentation\" class=\"start-typing\">\n<a class=\"dropdown-item rounded-1\" role=\"menuitem\">[[admin/menu:search.start-typing]]</a>\n</li>\n</ul>\n</div>\n</div>\n" :
        "") + 
      "\n</div>\n<div class=\"d-flex flex-column gap-1 ff-secondary flex-1 overflow-auto\">\n<!-- main acp navigation menu -->\n<div class=\"accordion overflow-auto d-flex flex-column gap-1\" component=\"acp/accordion\" id=\"accordionACP\">\n<!-- dashboard menu -->\n<div class=\"d-flex flex-column\">\n<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseDashboard\" aria-expanded=\"true\" aria-controls=\"collapseDashboard\">\n<i class=\"fa fa-fw fa-gauge\"></i>\n<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-dashboard]]</div>\n</button>\n<div id=\"collapseDashboard\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\n<div class=\"accordion-body p-0\">\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard\">[[admin/menu:dashboard/overview]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard/logins\">[[admin/menu:dashboard/logins]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard/users\">[[admin/menu:dashboard/users]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard/topics\">[[admin/menu:dashboard/topics]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/admin/dashboard/searches\">[[admin/menu:dashboard/searches]]</a>\n</div>\n</div>\n</div>\n<!-- manage menu -->\n" + 
      (guard((context != null) ? context['showManageMenu'] : null) ?
        "\n<div class=\"d-flex flex-column\">\n<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseManage\" aria-expanded=\"true\" aria-controls=\"collapseManage\">\n<i class=\"fa fa-fw fa-list\"></i>\n<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-manage]]</div>\n</button>\n<div id=\"collapseManage\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\n<div class=\"accordion-body p-0\">\n" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:categories'] : null) ?
            "\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"manage-categories\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/categories\">[[admin/menu:manage/categories]]</a>\n" :
            "") + 
          "\n" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:privileges'] : null) ?
            "\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/privileges\">[[admin/menu:manage/privileges]]</a>\n" :
            "") + 
          "\n" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:users'] : null) ?
            "\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"manage-users\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/users\">[[admin/menu:manage/users]]</a>\n" :
            "") + 
          "\n" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:groups'] : null) ?
            "\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/groups\">[[admin/menu:manage/groups]]</a>\n" :
            "") + 
          "\n" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:admins-mods'] : null) ?
            "\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/admins-mods\">[[admin/menu:manage/admins-mods]]</a>\n" :
            "") + 
          "\n" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:tags'] : null) ?
            "\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/tags\">[[admin/menu:manage/tags]]</a>\n" :
            "") + 
          "\n" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
            "\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/registration\">[[admin/menu:manage/registration]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/uploads\">[[admin/menu:manage/uploads]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/digest\">[[admin/menu:manage/digest]]</a>\n<hr/>\n<h6 class=\"text-xs ps-4\">[[pages:moderator-tools]]</h6>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/flags\">[[admin/menu:manage/flagged-content]] <i class=\"fa fa-external-link\"></i></a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/post-queue\">[[admin/menu:manage/post-queue]] <i class=\"fa fa-external-link\"></i></a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/ip-blacklist\">[[admin/menu:manage/ip-blacklist]] <i class=\"fa fa-external-link\"></i></a>\n" :
            "") + 
          "\n</div>\n</div>\n</div>\n" :
        "") + 
      "\n<!-- settings menu -->\n" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:settings'] : null) ?
        "\n<div class=\"d-flex flex-column\">\n<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseSettings\" aria-expanded=\"true\" aria-controls=\"collapseSettings\">\n<i class=\"fa fa-fw fa-sliders\"></i>\n<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-settings]]</div>\n</button>\n<div id=\"collapseSettings\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\n<div class=\"accordion-body p-0\">\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"settings-general\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/general\">[[admin/menu:section-general]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/navigation\">[[admin/menu:settings/navigation]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/user\">[[admin/menu:settings/user]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/reputation\">[[admin/menu:settings/reputation]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/group\">[[admin/menu:settings/group]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/tags\">[[admin/menu:manage/tags]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/post\">[[admin/menu:settings/post]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/uploads\">[[admin/menu:settings/uploads]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/email\">[[admin/menu:settings/email]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/chat\">[[admin/menu:settings/chat]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/pagination\">[[admin/menu:settings/pagination]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/notifications\">[[admin/menu:settings/notifications]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/api\">[[admin/menu:settings/api]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/cookies\">[[admin/menu:settings/cookies]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/web-crawler\">[[admin/menu:settings/web-crawler]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/advanced\">[[admin/menu:settings/advanced]]</a>\n</div>\n</div>\n</div>\n<!-- appearance menu -->\n<div class=\"d-flex flex-column\">\n<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseAppearance\" aria-expanded=\"true\" aria-controls=\"collapseAppearance\">\n<i class=\"fa fa-fw fa-paintbrush\"></i>\n<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-appearance]]</div>\n</button>\n<div id=\"collapseAppearance\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\n<div class=\"accordion-body p-0\">\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"appearance-themes\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/themes\">[[admin/menu:appearance/themes]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"appearance-skins\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/skins\">[[admin/menu:appearance/skins]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" id=\"appearance-customise\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/customise\">[[admin/menu:appearance/customise]]</a>\n</div>\n</div>\n</div>\n<!-- extend menu -->\n<div class=\"d-flex flex-column\">\n<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseExtend\" aria-expanded=\"true\" aria-controls=\"collapseExtend\">\n<i class=\"fa fa-fw fa-wrench\"></i>\n<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-extend]]</div>\n</button>\n<div id=\"collapseExtend\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\n<div class=\"accordion-body p-0\">\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/plugins\">[[admin/menu:extend/plugins]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/widgets\">[[admin/menu:extend/widgets]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/rewards\">[[admin/menu:extend/rewards]]</a>\n</div>\n</div>\n</div>\n<!-- plugins menu -->\n" + 
          (guard((context != null && context['plugins'] != null) ? context['plugins']['length'] : null) ?
            "\n<div class=\"d-flex flex-column\">\n<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapsePlugins\" aria-expanded=\"true\" aria-controls=\"collapsePlugins\">\n<i class=\"fa fa-fw fa-plug\"></i>\n<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-plugins]]</div>\n</button>\n<div id=\"collapsePlugins\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\n<div class=\"accordion-body p-0\">\n" + 
              compiled.blocks['plugins'](helpers, context, guard, iter, helper) + 
              "\n" + 
              (guard((context != null && context['authentication'] != null) ? context['authentication']['length'] : null) ?
                "\n<hr/>\n<div class=\"text-sm ms-4\">[[admin/menu:section-social-auth]]</div>\n" + 
                  compiled.blocks['authentication'](helpers, context, guard, iter, helper) + 
                  "\n" :
                "") + 
              "\n<hr/>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/extend/plugins#download\">[[admin/menu:extend/plugins.install]]</a>\n</div>\n</div>\n</div>\n" :
            "") + 
          "\n" :
        "") + 
      "\n<!-- advanced menu -->\n" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
        "\n<div class=\"d-flex flex-column\">\n<button class=\"btn-ghost justify-content-start\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseAdvanced\" aria-expanded=\"true\" aria-controls=\"collapseAdvanced\">\n<i class=\"fa fa-fw fa-superpowers\"></i>\n<div class=\"flex-1 font-serif text-sm fw-semibold\">[[admin/menu:section-advanced]]</div>\n</button>\n<div id=\"collapseAdvanced\" class=\"accordion-collapse collapse\" data-bs-parent=\"#accordionACP\">\n<div class=\"accordion-body p-0\">\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/database\">[[admin/menu:advanced/database]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/events\">[[admin/menu:advanced/events]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/hooks\">[[admin/menu:advanced/hooks]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/cache\">[[admin/menu:advanced/cache]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/errors\">[[admin/menu:advanced/errors]]</a>\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/logs\">[[admin/menu:advanced/logs]]</a>\n" + 
          (guard((context != null) ? context['env'] : null) ?
            "\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/development/logger\">[[admin/menu:development/logger]]</a>\n" :
            "") + 
          "\n</div>\n</div>\n</div>\n" :
        "") + 
      "\n</div>\n</div>\n<div class=\"d-flex flex-column gap-1 ff-secondary\">\n<hr class=\"my-1\"/>\n" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
        "\n<button component=\"rebuild-and-restart\" class=\"btn-ghost fw-semibold text-decoration-none justify-content-start\" ><i class=\"fa fa-fw fa-refresh\"></i> [[admin/menu:rebuild-and-restart]]</button>\n<button component=\"restart\" class=\"btn-ghost fw-semibold text-decoration-none justify-content-start\" ><i class=\"fa fa-fw fa-repeat\"></i> [[admin/menu:restart]]</button>\n" :
        "") + 
      "\n<button component=\"logout\" class=\"btn-ghost fw-semibold text-decoration-none justify-content-start\" ><i class=\"fa fa-fw fa-sign-out\"></i> [[admin/menu:logout]]</button>\n</div>\n</div>";
  }

  compiled.blocks = {
    'plugins': function plugins(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['plugins'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin" + 
          __escape(guard((context != null && context['plugins'] != null && context['plugins'][key0] != null) ? context['plugins'][key0]['route'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['plugins'] != null && context['plugins'][key0] != null) ? context['plugins'][key0]['name'] : null)) + 
          "</a>\n";
      }, function alt() {
        return "";
      });
    },
    'authentication': function authentication(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['authentication'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<a class=\"btn-ghost-sm justify-content-start text-decoration-none\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin" + 
          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['route'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['name'] : null)) + 
          "</a>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
