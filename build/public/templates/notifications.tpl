<div class="notifications">
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
<div class="btn-toolbar justify-content-end" role="toolbar">
<div class="btn-group me-2">
<button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
{{{ if selectedFilter }}}{selectedFilter.name}{{{ end}}} <span class="caret"></span>
</button>
<ul class="dropdown-menu dropdown-menu-end" role="menu">
{{{ each filters }}}
{{{ if filters.separator }}}
<li role="separator" class="dropdown-divider"></li>
{{{ else }}}
<li role="presentation" class="category">
<a class="dropdown-item" role="menuitem" href="{config.relative_path}/notifications?filter={filters.filter}"><i class="fa fa-fw {{{ if filters.selected }}}fa-check{{{ end }}}"></i> {filters.name}</a>
</li>
{{{ end }}}
{{{ end }}}
</ul>
</div>
<div class="btn-group">
<button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<i class="fa fa-eye"></i>
<span class="caret"></span>
</button>
<ul class="dropdown-menu dropdown-menu-end" role="menu" aria-labelledby="dropdownMenu1">
<li role="presentation"><a class="dropdown-item" role="menuitem" href="#" component="notifications/mark_all">[[notifications:mark-all-read]]</a></li>
</ul>
</div>
</div>
<hr />
<div class="alert alert-info {{{ if notifications.length }}}hidden{{{ end }}}">
[[notifications:no-notifs]]
</div>
<ul class="notifications-list list-unstyled" data-nextstart="{nextStart}">
{{{each notifications}}}
<li data-nid="{notifications.nid}" class="{notifications.readClass} {{{ if !./read}}}text-bg-warning{{{ end }}} d-flex pointer border p-3 mb-2" component="notifications/item">
<div class="me-2">
{{{ if notifications.from }}}
{buildAvatar(notifications.user, "24px", true)}
{{{ else }}}
{{{ if notifications.image }}}
<img width="24" height="24" src="{notifications.image}" />
{{{ end }}}
{{{ end }}}
</div>
<div>
<p class="mb-1">
<a class="text-reset" component="notifications/item/link" href="{notifications.path}">{notifications.bodyShort}</a>
</p>
<p class="timestamp">
<span class="timeago small text-reset" title="{notifications.datetimeISO}"></span>
</p>
</div>
</li>
{{{end}}}
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