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
<div class="users">
<div class="row mb-3">
<div class="col-lg-6">
<ul component="user/list/menu" class="nav nav-pills">
<li class="nav-item">
<a class="nav-link" href="{config.relative_path}/users?section=online">[[global:online]]</a>
</li>
<li class="nav-item">
<a class="nav-link" href="{config.relative_path}/users?section=sort-posts">[[users:top-posters]]</a>
</li>
{{{ if !reputation:disabled }}}
<li class="nav-item">
<a class="nav-link" href="{config.relative_path}/users?section=sort-reputation">[[users:most-reputation]]</a>
</li>
{{{ end }}}
{{{ if isAdminOrGlobalMod }}}
<li class="nav-item">
<a class="nav-link" href="{config.relative_path}/users?section=flagged">[[users:most-flags]]</a>
</li>
<li class="nav-item">
<a class="nav-link" href="{config.relative_path}/users?section=banned">[[user:banned]]</a>
</li>
{{{ end }}}
</ul>
</div>
<div class="col-3 text-end">
<!-- IF showInviteButton -->
<button component="user/invite" class="btn btn-success"><i class="fa fa-users"></i> [[users:invite]]</button>
<!-- ENDIF showInviteButton -->
</div>
<!-- IF displayUserSearch -->
<div class="col-lg-3 col-9">
<div class="search">
<div class="input-group">
<input class="form-control" id="search-user" type="text" placeholder="[[global:search]]"/>
<button class="btn btn-primary" type="button">
<i component="user/search/icon" class="fa fa-search"></i>
</button>
</div>
</div>
</div>
<!-- ENDIF displayUserSearch -->
</div>
<ul id="users-container" class="users-container list-unstyled d-flex flex-wrap gap-2">
{{{each users}}}
<li class="users-box registered-user text-center pb-3" data-uid="{users.uid}" style="width: 102px;">
<a href="{config.relative_path}/user/{users.userslug}">{buildAvatar(users, "64px", true)}</a>
<div class="user-info">
<div class="text-nowrap text-truncate">
<span>
<i component="user/status" class="fa fa-circle status {users.status}" title="[[global:{users.status}]]"></i>
<a  href="{config.relative_path}/user/{users.userslug}">{users.username}</a>
</span>
</div>
<!-- IF section_online -->
<div class="lastonline">
<span class="timeago" title="{users.lastonlineISO}"></span>
</div>
<!-- ENDIF section_online -->
<!-- IF section_joindate -->
<div class="joindate">
<span class="timeago" title="{users.joindateISO}"></span>
</div>
<!-- ENDIF section_joindate -->
<!-- IF section_sort-reputation -->
<div class="reputation">
<i class="fa fa-star"></i>
<span>{formattedNumber(users.reputation)}</span>
</div>
<!-- ENDIF section_sort-reputation -->
<!-- IF section_sort-posts -->
<div class="post-count">
<i class="fa fa-pencil"></i>
<span>{formattedNumber(users.postcount)}</span>
</div>
<!-- ENDIF section_sort-posts -->
<!-- IF section_flagged -->
<div class="flag-count">
<i class="fa fa-flag"></i>
<span><a href="{config.relative_path}/flags?targetUid={users.uid}">{users.flags}</a></span>
</div>
<!-- ENDIF section_flagged -->
</div>
</li>
{{{end}}}
<!-- IF anonymousUserCount -->
<li class="users-box anon-user text-center pb-3" style="width: 102px;">
<span class="avatar avatar-rounded text-bg-secondary" component="avatar/icon" style="--avatar-size: 64px;">G</span>
<br/>
<div class="user-info">
<span id="online_anon_count">{anonymousUserCount}</span>
<span>[[global:guests]]</span>
</div>
</li>
<!-- ENDIF anonymousUserCount -->
</ul>
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