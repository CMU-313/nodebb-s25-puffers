
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
    return "<a class=\"nav-link\" data-bs-toggle=\"dropdown\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
      "/chats\" data-ajaxify=\"false\" id=\"chat_dropdown\" component=\"chat/dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<i component=\"chat/icon\" class=\"fa " + 
      (guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['chat'] : null) ?
        "fa-comment" :
        "fa-comment-o") + 
      " fa-fw unread-count\" data-content=\"" + 
      __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['chat'] : null)) + 
      "\"></i> <span class=\"d-inline d-sm-none\">[[global:header.chats]]</span>\n</a>\n<ul class=\"dropdown-menu dropdown-menu-end p-1\" aria-labelledby=\"chat_dropdown\" style=\"min-width: 300px; width: 300px;\" role=\"menu\">\n<li>\n<ul component=\"chat/list\" class=\"chat-list chats-list\">\n<li class=\"loading-text\">\n<a href=\"#\"><i class=\"fa fa-refresh fa-spin\"></i> [[global:chats.loading]]</a>\n</li>\n</ul>\n</li>\n<li class=\"dropdown-divider\"></li>\n<li>\n<div class=\"d-flex justify-content-center gap-1 flex-wrap\">\n<a class=\"btn btn-light mark-all-read flex-fill text-nowrap\" href=\"#\" component=\"chats/mark-all-read\"><i class=\"fa fa-check-double\"></i> [[modules:chat.mark-all-read]]</a>\n<a class=\"btn btn-primary flex-fill text-nowrap\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
      "/chats\"><i class=\"fa fa-comments\"></i> [[modules:chat.see-all]]</a>\n</div>\n</li>\n</ul>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
