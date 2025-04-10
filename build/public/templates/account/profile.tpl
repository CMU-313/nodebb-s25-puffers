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
<div class="profile row">
<h1 class="fullname"><!-- IF fullname -->{fullname}<!-- ELSE -->{username}<!-- ENDIF fullname --></h1>
<div class="d-flex gap-2 justify-content-center mb-2" component="user/badges"></div>
<h2 class="username"><!-- IF !banned -->@{username}<!-- ELSE -->[[user:banned]]<!-- ENDIF !banned --></h2>
<!-- IF isAdminOrGlobalModeratorOrModerator -->
<!-- IF banned -->
<div class="text-center">
<!-- IF banned_until -->
[[user:info.banned-until, {banned_until_readable}]]
<!-- ELSE -->
[[user:info.banned-permanently]]
<!-- ENDIF banned_until -->
</div>
<!-- ENDIF banned -->
<!-- ENDIF isAdminOrGlobalModeratorOrModerator -->
<!-- IF selectedGroup.length -->
<div class="text-center">
{{{each selectedGroup}}}
<!-- IF selectedGroup.slug -->
<a href="{config.relative_path}/groups/{./slug}" class="badge rounded-1 text-uppercase text-truncate" style="max-width: 150px;color:{./textColor};background-color: {./labelColor};"><i class="fa {{{ if ./icon }}}{./icon}{{{ if ./userTitle}}} me-1{{{ end }}}{{{else}}}hidden{{{ end }}}"></i><span class="badge-text">{{{ if ./userTitle }}}{./userTitle}{{{ end }}}</span></a>
<!-- ENDIF selectedGroup.slug -->
{{{end}}}
</div>
<br/>
<!-- ENDIF selectedGroup.length -->
<!-- IF aboutme -->
<span component="aboutme" class="text-center aboutme">{aboutmeParsed}</span>
<!-- ENDIF aboutme -->
<div class="account-stats">
<!-- IF !reputation:disabled -->
<div class="stat">
<div title="{reputation}">{humanReadableNumber(reputation)}</div>
<span class="stat-label">[[global:reputation]]</span>
</div>
<!-- ENDIF !reputation:disabled -->
<div class="stat">
<div title="{profileviews}">{humanReadableNumber(profileviews)}</div>
<span class="stat-label">[[user:profile-views]]</span>
</div>
<div class="stat">
<div><a title="{counts.posts}" href="{config.relative_path}/user/{userslug}/posts">{humanReadableNumber(counts.posts)}</a></div>
<span class="stat-label">[[global:posts]]</span>
</div>
<div class="stat">
<div><a title="{counts.followers}" href="{config.relative_path}/user/{userslug}/followers">{humanReadableNumber(counts.followers)}</a></div>
<span class="stat-label">[[user:followers]]</span>
</div>
<div class="stat">
<div><a title="{counts.following}" href="{config.relative_path}/user/{userslug}/following">{humanReadableNumber(counts.following)}</a></div>
<span class="stat-label">[[user:following]]</span>
</div>
</div>
<div class="text-center profile-meta">
<span>[[user:joined]]</span>
<strong class="timeago" title="{joindateISO}"></strong>
<span>[[user:lastonline]]</span>
<strong class="timeago" title="{lastonlineISO}"></strong><br />
<!-- IF email -->
<span>[[user:email]]</span>
<strong><i class="fa fa-eye-slash {emailClass}" title="[[user:email-hidden]]"></i> {email}</strong>
<!-- ENDIF email -->
<!-- IF websiteName -->
<span>[[user:website]]</span>
<strong><a href="{websiteLink}" rel="nofollow noreferrer me">{websiteName}</a></strong>
<!-- ENDIF websiteName -->
<!-- IF location -->
<span>[[user:location]]</span>
<strong>{location}</strong>
<!-- ENDIF location -->
<!-- IF age -->
<span>[[user:age]]</span>
<strong>{age}</strong>
<!-- ENDIF age -->
</div>
</div>
<hr />
<div class="row">
<div class="col-12 account-block hidden">
<div class="account-picture-block text-center">
<span>
<span class="account-username"> {username}</span>
</span>
<!-- IF !isSelf -->
<a component="account/unfollow" href="#" class="btn btn-outline-secondary{{{ if !isFollowing }}} hide{{{ end }}}">[[user:unfollow]]</a>
<a component="account/follow" href="#" class="btn btn-primary{{{ if isFollowing }}} hide{{{ end }}}">[[user:follow]]</a>
<!-- ENDIF !isSelf -->
</div>
</div>
</div>
<!-- IF groups.length -->
<div class="row">
<div class="col-12 hidden">
{{{each groups}}}
<a href="{config.relative_path}/groups/{groups.slug}"><span class="label group-label inline-block" style="background-color: {groups.labelColor};"><!-- IF groups.icon --><i class="fa {groups.icon}"></i> <!-- ENDIF groups.icon -->{groups.userTitle}</span></a>
{{{end}}}
</div>
</div>
<!-- ENDIF groups.length -->
<!-- IF ips.length -->
<div class="row">
<div class="col-12 hidden">
<div class="card">
<h5 class="card-header">
[[global:recentips]]
</h5>
<div class="card-body">
{{{each ips}}}
<div>{ips}</div>
{{{end}}}
</div>
</div>
</div>
</div>
<!-- ENDIF ips.length -->
<div class="row">
{{{ if bestPosts.length }}}
<div class="col-lg-12 col-12">
<h1>[[pages:account/best, {username}]]</h1>
<div class="col-12">
<ul component="posts" class="posts-list list-unstyled">
{{{each bestPosts}}}
<li component="post" class="posts-list-item row<!-- IF ../deleted --> deleted<!-- ELSE --><!-- IF ../topic.deleted --> deleted<!-- ENDIF --><!-- ENDIF -->{{{ if ../topic.scheduled }}} scheduled{{{ end }}}" data-pid="{../pid}" data-uid="{../uid}">
<div class="col-lg-11 col-sm-10 col-9 post-body">
<a class="topic-title" href="{config.relative_path}/post/{../pid}">
<!-- IF !../isMainPost -->RE: <!-- ENDIF -->{../topic.title}
</a>
<div component="post/content" class="content">
{../content}
</div>
<small class="topic-category"><a href="{config.relative_path}/category/{../category.slug}">[[global:posted-in, {../category.name}]]</a></small>
{{{ if ../isMainPost }}}
{{{ if ../topic.tags.length }}}
<span class="tag-list">
{{{ each ../topic.tags }}}
<a href="{config.relative_path}/tags/{topic.tags.valueEncoded}"><span class="tag tag-item tag-class-{topic.tags.class}">{topic.tags.valueEscaped}</span></a>
{{{ end }}}
</span>
{{{ end }}}
{{{ end }}}
<div class="post-info">
<a href="{config.relative_path}/user/{../user.userslug}">{buildAvatar(../user, "28px", true, "user-img not-responsive")}</a>
<div class="post-author">
<a href="{config.relative_path}/user/{../user.userslug}">{../user.displayname}</a><br />
<span class="timeago" title="{../timestampISO}"></span>
</div>
</div>
</div>
</li>
{{{end}}}
</ul>
</div>
</div>
{{{ end }}}
{{{ if latestPosts.length}}}
<div class="col-lg-12 col-12">
<h1>[[pages:account/latest-posts, {username}]]</h1>
<div class="col-12">
<ul component="posts" class="posts-list list-unstyled">
{{{each latestPosts}}}
<li component="post" class="posts-list-item row<!-- IF ../deleted --> deleted<!-- ELSE --><!-- IF ../topic.deleted --> deleted<!-- ENDIF --><!-- ENDIF -->{{{ if ../topic.scheduled }}} scheduled{{{ end }}}" data-pid="{../pid}" data-uid="{../uid}">
<div class="col-lg-11 col-sm-10 col-9 post-body">
<a class="topic-title" href="{config.relative_path}/post/{../pid}">
<!-- IF !../isMainPost -->RE: <!-- ENDIF -->{../topic.title}
</a>
<div component="post/content" class="content">
{../content}
</div>
<small class="topic-category"><a href="{config.relative_path}/category/{../category.slug}">[[global:posted-in, {../category.name}]]</a></small>
{{{ if ../isMainPost }}}
{{{ if ../topic.tags.length }}}
<span class="tag-list">
{{{ each ../topic.tags }}}
<a href="{config.relative_path}/tags/{topic.tags.valueEncoded}"><span class="tag tag-item tag-class-{topic.tags.class}">{topic.tags.valueEscaped}</span></a>
{{{ end }}}
</span>
{{{ end }}}
{{{ end }}}
<div class="post-info">
<a href="{config.relative_path}/user/{../user.userslug}">{buildAvatar(../user, "28px", true, "user-img not-responsive")}</a>
<div class="post-author">
<a href="{config.relative_path}/user/{../user.userslug}">{../user.displayname}</a><br />
<span class="timeago" title="{../timestampISO}"></span>
</div>
</div>
</div>
</li>
{{{end}}}
</ul>
</div>
</div>
{{{ end }}}
</div>
<div id="user-action-alert" class="alert alert-success hide"></div>
</div>