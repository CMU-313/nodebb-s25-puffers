{{{ if isAdmin }}}
{{{ if !enabled }}}
<div class="alert alert-info">
<p>[[post-queue:enabling-help, {config.relative_path}/admin/settings/post#post-queue]]</p>
</div>
{{{ end }}}
{{{ else }}}
<div>
<p class="lead">[[post-queue:public-intro]]</p>
<p>[[post-queue:public-description]]</p>
<hr />
</div>
{{{ end }}}
{{{ if (!singlePost && posts.length) }}}
<div class="btn-toolbar justify-content-end">
<div class="me-2">
<div component="category/dropdown" class="btn-group dropdown-right category-dropdown-container bottom-sheet">
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
<div class="btn-group bottom-sheet" component="post-queue/bulk-actions">
<button type="button" class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" autocomplete="off" aria-haspopup="true" aria-expanded="false">
<i class="fa fa-clone"></i> [[post-queue:bulk-actions]] <span class="caret"></span>
</button>
<ul class="dropdown-menu dropdown-menu-end" role="menu">
{{{ if canAccept }}}
<li><a class="dropdown-item" href="#" data-action="accept-all" role="menuitem">[[post-queue:accept-all]]</a></li>
<li><a class="dropdown-item" href="#" data-action="accept-selected" role="menuitem">[[post-queue:accept-selected]]</a></li>
<li class="dropdown-divider"></li>
<li><a class="dropdown-item" href="#" data-action="reject-all" role="menuitem">[[post-queue:reject-all]]</a></li>
<li><a class="dropdown-item" href="#" data-action="reject-selected" role="menuitem">[[post-queue:reject-selected]]</a></li>
{{{ else }}}
<li><a class="dropdown-item" href="#" data-action="reject-all">[[post-queue:remove-all]]</a></li>
<li><a class="dropdown-item" href="#" data-action="reject-selected" role="menuitem">[[post-queue:remove-selected]]</a></li>
{{{ end }}}
</ul>
</div>
</div>
<hr/>
{{{ end }}}
<div class="row">
<div class="col-12">
<div class="post-queue preventSlideout posts-list">
{{{ if !posts.length }}}
{{{ if !singlePost }}}
<div class="mx-auto">
<div class="d-flex flex-column gap-3 justify-content-center text-center">
<div class="mx-auto p-4 bg-light border rounded">
<i class="text-secondary fa fa-fw fa-4x fa-seedling"></i>
</div>
[[post-queue:no-queued-posts]]
</div>
</div>
{{{ else }}}
<div class="alert alert-info d-flex align-items-md-center d-flex flex-column flex-md-row">
<p class="mb-md-0">[[post-queue:no-single-post]]</p>
<div class="d-grid ms-md-auto">
<a class="btn btn-sm btn-primary flex-shrink text-nowrap" href=".">[[post-queue:back-to-list]]</a>
</div>
</div>
{{{ end }}}
{{{ end }}}
{{{ each posts }}}
<div class="card mb-3" data-id="{./id}"data-uid="{./user.uid}">
<div class="card-header">
{{{ if !singlePost }}}
<input type="checkbox" class="form-check-input" autocomplete="off" />
{{{ end }}}
<strong>{{{ if posts.data.tid }}}[[post-queue:reply]]{{{ else }}}[[post-queue:topic]]{{{ end }}}</strong>
<span class="timeago float-end" title={posts.data.timestampISO}></span>
</div>
<div class="card-body">
<div class="row">
<div class="col-lg-2 col-12">
<strong>[[post-queue:user]]</strong>
<div>
{{{ if posts.user.userslug}}}
<a href="{config.relative_path}/uid/{posts.user.uid}">{buildAvatar(posts.user, "24px", true, "not-responsive")} {posts.user.username}</a>
{{{ else }}}
{posts.user.username}
{{{ end }}}
</div>
</div>
<div class="col-lg-3 col-12">
<strong>[[post-queue:category]]{{{ if posts.data.cid}}} <i class="fa fa-fw fa-edit" data-bs-toggle="tooltip" title="[[post-queue:category-editable]]"></i>{{{ end }}}</strong>
<div class="topic-category" {{{if posts.data.cid}}}data-editable="editable"{{{end}}}">
<a href="{config.relative_path}/category/{posts.category.slug}">
<div class="category-item d-inline-block">
{buildCategoryIcon(./category, "24px", "rounded-circle")}
{posts.category.name}
</div>
</a>
</div>
</div>
<div class="col-lg-7 col-12">
<strong>{{{ if posts.data.tid }}}[[post-queue:topic]]{{{ else }}}[[post-queue:title]] <i class="fa fa-fw fa-edit" data-bs-toggle="tooltip" title="[[post-queue:title-editable]]"></i>{{{ end }}}</strong>
<div class="topic-title text-break">
{{{ if posts.data.tid }}}
<a href="{config.relative_path}/topic/{posts.data.tid}">{posts.topic.title}</a>
{{{ end }}}
<span data-action="editTitle" class="title-text">{posts.data.title}</span>
</div>
{{{if !posts.data.tid}}}
<div class="topic-title-editable hidden">
<input class="form-control" type="text" value="{posts.data.title}"/>
</div>
{{{end}}}
</div>
</div>
<hr/>
<div>
<strong>[[post-queue:content]] <i class="fa fa-fw fa-edit" data-bs-toggle="tooltip" title="[[post-queue:content-editable]]"></i></strong>
<div data-action="editContent" class="post-content text-break">{posts.data.content}</div>
<div class="post-content-editable hidden">
<textarea class="form-control w-100" style="height:300px;">{posts.data.rawContent}</textarea>
</div>
</div>
</div>
<div class="card-footer text-end">
<div>
{{{ if ./canAccept }}}
<button class="btn btn-danger btn-sm" data-action="reject"><i class="fa fa-fw fa-times"></i> [[post-queue:reject]]</button>
<button class="btn btn-info btn-sm" data-action="notify"><i class="fa fa-fw fa-bell-o"></i> [[post-queue:notify]]</button>
<button class="btn btn-success btn-sm" data-action="accept"><i class="fa fa-fw fa-check"></i> [[post-queue:accept]] </button>
{{{ else }}}
<button class="btn btn-danger btn-sm" data-action="reject"><i class="fa fa-fw fa-times"></i> [[post-queue:remove]]</button>
{{{ end }}}
</div>
</div>
</div>
{{{ end }}}
</div>
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