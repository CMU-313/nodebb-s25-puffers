
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
      "\n</div>\n<div class=\"row register\">\n<div class=\"row " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "col-lg-9 col-sm-12" :
        "col-lg-12") + 
      "\">\n<div class=\"" + 
      __escape(guard((context != null) ? context['register_window:spansize'] : null)) + 
      "\">\n<div class=\"register-block\">\n<div class=\"alert alert-danger" + 
      (guard((context != null) ? context['error'] : null) ?
        "" :
        " hidden") + 
      "\" id=\"register-error-notify\" >\n<strong>[[error:registration-error]]</strong>\n<p>" + 
      __escape(guard((context != null) ? context['error'] : null)) + 
      "</p>\n</div>\n<form component=\"register/local\" class=\"form-horizontal\" role=\"form\" action=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/register\" method=\"post\">\n<div class=\"row mb-3\">\n<label for=\"username\" class=\"col-lg-2 col-form-label\">[[register:username]]</label>\n<div class=\"col-lg-10\">\n<input class=\"form-control\" type=\"text\" placeholder=\"[[register:username-placeholder]]\" name=\"username\" id=\"username\" autocorrect=\"off\" autocapitalize=\"off\" autocomplete=\"nickname\" />\n<span class=\"register-feedback\" id=\"username-notify\"></span>\n<span class=\"form-text\">[[register:help.username-restrictions, " + 
      __escape(guard((context != null) ? context['minimumUsernameLength'] : null)) + 
      ", " + 
      __escape(guard((context != null) ? context['maximumUsernameLength'] : null)) + 
      "]]</span>\n</div>\n</div>\n<div class=\"row mb-2\">\n<label for=\"password\" class=\"col-lg-2 col-form-label\">[[register:password]]</label>\n<div class=\"col-lg-10\">\n<input class=\"form-control\" type=\"password\" placeholder=\"[[register:password-placeholder]]\" name=\"password\" id=\"password\" autocomplete=\"new-password\" autocapitalize=\"off\" />\n<span class=\"register-feedback\" id=\"password-notify\"></span>\n<span class=\"form-text\">[[register:help.minimum-password-length, " + 
      __escape(guard((context != null) ? context['minimumPasswordLength'] : null)) + 
      "]]</span>\n<p id=\"caps-lock-warning\" class=\"text-danger hidden\">\n<i class=\"fa fa-exclamation-triangle\"></i> [[login:caps-lock-enabled]]\n</p>\n</div>\n</div>\n<div class=\"row mb-2\">\n<label for=\"password-confirm\" class=\"col-lg-2 col-form-label\">[[register:confirm-password]]</label>\n<div class=\"col-lg-10\">\n<input class=\"form-control\" type=\"password\" placeholder=\"[[register:confirm-password-placeholder]]\" name=\"password-confirm\" id=\"password-confirm\" autocomplete=\"new-password\" autocapitalize=\"off\" />\n<span class=\"register-feedback\" id=\"password-confirm-notify\"></span>\n</div>\n</div>\n" + 
      compiled.blocks['regFormEntry'](helpers, context, guard, iter, helper) + 
      "\n<div class=\"row\">\n<div class=\"offset-lg-2 col-lg-10\">\n<button class=\"btn btn-primary btn-lg\" id=\"register\" type=\"submit\">[[register:register-now-button]]</button>\n</div>\n</div>\n<input id=\"token\" type=\"hidden\" name=\"token\" value=\"\" />\n<input id=\"noscript\" type=\"hidden\" name=\"noscript\" value=\"true\" />\n<input type=\"hidden\" name=\"_csrf\" value=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
      "\" />\n</form>\n</div>\n</div>\n" + 
      (guard((context != null) ? context['alternate_logins'] : null) ?
        "\n<div class=\"col-md-6\">\n<div class=\"alt-register-block\">\n<h4>[[register:alternative-registration]]</h4>\n<ul class=\"alt-logins\">\n" + 
          compiled.blocks['authentication'](helpers, context, guard, iter, helper) + 
          "\n</ul>\n</div>\n</div>\n" :
        "") + 
      "\n</div>\n<div data-widget-area=\"sidebar\" class=\"col-lg-3 col-sm-12 " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "" :
        "hidden") + 
      "\">\n" + 
      compiled.blocks['widgets.sidebar'](helpers, context, guard, iter, helper) + 
      "\n</div>\n</div>\n<div data-widget-area=\"footer\">\n" + 
      compiled.blocks['widgets.footer'](helpers, context, guard, iter, helper) + 
      "\n</div>";
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
    'regFormEntry': function regFormEntry(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['regFormEntry'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<div class=\"row mb-2 " + 
          __escape(guard((context != null && context['regFormEntry'] != null && context['regFormEntry'][key0] != null) ? context['regFormEntry'][key0]['styleName'] : null)) + 
          "\">\n<label for=\"" + 
          __escape(guard((context != null && context['regFormEntry'] != null && context['regFormEntry'][key0] != null) ? context['regFormEntry'][key0]['inputId'] : null)) + 
          "\" class=\"col-lg-2 col-form-label\">" + 
          __escape(guard((context != null && context['regFormEntry'] != null && context['regFormEntry'][key0] != null) ? context['regFormEntry'][key0]['label'] : null)) + 
          "</label>\n<div class=\"col-lg-10\">" + 
          guard((context != null && context['regFormEntry'] != null && context['regFormEntry'][key0] != null) ? context['regFormEntry'][key0]['html'] : null) + 
          "</div>\n</div>\n";
      }, function alt() {
        return "";
      });
    },
    'authentication': function authentication(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['authentication'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li class=\"" + 
          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['name'] : null)) + 
          "\"><a rel=\"nofollow noopener noreferrer\" target=\"_top\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['url'] : null)) + 
          "\"><i class=\"fa " + 
          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['icon'] : null)) + 
          " fa-3x\"></i></i></a></li>\n";
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
