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
<div class="row">
<h1 class="fs-2">{title}</h1>
<!-- IF privateUploads -->
<div class="alert alert-info text-center">[[uploads:private-uploads-info]]</div>
<!-- ELSE -->
<div class="alert alert-info text-center">[[uploads:public-uploads-info]]</div>
<!-- ENDIF privateUploads -->
<!-- IF !uploads.length -->
<div class="alert alert-warning text-center">[[uploads:no-uploads-found]]</div>
<!-- ENDIF !uploads.length -->
<div class="col-12">
<table class="table table-striped">
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
{{{each uploads}}}
<tr data-name="{uploads.name}">
<td>
<a href="{config.relative_path}{uploads.url}">{uploads.url}</a>
</td>
<td>
<div class="btn-group ">
<button class="btn btn-danger btn-sm" data-action="delete"><i class="fa fa-trash"></i></button>
</div>
</td>
</tr>
{{{end}}}
</tbody>
</table>
<nav component="pagination" class="pagination-container<!-- IF !pagination.pages.length --> hidden<!-- ENDIF !pagination.pages.length -->" aria-label="[[global:pagination]]">
<ul class="pagination hidden-xs justify-content-center">
<li class="page-item previous float-start<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
<a class="page-link" href="?{pagination.prev.qs}" data-page="{pagination.prev.page}" aria-label="[[global:pagination.previouspage]]"><i class="fa fa-chevron-left"></i> </a>
</li>
{{{each pagination.pages}}}
<!-- IF pagination.pages.separator -->
<li component="pagination/select-page" class="page-item page select-page">
<a class="page-link" href="#" aria-label="[[global:pagination.go-to-page]]"><i class="fa fa-ellipsis-h"></i></a>
</li>
<!-- ELSE -->
<li class="page-item page<!-- IF pagination.pages.active --> active<!-- ENDIF pagination.pages.active -->" >
<a class="page-link" href="?{pagination.pages.qs}" data-page="{pagination.pages.page}" aria-label="[[global:pagination.page-x, {./page}]]">{pagination.pages.page}</a>
</li>
<!-- ENDIF pagination.pages.separator -->
{{{end}}}
<li class="page-item next float-end<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
<a class="page-link" href="?{pagination.next.qs}" data-page="{pagination.next.page}" aria-label="[[global:pagination.nextpage]]"><i class="fa fa-chevron-right"></i></a>
</li>
</ul>
<ul class="pagination hidden-sm hidden-md hidden-lg justify-content-center">
<li class="page-item first<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
<a class="page-link" href="?{pagination.first.qs}" data-page="1" aria-label="[[global:pagination.firstpage]]"><i class="fa fa-fast-backward"></i> </a>
</li>
<li class="page-item previous<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
<a class="page-link" href="?{pagination.prev.qs}" data-page="{pagination.prev.page}" aria-label="[[global:pagination.previouspage]]"><i class="fa fa-chevron-left"></i> </a>
</li>
<li component="pagination/select-page" class="page-item page select-page">
<a class="page-link" href="#" aria-label="[[global:pagination.go-to-page]]">{pagination.currentPage} / {pagination.pageCount}</a>
</li>
<li class="page-item next<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
<a class="page-link" href="?{pagination.next.qs}" data-page="{pagination.next.page}" aria-label="[[global:pagination.nextpage]]"><i class="fa fa-chevron-right"></i></a>
</li>
<li class="page-item last<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
<a class="page-link" href="?{pagination.last.qs}" data-page="{pagination.pageCount}" aria-label="[[global:pagination.lastpage]]"><i class="fa fa-fast-forward"></i> </a>
</li>
</ul>
</nav>
</div>
</div>
</div>