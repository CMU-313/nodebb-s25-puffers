
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
      "</h4>\n</div>\n<div class=\"col-12 col-md-4 px-0 px-md-3\">\n<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n</div>\n</div>\n<div class=\"row settings m-0\">\n<div id=\"spy-container\" class=\"col-12 col-md-8 px-0 mb-4\" tabindex=\"0\">\n<!-- general settings -->\n<div id=\"general\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/post:general]]</h5>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"topicPostSort\">[[admin/settings/post:sorting.post-default]]</label>\n<select id=\"topicPostSort\" class=\"form-select\" data-field=\"topicPostSort\">\n<option value=\"oldest_to_newest\">[[admin/settings/post:sorting.oldest-to-newest]]</option>\n<option value=\"newest_to_oldest\">[[admin/settings/post:sorting.newest-to-oldest]]</option>\n<option value=\"most_votes\">[[admin/settings/post:sorting.most-votes]]</option>\n</select>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"categoryTopicSort\">[[admin/settings/post:sorting.topic-default]]</label>\n<select id=\"categoryTopicSort\" class=\"form-select\" data-field=\"categoryTopicSort\">\n<option value=\"recently_replied\">[[admin/settings/post:sorting.recently-replied]]</option>\n<option value=\"recently_created\">[[admin/settings/post:sorting.recently-created]]</option>\n<option value=\"most_posts\">[[admin/settings/post:sorting.most-posts]]</option>\n<option value=\"most_votes\">[[admin/settings/post:sorting.most-votes]]</option>\n<option value=\"most_views\">[[admin/settings/post:sorting.most-views]]</option>\n</select>\n</div>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" id=\"enablePostHistory\" data-field=\"enablePostHistory\" checked />\n<label class=\"form-check-label\" for=\"enablePostHistory\">[[admin/settings/post:enable-post-history]]</label>\n</div>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" id=\"topicBacklinks\" data-field=\"topicBacklinks\">\n<label for=\"topicBacklinks\" class=\"form-check-label\">[[admin/settings/post:backlinks.enabled]]</label>\n<p class=\"form-text\">[[admin/settings/post:backlinks.help]]</p>\n</div>\n<div class=\"form-check form-switch mb-3\">\n<input id=\"trackIPPerPost\" class=\"form-check-input\" type=\"checkbox\" data-field=\"trackIpPerPost\">\n<label for=\"trackIPPerPost\" class=\"form-check-label\">[[admin/settings/post:ip-tracking.each-post]]</label>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"teaserPost\">[[admin/settings/post:teaser]]</label>\n<select id=\"teaserPost\" class=\"form-select\" data-field=\"teaserPost\">\n<option value=\"last-post\">[[admin/settings/post:teaser.last-post]]</option>\n<option value=\"last-reply\">[[admin/settings/post:teaser.last-reply]]</option>\n<option value=\"first\">[[admin/settings/post:teaser.first]]</option>\n</select>\n</div>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" id=\"showPostPreviewsOnHover\" data-field=\"showPostPreviewsOnHover\">\n<label for=\"showPostPreviewsOnHover\" class=\"form-check-label\">[[admin/settings/post:showPostPreviewsOnHover]]</label>\n</div>\n</div>\n<hr/>\n<!-- posting restrictions -->\n<div id=\"posting-restrictions\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/post:restrictions]]</h5>\n<div class=\"mb-3 d-flex justify-content-between align-items-center gap-2\">\n<label class=\"form-label\" for=\"cid-subcategories-per-page\">\n[[admin/settings/post:restrictions.title-length]]\n</label>\n<div class=\"d-flex gap-3 align-items-center\">\n<div class=\"d-flex gap-1 align-items-center\">\n<label for=\"minimumTitleLength\">[[admin/admin:min]]</label>\n<input id=\"minimumTitleLength\" type=\"text\" class=\"form-control text-end\" value=\"3\" data-field=\"minimumTitleLength\" style=\"max-width: 80px;\">\n</div>\n<div class=\"d-flex gap-1 align-items-center\">\n<label for=\"maximumTitleLength\">[[admin/admin:max]]</label>\n<input id=\"maximumTitleLength\" type=\"text\" class=\"form-control text-end\" value=\"255\" data-field=\"maximumTitleLength\" style=\"max-width: 80px;\">\n</div>\n</div>\n</div>\n<div class=\"mb-3 d-flex justify-content-between align-items-center gap-2\">\n<label class=\"form-label\" for=\"cid-subcategories-per-page\">\n[[admin/settings/post:restrictions.post-length]]\n</label>\n<div class=\"d-flex gap-3 align-items-center\">\n<div class=\"d-flex gap-1 align-items-center\">\n<label for=\"minimumPostLength\">[[admin/admin:min]]</label>\n<input id=\"minimumPostLength\" type=\"text\" class=\"form-control text-end\" value=\"8\" data-field=\"minimumPostLength\" style=\"max-width: 80px;\">\n</div>\n<div class=\"d-flex gap-1 align-items-center\">\n<label for=\"maximumPostLength\">[[admin/admin:max]]</label>\n<input id=\"maximumPostLength\" type=\"text\" class=\"form-control text-end\" value=\"32767\" data-field=\"maximumPostLength\" style=\"max-width: 80px;\">\n</div>\n</div>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"postDelay\">[[admin/settings/post:restrictions.seconds-between]]</label>\n<input id=\"postDelay\" type=\"text\" class=\"form-control\" value=\"10\" data-field=\"postDelay\">\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"postEditDuration\">[[admin/settings/post:restrictions.seconds-edit-after]]</label>\n<input id=\"postEditDuration\" type=\"text\" class=\"form-control\" value=\"0\" data-field=\"postEditDuration\">\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"postDeleteDuration\">[[admin/settings/post:restrictions.seconds-delete-after]]</label>\n<input id=\"postDeleteDuration\" type=\"text\" class=\"form-control\" value=\"0\" data-field=\"postDeleteDuration\">\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"preventTopicDeleteAfterReplies\">[[admin/settings/post:restrictions.replies-no-delete]]</label>\n<input id=\"preventTopicDeleteAfterReplies\" type=\"text\" class=\"form-control\" value=\"0\" data-field=\"preventTopicDeleteAfterReplies\">\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"topicStaleDays\">[[admin/settings/post:restrictions.days-until-stale]]</label>\n<input id=\"topicStaleDays\" type=\"text\" class=\"form-control\" value=\"60\" data-field=\"topicStaleDays\">\n<p class=\"form-text\">\n[[admin/settings/post:restrictions.stale-help]]\n</p>\n</div>\n</div>\n<hr/>\n<!-- post queue settings -->\n<div id=\"post-queue\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/post:post-queue]]</h5>\n<div class=\"mb-3\">\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" data-field=\"postQueue\">\n<label class=\"form-check-label\">[[admin/settings/post:restrictions.post-queue]]</label>\n</div>\n<p class=\"form-text\">\n[[admin/settings/post:restrictions.post-queue-help]]\n</p>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"postQueueReputationThreshold\">[[admin/settings/post:restrictions.post-queue-rep-threshold]]</label>\n<input id=\"postQueueReputationThreshold\" type=\"text\" class=\"form-control\" value=\"0\" data-field=\"postQueueReputationThreshold\">\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"groupsExemptFromPostQueue\">[[admin/settings/post:restrictions.groups-exempt-from-post-queue]]</label>\n<select id=\"groupsExemptFromPostQueue\" class=\"form-select\" multiple data-field=\"groupsExemptFromPostQueue\">\n" + 
      compiled.blocks['groupsExemptFromPostQueue'](helpers, context, guard, iter, helper) + 
      "\n</select>\n</div>\n</div>\n<hr/>\n<!-- timestamp settings -->\n<div id=\"timestamp\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/post:timestamp]]</h5>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"timeagoCutoff\">[[admin/settings/post:timestamp.cut-off]]</label>\n<input type=\"number\" class=\"form-control\" id=\"timeagoCutoff\" data-field=\"timeagoCutoff\"  />\n<p class=\"form-text\">\n[[admin/settings/post:timestamp.cut-off-help]]\n</p>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"necroThreshold\">[[admin/settings/post:timestamp.necro-threshold]]</label>\n<input type=\"number\" class=\"form-control\" id=\"necroThreshold\" data-field=\"necroThreshold\"  />\n<p class=\"form-text\">\n[[admin/settings/post:timestamp.necro-threshold-help]]\n</p>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"incrementTopicViewsInterval\">[[admin/settings/post:timestamp.topic-views-interval]]</label>\n<input type=\"number\" class=\"form-control\" id=\"incrementTopicViewsInterval\" data-field=\"incrementTopicViewsInterval\"  />\n<p class=\"form-text\">\n[[admin/settings/post:timestamp.topic-views-interval-help]]\n</p>\n</div>\n</div>\n<hr/>\n<!-- unread & recent settings-->\n<div id=\"unread-recent-settings\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/post:unread-and-recent]]</h5>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"unreadCutoff\">[[admin/settings/post:unread.cutoff]]</label>\n<input id=\"unreadCutoff\" type=\"text\" class=\"form-control\" value=\"2\" data-field=\"unreadCutoff\">\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"bookmarkthreshold\">[[admin/settings/post:unread.min-track-last]]</label>\n<input id=\"bookmarkthreshold\" type=\"text\" class=\"form-control\" value=\"5\" data-field=\"bookmarkThreshold\">\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"recentMaxTopics\">[[admin/settings/post:recent.max-topics]]</label>\n<input id=\"recentMaxTopics\" type=\"text\" class=\"form-control\" value=\"200\" data-field=\"recentMaxTopics\">\n</div>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" data-field=\"disableRecentCategoryFilter\">\n<label class=\"form-check-label\">[[admin/settings/post:recent.categoryFilter.disable]]</label>\n</div>\n</div>\n<hr/>\n<!-- signature settings -->\n<div id=\"signature-settings\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/post:signature]]</h5>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" id=\"disableSignatures\" data-field=\"disableSignatures\">\n<label for=\"disableSignatures\" class=\"form-check-label\">[[admin/settings/post:signature.disable]]</label>\n</div>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" id=\"signatures:disableLinks\" data-field=\"signatures:disableLinks\">\n<label for=\"signatures:disableLinks\" class=\"form-check-label\">[[admin/settings/post:signature.no-links]]</label>\n</div>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" id=\"signatures:disableImages\" data-field=\"signatures:disableImages\">\n<label for=\"signatures:disableImages\" class=\"form-check-label\">[[admin/settings/post:signature.no-images]]</label>\n</div>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" id=\"signatures:hideDuplicates\" data-field=\"signatures:hideDuplicates\">\n<label for=\"signatures:hideDuplicates\" class=\"form-check-label\">[[admin/settings/post:signature.hide-duplicates]]</label>\n</div>\n<div>\n<label class=\"form-label\" for=\"maximumSignatureLength\">[[admin/settings/post:signature.max-length]]</label>\n<input id=\"maximumSignatureLength\" type=\"text\" class=\"form-control\" value=\"255\" data-field=\"maximumSignatureLength\">\n</div>\n</div>\n<hr/>\n<!-- composer settings -->\n<div id=\"composer-settings\" class=\"mb-4\">\n<h5 class=\"fw-bold tracking-tight settings-header\">[[admin/settings/post:composer]]</h5>\n<p>\n[[admin/settings/post:composer-help]]\n</p>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" id=\"composer:showHelpTab\" data-field=\"composer:showHelpTab\" checked />\n<label class=\"form-check-label\" for=\"composer:showHelpTab\">[[admin/settings/post:composer.show-help]]</label>\n</div>\n<div class=\"form-check form-switch mb-3\">\n<input class=\"form-check-input\" type=\"checkbox\" id=\"composer:allowPluginHelp\" data-field=\"composer:allowPluginHelp\" checked />\n<label class=\"form-check-label\" for=\"composer:allowPluginHelp\">[[admin/settings/post:composer.enable-plugin-help]]</label>\n</div>\n<div class=\"mb-3\">\n<label class=\"form-label\" for=\"composer:customHelpText\">[[admin/settings/post:composer.custom-help]]</label>\n<textarea class=\"form-control\" id=\"composer:customHelpText\" data-field=\"composer:customHelpText\" rows=\"5\"></textarea>\n</div>\n</div>\n</div>\n<div class=\"col-md-4 d-none d-md-block px-3 hidden\" component=\"settings/toc\">\n<div class=\"sticky-top\" style=\"top: 4.0rem;\">\n<div class=\"fw-bold text-xs text-muted mb-1\">[[admin/settings/general:on-this-page]]</div>\n<nav id=\"settings-navbar\" class=\"h-100 flex-column align-items-stretch\">\n<nav class=\"nav nav-pills flex-column gap-2\" component=\"settings/toc/list\">\n<!-- this is filled by public/src/admin/settings.js populateTOC function -->\n</nav>\n</nav>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    'groupsExemptFromPostQueue': function groupsExemptFromPostQueue(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groupsExemptFromPostQueue'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<option value=\"" + 
          __escape(guard((context != null && context['groupsExemptFromPostQueue'] != null && context['groupsExemptFromPostQueue'][key0] != null) ? context['groupsExemptFromPostQueue'][key0]['displayName'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['groupsExemptFromPostQueue'] != null && context['groupsExemptFromPostQueue'][key0] != null) ? context['groupsExemptFromPostQueue'][key0]['displayName'] : null)) + 
          "</option>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
