
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
    return "<div class=\"acp-page-container\">\n<div component=\"settings/main/header\" class=\"row border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center\">\n<div class=\"col-12 col-md-8 px-0 mb-1 mb-md-0\">\n<h4 class=\"fw-bold tracking-tight mb-0\">" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "</h4>\n</div>\n<div class=\"col-12 col-md-4 px-0 px-md-3\">\n<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n</div>\n</div>\n<div class=\"row settings m-0\">\n<div id=\"spy-container\" class=\"col-12 col-md-8 px-0 mb-4\" tabindex=\"0\">\n<div id=\"email-settings\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/email:email-settings]]</h5>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"email:from\">[[admin/settings/email:address]]</label>\n<p class=\"form-text\">\n[[admin/settings/email:address-help]]\n</p>\n<input type=\"text\" class=\"form-control input-lg\" id=\"email:from\" data-field=\"email:from\" placeholder=\"info@example.org\" />\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"email:from_name\">[[admin/settings/email:from]]</label>\n<input type=\"text\" class=\"form-control input-lg\" id=\"email:from_name\" data-field=\"email:from_name\" placeholder=\"NodeBB\" />\n<p class=\"form-text\">\n[[admin/settings/email:from-help]]\n</p>\n</div>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" id=\"requireEmailAddress\" data-field=\"requireEmailAddress\" name=\"requireEmailAddress\" />\n<label for=\"requireEmailAddress\" class=\"form-check-label\">[[admin/settings/email:require-email-address]]</label>\n</div>\n<p class=\"form-text\">[[admin/settings/email:require-email-address-warning]]</p>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" id=\"sendEmailToBanned\" data-field=\"sendEmailToBanned\" name=\"sendEmailToBanned\" />\n<label for=\"sendEmailToBanned\" class=\"form-check-label\">[[admin/settings/email:sendEmailToBanned]]</label>\n</div>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" id=\"removeEmailNotificationImages\" data-field=\"removeEmailNotificationImages\" name=\"removeEmailNotificationImages\" />\n<label for=\"removeEmailNotificationImages\" class=\"form-check-label\">[[admin/settings/email:notifications.remove-images]]</label>\n</div>\n</div>\n<hr/>\n<div id=\"confirmation\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/email:confirmation-settings]]</h5>\n<div class=\"row mb-3 align-items-center\">\n<div class=\"col-auto\">\n<label class=\"form-label\" for=\"emailConfirmInterval\">[[admin/settings/user:email-confirm-interval]]</label>\n</div>\n<div class=\"col-auto\">\n<input class=\"form-control\" data-field=\"emailConfirmInterval\" type=\"number\" id=\"emailConfirmInterval\" placeholder=\"Default: 10\"\nvalue=\"10\" />\n</div>\n<div class=\"col-auto\">\n<label class=\"form-label\" for=\"emailConfirmInterval\">[[admin/settings/user:email-confirm-interval2]]</label>\n</div>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"emailConfirmExpiry\">[[admin/settings/email:confirmation.expiry]]</label>\n<input class=\"form-control\" data-field=\"emailConfirmExpiry\" type=\"number\" id=\"emailConfirmExpiry\" placeholder=\"24\" />\n</div>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" id=\"sendValidationEmail\" data-field=\"sendValidationEmail\" name=\"sendValidationEmail\" />\n<label for=\"sendValidationEmail\" class=\"form-check-label\">[[admin/settings/email:send-validation-email]]</label>\n</div>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" id=\"includeUnverifiedEmails\" data-field=\"includeUnverifiedEmails\" name=\"includeUnverifiedEmails\" />\n<label for=\"includeUnverifiedEmails\" class=\"form-check-label\">[[admin/settings/email:include-unverified-emails]]</label>\n</div>\n<p class=\"form-text\">[[admin/settings/email:include-unverified-warning]]</p>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" id=\"emailPrompt\" data-field=\"emailPrompt\" name=\"emailPrompt\" />\n<label for=\"emailPrompt\" class=\"form-check-label\">[[admin/settings/email:prompt]]</label>\n</div>\n<p class=\"form-text\">[[admin/settings/email:prompt-help]]</p>\n</div>\n<div id=\"email-digests\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/email:subscriptions]]</h5>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" id=\"disableEmailSubscriptions\" data-field=\"disableEmailSubscriptions\" name=\"disableEmailSubscriptions\" />\n<label for=\"disableEmailSubscriptions\" class=\"form-check-label\">[[admin/settings/email:subscriptions.disable]]</label>\n</div>\n<div class=\"mb-3\">\n<div class=\"mb-3 d-flex justify-content-between align-items-center\">\n<label class=\"form-label\" for=\"digestHour\">[[admin/settings/email:subscriptions.hour]]</label>\n<input type=\"number\" class=\"form-control input-lg\" id=\"digestHour\" data-field=\"digestHour\" placeholder=\"17\" min=\"0\" max=\"24\" style=\"width: 64px;\"/>\n</div>\n<p class=\"form-text\">\n[[admin/settings/email:subscriptions.hour-help]]\n</p>\n</div>\n</div>\n<hr/>\n<div id=\"smtp-transport\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/email:smtp-transport]]</h5>\n<div class=\"alert alert-warning\">\n[[admin/settings/email:smtp-transport-help]]\n</div>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" id=\"email:smtpTransport:enabled\" data-field=\"email:smtpTransport:enabled\" name=\"email:smtpTransport:enabled\" />\n<label for=\"email:smtpTransport:enabled\" class=\"form-check-label\">[[admin/settings/email:smtp-transport.enabled]]</label>\n</div>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" id=\"email:smtpTransport:pool\" data-field=\"email:smtpTransport:pool\" name=\"email:smtpTransport:pool\" />\n<label for=\"email:smtpTransport:pool\" class=\"form-check-label\">[[admin/settings/email:smtp-transport.pool]]</label>\n<p class=\"form-text\">[[admin/settings/email:smtp-transport.pool-help]]</p>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"email:smtpTransport:service\">[[admin/settings/email:smtp-transport.service]]</label>\n<select class=\"form-select\" id=\"email:smtpTransport:service\" data-field=\"email:smtpTransport:service\">\n<option value=\"nodebb-custom-smtp\" style=\"font-weight: bold\">[[admin/settings/email:smtp-transport.service-custom]]</option>\n<option style=\"font-size: 10px\" disabled>&nbsp;</option>\n" + 
      compiled.blocks['services'](helpers, context, guard, iter, helper) + 
      "\n</select>\n<p class=\"form-text\">\n[[admin/settings/email:smtp-transport.service-help]]\n<br>\n[[admin/settings/email:smtp-transport.gmail-warning1]]\n<br>\n[[admin/settings/email:smtp-transport.gmail-warning2]]\n</p>\n</div>\n<div class=\"mb-3 card card-body text-bg-light border-0\" id=\"email:smtpTransport:custom-service\">\n<h5>Custom Service</h5>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"email:smtpTransport:host\">[[admin/settings/email:smtp-transport.host]]</label>\n<input type=\"text\" class=\"form-control input-md\" id=\"email:smtpTransport:host\" data-field=\"email:smtpTransport:host\" placeholder=\"smtp.example.org\">\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"email:smtpTransport:port\">[[admin/settings/email:smtp-transport.port]]</label>\n<input type=\"text\" class=\"form-control input-md\" id=\"email:smtpTransport:port\" data-field=\"email:smtpTransport:port\" placeholder=\"5555\">\n</div>\n<div>\n<label class=\"form-label\" for=\"email:smtpTransport:security\">[[admin/settings/email:smtp-transport.security]]</label>\n<select class=\"form-select\" id=\"email:smtpTransport:security\" data-field=\"email:smtpTransport:security\">\n<option value=\"ENCRYPTED\">[[admin/settings/email:smtp-transport.security-encrypted]]</option>\n<option value=\"STARTTLS\">[[admin/settings/email:smtp-transport.security-starttls]]</option>\n<option value=\"NONE\">[[admin/settings/email:smtp-transport.security-none]]</option>\n</select>\n</div>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"email:smtpTransport:user\">[[admin/settings/email:smtp-transport.username]]</label>\n<input id=\"email:smtpTransport:user\" type=\"text\" class=\"form-control input-lg\" data-field=\"email:smtpTransport:user\" placeholder=\"admin@example.org\" autocomplete=\"off\" />\n<p class=\"form-text\">\n[[admin/settings/email:smtp-transport.username-help]]\n</p>\n</div>\n<div>\n<label class=\"form-label\" for=\"email:smtpTransport:pass\">[[admin/settings/email:smtp-transport.password]]</label>\n<input id=\"email:smtpTransport:pass\" type=\"password\" class=\"form-control input-lg\" data-field=\"email:smtpTransport:pass\" autocomplete=\"off\" />\n</div>\n</div>\n<div id=\"email-testing\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/email:testing]]</h5>\n<div class=\"\">\n<label class=\"form-label\" for=\"test-email\">[[admin/settings/email:testing.select]]</label>\n<div class=\"d-flex justify-content-between gap-1\">\n<select id=\"test-email\" class=\"form-select\">\n" + 
      compiled.blocks['sendable'](helpers, context, guard, iter, helper) + 
      "\n</select>\n<button class=\"btn btn-primary text-nowrap\" type=\"button\" data-action=\"email.test\">[[admin/settings/email:testing.send]]</button>\n</div>\n</div>\n<p class=\"form-text\">\n[[admin/settings/email:testing.send-help]]\n</p>\n</div>\n<hr/>\n<div id=\"edit-email-template\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/email:template]]</h5>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"email-editor-selector\">[[admin/settings/email:template.select]]</label>\n<select id=\"email-editor-selector\" class=\"form-select\">\n" + 
      compiled.blocks['emails'](helpers, context, guard, iter, helper) + 
      "\n</select>\n</div>\n<div class=\"mb-3\">\n<div id=\"email-editor\"></div>\n<input type=\"hidden\" id=\"email-editor-holder\" value=\"\" data-field=\"\" />\n</div>\n<button class=\"btn btn-warning\" type=\"button\" data-action=\"email.revert\">[[admin/settings/email:template.revert]]</button>\n</div>\n</div>\n<div class=\"col-md-4 d-none d-md-block px-3 hidden\" component=\"settings/toc\">\n<div class=\"sticky-top\" style=\"top: 4.0rem;\">\n<div class=\"fw-bold text-xs text-muted mb-1\">[[admin/settings/general:on-this-page]]</div>\n<nav id=\"settings-navbar\" class=\"h-100 flex-column align-items-stretch\">\n<nav class=\"nav nav-pills flex-column gap-2\" component=\"settings/toc/list\">\n<!-- this is filled by public/src/admin/settings.js populateTOC function -->\n</nav>\n</nav>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    'services': function services(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['services'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<option value=\"" + 
          __escape(guard(value)) + 
          "\">" + 
          __escape(guard(value)) + 
          "</option>\n";
      }, function alt() {
        return "";
      });
    },
    'sendable': function sendable(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['sendable'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<option value=\"" + 
          __escape(guard(value)) + 
          "\">" + 
          __escape(guard(value)) + 
          "</option>\n";
      }, function alt() {
        return "";
      });
    },
    'emails': function emails(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['emails'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<option value=\"" + 
          __escape(guard((context != null && context['emails'] != null && context['emails'][key0] != null) ? context['emails'][key0]['path'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['emails'] != null && context['emails'][key0] != null) ? context['emails'][key0]['path'] : null)) + 
          "</option>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
