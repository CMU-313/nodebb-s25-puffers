<div class="account">
<!-- IF breadcrumbs.length -->
<ol class="breadcrumb" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">
{{{each breadcrumbs}}}
<li<!-- IF @last --> component="breadcrumb/current"<!-- ENDIF @last --> itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" class="breadcrumb-item <!-- IF @last -->active<!-- ENDIF @last -->">
<meta itemprop="position" content="{@index}" />
{{{ if ./url }}}<a href="{breadcrumbs.url}" itemprop="item">{{{ end }}}
<span itemprop="name">
{breadcrumbs.text}
<!-- IF @last -->
<!-- IF !feeds:disableRSS -->
<!-- IF rssFeedUrl --><a target="_blank" href="{rssFeedUrl}" itemprop="item"><i class="fa fa-rss-square"></i></a><!-- ENDIF rssFeedUrl --><!-- ENDIF !feeds:disableRSS -->
<!-- ENDIF @last -->
</span>
{{{ if ./url }}}</a>{{{ end }}}
</li>
{{{end}}}
</ol>
<!-- ENDIF breadcrumbs.length -->
<div data-widget-area="header">
{{{each widgets.header}}}
{{widgets.header.html}}
{{{end}}}
</div>
<div class="cover" component="account/cover" style="background-image: url({cover:url}); background-position: {cover:position};">
<div class="avatar-wrapper" data-uid="{uid}">
<!-- IF picture -->
<img src="{picture}" class="avatar avatar-rounded" style="--avatar-size: 128px;" />
<!-- ELSE -->
<div class="avatar avatar-rounded" style="background-color: {icon:bgColor}; --avatar-size: 128px;" title="{username}">{icon:text}</div>
<!-- ENDIF picture -->
<i component="user/status" class="fa fa-circle status {status}" title="[[global:{status}]]"></i>
<!-- IF loggedIn -->
<!-- IF !isSelf -->
<button class="btn-morph persona-fab <!-- IF isFollowing -->heart<!-- ELSE -->plus<!-- ENDIF isFollowing -->" title="<!-- IF isFollowing -->[[global:unfollow]]<!-- ELSE -->[[global:follow]]<!-- ENDIF isFollowing -->">
<span>
<span class="s1"></span>
<span class="s2"></span>
<span class="s3"></span>
</span>
</button>
<!-- ENDIF !isSelf -->
<!-- ENDIF loggedIn -->
</div>
<div class="container">
<div class="btn-group account-fab bottom-sheet">
<button type="button" class="persona-fab dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<i class="fa fa-ellipsis-v"></i>
</button>
<ul class="dropdown-menu dropdown-menu-end account-sub-links" role="menu">
<!-- IF loggedIn -->
<!-- IF !isSelf -->
<!-- IF !banned -->
<!-- IF canChat -->
<li class="<!-- IF !hasPrivateChat -->hidden<!-- ENDIF !hasPrivateChat -->">
<a class="dropdown-item" component="account/chat" href="#" role="menuitem">[[user:chat-with, {username}]]</a>
</li>
<li>
<a class="dropdown-item" component="account/new-chat" href="#" role="menuitem">[[user:new-chat-with, {username}]]</a>
</li>
<!-- ENDIF canChat -->
<li>
<a class="dropdown-item" component="account/flag" href="#" role="menuitem">[[user:flag-profile]]</a>
</li>
<li>
<a class="dropdown-item {{{ if ./isBlocked }}}hidden{{{ end }}}" component="account/block" href="#" role="menuitem">[[user:block-user]]</a>
</li>
<li>
<a class="dropdown-item {{{ if !./isBlocked }}}hidden{{{ end }}}" component="account/unblock" href="#" role="menuitem">[[user:unblock-user]]</a>
</li>
<li role="separator" class="dropdown-divider"></li>
<!-- ENDIF !banned -->
<!-- ENDIF !isSelf -->
<!-- ENDIF loggedIn -->
<li>
<a class="dropdown-item" href="{config.relative_path}/user/{userslug}" class="d-inline-block" id="profile" role="menuitem">[[user:profile]]</a>
</li>
<!-- IF canEdit -->
<li><a class="dropdown-item" href="{config.relative_path}/user/{userslug}/edit" role="menuitem">[[user:edit]]</a></li>
<li><a class="dropdown-item" href="{config.relative_path}/user/{userslug}/settings" role="menuitem">[[user:settings]]</a></li>
<!-- ENDIF canEdit -->
<!-- IF !isSelf -->
{{{ if (canBan || canMute) }}}
<li role="separator" class="dropdown-divider"></li>
<li class="dropdown-header">[[user:admin-actions-label]]</li>
{{{ end }}}
{{{ if canBan }}}
<li class="<!-- IF banned -->hide<!-- ENDIF banned -->">
<a class="dropdown-item" component="account/ban" href="#" role="menuitem">[[user:ban-account]]</a>
</li>
<li class="<!-- IF !banned -->hide<!-- ENDIF !banned -->">
<a class="dropdown-item" component="account/unban" href="#" role="menuitem">[[user:unban-account]]</a>
</li>
{{{ end }}}
{{{ if canMute }}}
<li class="<!-- IF muted -->hide<!-- ENDIF muted -->">
<a class="dropdown-item" component="account/mute" href="#" role="menuitem">[[user:mute-account]]</a>
</li>
<li class="<!-- IF !muted -->hide<!-- ENDIF !muted -->">
<a class="dropdown-item" component="account/unmute" href="#" role="menuitem">[[user:unmute-account]]</a>
</li>
{{{ end }}}
<!-- IF isAdmin -->
<li>
<a component="account/delete-account" href="#" class="dropdown-item" role="menuitem">[[user:delete-account-as-admin]]</a>
<a component="account/delete-content" href="#" class="dropdown-item" role="menuitem">[[user:delete-content]]</a>
<a component="account/delete-all" href="#" class="dropdown-item" role="menuitem">[[user:delete-all]]</a>
</li>
<!-- ENDIF isAdmin -->
<!-- ENDIF !isSelf -->
<li role="separator" class="dropdown-divider"></li>
<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/following" role="menuitem">[[user:following]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.following}">{formattedNumber(counts.following)}</span></a></li>
<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/followers" role="menuitem">[[user:followers]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.followers}">{formattedNumber(counts.followers)}</span></a></li>
<!-- IF canEdit -->
<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/blocks" role="menuitem">[[user:blocks]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.blocks}">{formattedNumber(counts.blocks)}</span></a></li>
<!-- ENDIF canEdit -->
<li role="separator" class="dropdown-divider"></li>
<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/topics" role="menuitem">[[global:topics]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.topics}">{formattedNumber(counts.topics)}</span></a></li>
<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/posts" role="menuitem">[[global:posts]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.posts}">{formattedNumber(counts.posts)}</span></a></li>
<!-- IF !reputation:disabled -->
<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/best" role="menuitem">[[global:best]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.best}">{formattedNumber(counts.best)}</span></a></li>
<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/controversial" role="menuitem">[[global:controversial]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.controversial}">{formattedNumber(counts.controversial)}</span></a></li>
<!-- ENDIF !reputation:disabled -->
<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/groups" role="menuitem">[[global:header.groups]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.groups}">{formattedNumber(counts.groups)}</span></a></li>
<!-- IF canEdit -->
<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/categories" role="menuitem">[[user:watched-categories]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.categoriesWatched}">{formattedNumber(counts.categoriesWatched)}</span></a></li>
{{{ if isSelf }}}
<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/tags" role="menuitem">
[[user:watched-tags]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.tagsWatched}">{formattedNumber(counts.tagsWatched)}</span></a></li>
{{{ end }}}
<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/bookmarks" role="menuitem">[[user:bookmarks]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.bookmarks}">{formattedNumber(counts.bookmarks)}</span></a></li>
<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/watched" role="menuitem">[[user:watched]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.watched}">{formattedNumber(counts.watched)}</span></a></li>
<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/ignored" role="menuitem">[[user:ignored]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.ignored}">{formattedNumber(counts.ignored)}</span></a></li>
<!-- IF !reputation:disabled -->
<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/upvoted" role="menuitem">[[global:upvoted]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.upvoted}">{formattedNumber(counts.upvoted)}</span></a></li>
<!-- IF !downvote:disabled -->
<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/downvoted" role="menuitem">[[global:downvoted]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.downvoted}">{formattedNumber(counts.downvoted)}</span></a></li>
<!-- ENDIF !downvote:disabled -->
<!-- ENDIF !reputation:disabled -->
<li><a class="dropdown-item d-flex justify-content-between align-items-center" href="{config.relative_path}/user/{userslug}/uploads" role="menuitem">[[global:uploads]] <span class="badge bg-secondary rounded-pill ms-2" title="{counts.uploaded}">{formattedNumber(counts.uploaded)}</span></a></li>
<!-- ENDIF canEdit -->
{{{each profile_links}}}
<!-- IF @first -->
<li role="separator" class="dropdown-divider"></li>
<!-- ENDIF @first -->
<li id="{profile_links.id}" class="plugin-link <!-- IF profile_links.public -->public<!-- ELSE -->private<!-- ENDIF profile_links.public -->"><a class="dropdown-item" href="{config.relative_path}/user/{userslug}/{profile_links.route}"><!-- IF ../icon --><i class="fa fa-fw {profile_links.icon}"></i> <!-- END -->{profile_links.name}</a></li>
{{{end}}}
</ul>
</div>
<!-- IF allowCoverPicture -->
<!-- IF canEdit -->
<div class="controls">
<span class="upload"><i class="fa fa-fw fa-4x fa-upload"></i></span>
<span class="resize"><i class="fa fa-fw fa-4x fa-arrows"></i></span>
<span class="remove"><i class="fa fa-fw fa-4x fa-times"></i></span>
</div>
<div class="save">[[groups:cover-save]] <i class="fa fa-fw fa-floppy-o"></i></div>
<div class="indicator">[[groups:cover-saving]] <i class="fa fa-fw fa-refresh fa-spin"></i></div>
<!-- ENDIF canEdit -->
<!-- ENDIF allowCoverPicture -->
</div>
</div>
<!-- IF sessions.length -->
<div class="row">
<div class="col-12 col-md-12">
<p class="lead">[[user:sessions.description]]</p>
<hr />
<ul class="list-group" component="user/sessions">
{{{each sessions}}}
<li class="list-group-item" data-uuid="{../uuid}">
<div class="float-end">
<!-- IF isSelfOrAdminOrGlobalModerator -->
<!-- IF !../current -->
<button class="btn btn-sm btn-outline-secondary" type="button" data-action="revokeSession">Revoke Session</button>
<!-- ENDIF !../current -->
<!-- ENDIF isSelfOrAdminOrGlobalModerator -->
{function.userAgentIcons}
<i class="fa fa-circle text-<!-- IF ../current -->success<!-- ELSE -->muted<!-- ENDIF ../current -->"></i>
</div>
{../browser} {../version} on {../platform}<br />
<small class="timeago text-muted" title="{../datetimeISO}"></small>
<ul>
<li><strong>[[global:ip-address]]</strong>: {../ip}</li>
</ul>
</li>
{{{end}}}
</ul>
</div>
</div>
<!-- ENDIF sessions.length -->
</div>