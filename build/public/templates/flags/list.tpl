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
<div class="row">
<div class="col-sm-4 col-md-3">
<div class="text-center">
<div class="card mb-3">
<div class="card-body collapse" id="flags-daily-wrapper" aria-expanded="false">
<div class="position-relative" style="aspect-ratio: 2; max-height: initial;">
<canvas id="flags:daily" style="max-height: initial;"></canvas>
</div>
</div>
<div class="card-footer" data-bs-toggle="collapse" data-bs-target="#flags-daily-wrapper" aria-controls="#flags-daily-wrapper"><small>[[flags:graph-label]]</small>&nbsp;<i class="fa fa-sort"></i></div>
</div>
</div>
<div class="card mb-3">
<div class="card-header">
[[flags:quick-filters]]
</div>
<div class="card-body">
<ul>
<li><a href="{config.relative_path}/flags?quick=mine">[[flags:filter-quick-mine]]</a></li>
</ul>
</div>
</div>
<div class="card mb-3">
<div class="card-header">
[[flags:filters]]
</div>
<div class="card-body">
<form role="form" component="flags/filters">
<fieldset>
<div class="mb-3">
<label class="form-label" for="filter-cid">[[flags:filter-cid]]</label>
<div class="input-group">
<div component="category/dropdown" class="btn-group dropdown-left category-dropdown-container bottom-sheet">
<button type="button" class="btn btn-outline-secondary d-flex gap-2 align-items-baseline dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
{{{ if selectedCategory }}}
<span class="category-item">
{buildCategoryIcon(selectedCategory, "20px", "rounded-circle")}
<span class="visible-md-inline visible-lg-inline">{selectedCategory.name}</span>
</span>
{{{ else }}}
<i class="fa fa-fw fa-list"></i>
<span class="visible-md-inline visible-lg-inline">[[unread:all-categories]]</span>{{{ end }}}
</button>
<div component="category-selector-search" class="hidden position-absolute">
<input type="text" class="form-control" placeholder="[[search:type-to-search]]" autocomplete="off">
</div>
<ul component="category/list" class="dropdown-menu category-dropdown-menu" role="menu">
<li role="presentation" class="category" data-cid="all">
<a class="dropdown-item" role="menuitem" href="{{{ if allCategoriesUrl }}}{config.relative_path}/{allCategoriesUrl}{{{ else }}}#{{{ end }}}"><i component="category/select/icon" class="fa fa-fw fa-check {{{if selectedCategory}}}invisible{{{end}}}"></i> [[unread:all-categories]]</a>
</li>
{{{each categoryItems}}}
<li role="presentation" class="category {{{ if ../disabledClass }}}disabled{{{ end }}}" data-cid="{../cid}" data-parent-cid="{../parentCid}" data-name="{../name}">
<a class="dropdown-item" role="menuitem" href="#">{../level}<i component="category/select/icon" class="fa fa-fw fa-check {{{ if !../selected }}}invisible{{{ end }}}"></i>
<span component="category-markup" style="{{{ if ../match }}}font-weight: bold;{{{end}}}">
<div class="category-item d-inline-block">
{{{ if ./icon}}}
{buildCategoryIcon(@value, "24px", "rounded-circle")}
{{{ end }}}
{./name}
</div>
</span>
</a>
</li>
{{{end}}}
</ul>
</div>
</div>
</div>
<div class="mb-3">
<label class="form-label" for="sort">[[flags:sort]]</label>
<select class="form-control" id="sort" name="sort">
<optgroup label="[[flags:sort-all]]">
<option value="newest">[[flags:sort-newest]]</option>
<option value="oldest">[[flags:sort-oldest]]</option>
<option value="reports">[[flags:sort-reports]]</option>
</optgroup>
<optgroup label="[[flags:sort-posts-only]]">
<option value="downvotes">[[flags:sort-downvotes]]</option>
<option value="upvotes">[[flags:sort-upvotes]]</option>
<option value="replies">[[flags:sort-replies]]</option>
</optgroup>
</select>
</div>
<div class="mb-3">
<label class="form-label" for="filter-state">[[flags:filter-state]]</label>
<select class="form-control" id="filter-state" name="state">
<option value="">[[flags:state-all]]</option>
<option value="open">[[flags:state-open]]</option>
<option value="wip">[[flags:state-wip]]</option>
<option value="resolved">[[flags:state-resolved]]</option>
<option value="rejected">[[flags:state-rejected]]</option>
</select>
</div>
<div class="mb-3">
<label class="form-label" for="filter-type">[[flags:filter-type]]</label>
<select class="form-control" id="filter-type" name="type">
<option value="">[[flags:filter-type-all]]</option>
<option value="post">[[flags:filter-type-post]]</option>
<option value="user">[[flags:filter-type-user]]</option>
</select>
</div>
</fieldset>
<fieldset class="collapse{{{ if expanded }}} show{{{ end }}}" id="more-filters" aria-expanded="{expanded}">
<div class="mb-3">
<label class="form-label" for="filter-assignee">[[flags:filter-assignee]]</label>
<div component="flags/filter/assignee" class="dropdown" data-filter-name="assignee">
<a component="user/filter/button" class="filter-btn btn btn-sm border {{{ if filters.assignee }}}btn-primary{{{ else }}}btn-light{{{ end }}} dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
<span class="filter-label">[[flags:filter-assignee]]</span>
<span class="caret"></span>
</a>
<ul class="dropdown-menu" style="width: 350px;" role="menu">
<li class="px-3 py-1 d-flex flex-column gap-2">
<input type="text" class="form-control" component="user/filter/search" placeholder="[[search:type-a-username]]">
<div component="user/filter/selected" class="d-flex flex-wrap gap-2">
{{{ each selected.assignee }}}
<div class="d-flex px-2 py-1 rounded-1 text-bg-primary gap-2 align-items-center text-sm">
{buildAvatar(@value, "16px", true)} {./username}
<button type="button" component="user/filter/delete" data-uid="{./uid}" class="btn btn-primary btn-sm py-0"><i class="fa fa-times fa-xs"></i></button>
</div>
{{{ end }}}
</div>
<hr/>
<div component="user/filter/results" class="d-flex flex-wrap gap-2">
{{{ each userFilterResults }}}
<button type="button" class="btn btn-light btn-sm border" data-uid="{./uid}" data-username="{./username}">{buildAvatar(@value, "16px", true)} {./username}</button>
{{{ end }}}
</div>
</li>
</ul>
</div>
</div>
<div class="mb-3">
<label class="form-label" for="filter-targetUid">[[flags:filter-targetUid]]</label>
<div component="flags/filter/targetUid" class="dropdown" data-filter-name="targetUid">
<a component="user/filter/button" class="filter-btn btn btn-sm border {{{ if filters.targetUid }}}btn-primary{{{ else }}}btn-light{{{ end }}} dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
<span class="filter-label">[[flags:filter-targetUid]]</span>
<span class="caret"></span>
</a>
<ul class="dropdown-menu" style="width: 350px;" role="menu">
<li class="px-3 py-1 d-flex flex-column gap-2">
<input type="text" class="form-control" component="user/filter/search" placeholder="[[search:type-a-username]]">
<div component="user/filter/selected" class="d-flex flex-wrap gap-2">
{{{ each selected.targetUid }}}
<div class="d-flex px-2 py-1 rounded-1 text-bg-primary gap-2 align-items-center text-sm">
{buildAvatar(@value, "16px", true)} {./username}
<button type="button" component="user/filter/delete" data-uid="{./uid}" class="btn btn-primary btn-sm py-0"><i class="fa fa-times fa-xs"></i></button>
</div>
{{{ end }}}
</div>
<hr/>
<div component="user/filter/results" class="d-flex flex-wrap gap-2">
{{{ each userFilterResults }}}
<button type="button" class="btn btn-light btn-sm border" data-uid="{./uid}" data-username="{./username}">{buildAvatar(@value, "16px", true)} {./username}</button>
{{{ end }}}
</div>
</li>
</ul>
</div>
</div>
<div class="mb-3">
<label class="form-label" for="filter-reporterId">[[flags:filter-reporterId]]</label>
<div component="flags/filter/reporterId" class="dropdown" data-filter-name="reporterId">
<a component="user/filter/button" class="filter-btn btn btn-sm border {{{ if filters.reporterId }}}btn-primary{{{ else }}}btn-light{{{ end }}} dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
<span class="filter-label">[[flags:filter-reporterId]]</span>
<span class="caret"></span>
</a>
<ul class="dropdown-menu" style="width: 350px;" role="menu">
<li class="px-3 py-1 d-flex flex-column gap-2">
<input type="text" class="form-control" component="user/filter/search" placeholder="[[search:type-a-username]]">
<div component="user/filter/selected" class="d-flex flex-wrap gap-2">
{{{ each selected.reporterId }}}
<div class="d-flex px-2 py-1 rounded-1 text-bg-primary gap-2 align-items-center text-sm">
{buildAvatar(@value, "16px", true)} {./username}
<button type="button" component="user/filter/delete" data-uid="{./uid}" class="btn btn-primary btn-sm py-0"><i class="fa fa-times fa-xs"></i></button>
</div>
{{{ end }}}
</div>
<hr/>
<div component="user/filter/results" class="d-flex flex-wrap gap-2">
{{{ each userFilterResults }}}
<button type="button" class="btn btn-light btn-sm border" data-uid="{./uid}" data-username="{./username}">{buildAvatar(@value, "16px", true)} {./username}</button>
{{{ end }}}
</div>
</li>
</ul>
</div>
</div>
</fieldset>
<div class="d-grid gap-2">
{{{ if expanded }}}
<button type="button" class="btn btn-link" data-bs-toggle="collapse" data-bs-target="#more-filters" aria-controls="#more-filters" data-text-variant="[[flags:more-filters]] ">[[flags:fewer-filters]]&nbsp;<i class="fa fa-sort"></i></button>
{{{ else }}}
<button type="button" class="btn btn-link" data-bs-toggle="collapse" data-bs-target="#more-filters" aria-controls="#more-filters" data-text-variant="[[flags:fewer-filters]] ">[[flags:more-filters]]&nbsp;<i class="fa fa-sort"></i></button>
{{{ end }}}
<button type="button" id="apply-filters" class="btn btn-primary">[[flags:apply-filters]]</button>
</div>
</form>
</div>
</div>
</div>
<div class="col-sm-8 col-md-9">
<!-- IF hasFilter -->
<div class="alert alert-warning">
<p class="float-end">
<a href="{config.relative_path}/flags">[[flags:filter-reset]]</a>
</p>
[[flags:filter-active]]
</div>
<!-- ENDIF hasFilter -->
<div class="btn-group float-end" component="flags/bulk-actions">
<button type="button" class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" autocomplete="off" aria-haspopup="true" aria-expanded="false" disabled="disabled">
<i class="fa fa-clone"></i> [[flags:bulk-actions]] <span class="caret"></span>
</button>
<ul class="dropdown-menu" role="menu">
<li><a href="#" class="dropdown-item" data-action="bulk-assign" role="menuitem">[[flags:assign-to-me]]</a></li>
<li><a href="#" class="dropdown-item" data-action="bulk-mark-resolved" role="menuitem">[[flags:bulk-resolve]]</a></li>
</ul>
</div>
<table class="table table-striped table-hover" component="flags/list">
<thead>
<tr>
<th>
<input type="checkbox" data-action="toggle-all" autocomplete="off" />
</th>
<th></th>
<th><span class="hidden-xs">[[flags:reports]] </span><i class="fa fa-user-plus"></i></th>
<th><span class="hidden-xs">[[flags:first-reported]] </span><i class="fa fa-clock-o"></i></th>
<th>[[flags:state]]</th>
</tr>
</thead>
<tbody>
<!-- IF !flags.length -->
<tr>
<td colspan="5">
<div class="alert alert-success text-center">
[[flags:no-flags]]
</div>
</td>
</tr>
<!-- ENDIF !flags.length -->
{{{each flags}}}
<tr data-flag-id="{../flagId}">
<td>
<input type="checkbox" autocomplete="off" />
</td>
<td>
<a href="{config.relative_path}/flags/{../flagId}">
<strong>{../target_readable}</strong>
</a>
</td>
<td>
{./heat}
</td>
<td><span class="timeago" title="{../datetimeISO}"></span></td>
<td><span class="badge bg-{../labelClass}">[[flags:state-{../state}]]</span></td>
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