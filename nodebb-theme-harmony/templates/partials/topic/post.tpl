{{{ if (!./index && widgets.mainpost-header.length) }}}
<div data-widget-area="mainpost-header">
{{{ each widgets.mainpost-header }}}
{widgets.mainpost-header.html}
{{{ end }}}
</div>
{{{ end }}}
<div class="d-flex align-items-start gap-3">
<div class="bg-body d-none d-sm-block rounded-circle" style="outline: 2px solid var(--bs-body-bg);">
<a class="d-inline-block position-relative text-decoration-none" href="{{{ if ./user.userslug }}}{config.relative_path}/user/{./user.userslug}{{{ else }}}#{{{ end }}}" aria-label="[[aria:user-avatar-for, {./user.username}]]">
{buildAvatar(posts.user, "48px", true, "", "user/picture")}
<span component="user/status" class="position-absolute translate-middle-y border border-white border-2 rounded-circle status {posts.user.status}"><span class="visually-hidden">[[global:{posts.user.status}]]</span></span>
</a>
</div>
<div class="post-container d-flex flex-grow-1 flex-column w-100" style="min-width:0;">
<div class="d-flex align-items-center gap-1 flex-wrap w-100 post-header mt-1" itemprop="author" itemscope itemtype="https://schema.org/Person">
<meta itemprop="name" content="{./user.username}">
{{{ if ./user.userslug }}}<meta itemprop="url" content="{config.relative_path}/user/{./user.userslug}">{{{ end }}}
<div class="bg-body d-sm-none">
<a class="d-inline-block position-relative text-decoration-none" href="{{{ if ./user.userslug }}}{config.relative_path}/user/{./user.userslug}{{{ else }}}#{{{ end }}}">
{buildAvatar(posts.user, "20px", true, "", "user/picture")}
<span component="user/status" class="position-absolute translate-middle-y border border-white border-2 rounded-circle status {posts.user.status}"><span class="visually-hidden">[[global:{posts.user.status}]]</span></span>
</a>
</div>
<a class="fw-bold text-nowrap" href="{{{ if ./user.userslug }}}{config.relative_path}/user/{./user.userslug}{{{ else }}}#{{{ end }}}" data-username="{posts.user.username}" data-uid="{posts.user.uid}">{posts.user.displayname}</a>
{{{ each posts.user.selectedGroups }}}
{{{ if posts.user.selectedGroups.slug }}}
<a href="{config.relative_path}/groups/{./slug}" class="badge rounded-1 text-uppercase text-truncate text-decoration-none" style="max-width: 150px;color:{./textColor};background-color: {./labelColor};"><i class="fa {{{ if ./icon }}}{./icon}{{{ if ./userTitle}}} me-1{{{ end }}}{{{else}}}hidden{{{ end }}}"></i><span class="badge-text align-text-bottom">{{{ if ./userTitle }}}{./userTitle}{{{ end }}}</span></a>
{{{ end }}}
{{{ end }}}
{{{ if posts.user.banned }}}
<span class="badge bg-danger rounded-1">[[user:banned]]</span>
{{{ end }}}
<div class="d-flex gap-1 align-items-center">
<span class="text-muted">{generateWroteReplied(@value, config.timeagoCutoff)}</span>
{{{ if posts.editor.username }}}
<span class="text-muted">
&bull;
<span>Last Edited: </span>
<span class="timeago" title="{isoTimeToLocaleString(posts.editedISO, config.userLang)}">[[global:edited]]</span>
<i component="post/edit-indicator" class="fa fa-edit text-muted{{{ if privileges.posts:history }}} pointer{{{ end }}}" title="[[global:edited-by, {posts.editor.username}]]"></i>
</span>
{{{ end }}}
</div>
{{{ if posts.user.custom_profile_info.length }}}
<div>
<span>
&#124;
{{{ each posts.user.custom_profile_info }}}
{posts.user.custom_profile_info.content}
{{{ end }}}
</span>
</div>
{{{ end }}}
<div class="d-flex align-items-center gap-1 flex-grow-1 justify-content-end">
<span class="bookmarked opacity-0 text-primary"><i class="fa fa-bookmark-o"></i></span>
<a href="{config.relative_path}/post/{./pid}" class="post-index text-muted d-none d-md-inline">#{increment(./index, "1")}</a>
</div>
</div>
<div class="content mt-2 text-break" component="post/content" itemprop="text">
{posts.content}
{{{if !posts.isEnglish }}}
<div class="sensitive-content-message">
<a class="btn btn-sm btn-primary view-translated-btn">Click here to view the translated message.</a>
</div>
<div class="translated-content" style="display:none;">
{posts.translatedContent}
</div>
{{{end}}}
</div>
</div>
<div component="post/reactions" class="post-reactions mt-2">
{{{ each reactions }}}
<button class="btn btn-sm btn-light border reaction-btn {{{ if ./reacted }}}reacted{{{ end }}}"
data-emoji="{./emoji}"
data-count="{./count}">
<span class="reaction-emoji">{./emoji}</span>
<span class="reaction-count">{./count}</span>
</button>
{{{ end }}}
</div>
</div>
