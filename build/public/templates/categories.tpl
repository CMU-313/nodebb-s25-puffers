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
{{{ each widgets.header }}}
{{widgets.header.html}}
{{{ end }}}
</div>
<div class="row">
<div class="{{{ if widgets.sidebar.length }}}col-lg-9 col-sm-12{{{ else }}}col-lg-12{{{ end }}}">
{{{ if pagination.pages.length }}}
<div><div component="category-selector" class="btn-group dropdown-left category-dropdown-container bottom-sheet">
<button type="button" class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<span component="category-selector-selected">
{{{ if (selectedCategory && !showCategorySelectLabel) }}}
<span class="category-item">
{buildCategoryIcon(selectedCategory, "24px", "rounded-circle")}
{selectedCategory.name}
</span>
{{{ else }}}
<span class="visible-sm-inline visible-md-inline visible-lg-inline">{{{ if selectCategoryLabel }}}{selectCategoryLabel}{{{ else }}}[[topic:thread-tools.select-category]]{{{ end }}}</span><span class="visible-xs-inline"><i class="fa fa-fw {{{ if selectCategoryIcon }}}{selectCategoryIcon}{{{ else }}}fa-list{{{ end }}}"></i></span>
{{{ end }}}</span> <span class="caret"></span>
</button>
<div component="category-selector-search" class="hidden position-absolute">
<input type="text" class="form-control" placeholder="[[search:type-to-search]]" autocomplete="off">
</div>
<ul component="category/list" class="dropdown-menu category-dropdown-menu" role="menu">
<li component="category/no-matches" role="presentation" class="category hidden">
<a class="dropdown-item" role="menuitem">[[search:no-matches]]</a>
</li>
{{{each categoryItems}}}
<li role="presentation" class="category {{{ if ../disabledClass }}}disabled {{{ end }}}" data-cid="{../cid}" data-name="{../name}" data-parent-cid="{../parentCid}">
<a class="dropdown-item {{{ if ./disabledClass }}}disabled {{{ end }}}" role="menuitem" href="#">{../level}
<span component="category-markup" style="{{{ if ../match }}}font-weight: bold;{{{end}}}">
<div class="category-item d-inline-block">
{{{ if ./icon }}}
{buildCategoryIcon(@value, "24px", "rounded-circle")}
{{{ end }}}
{./name}
</div>
</span>
</a>
</li>
{{{ end }}}
</ul>
</div></div>
{{{ else }}}
<h1 class="categories-title">[[pages:categories]]</h1>
{{{ end }}}
<ul class="categories" itemscope itemtype="http://www.schema.org/ItemList">
{{{ each categories }}}
<li component="categories/category" data-cid="{./cid}" data-numRecentReplies="1" class="row clearfix category-{./cid} {./unread-class}">
<meta itemprop="name" content="{../name}">
<div class="content col-12 <!-- IF config.hideCategoryLastPost -->col-md-10 col-sm-12<!-- ELSE -->col-md-7 col-sm-9<!-- ENDIF config.hideCategoryLastPost -->">
<div class="float-start">
{buildCategoryIcon(@value, "48px", "rounded-circle")}
</div>
<h2 class="title">
<!-- IF ../isSection -->
{../name}
<!-- ELSE -->
<!-- IF ../link -->
<a href="{../link}" itemprop="url">
<!-- ELSE -->
<a href="{config.relative_path}/category/{../slug}" itemprop="url">
<!-- ENDIF ../link -->
{../name}
</a>
<!-- ENDIF ../isSection -->
</h2>
<div>
<!-- IF ../descriptionParsed -->
<div class="description text-muted">
{../descriptionParsed}
</div>
<!-- ENDIF ../descriptionParsed -->
<!-- IF !config.hideSubCategories -->
{{{ if ../children.length }}}
<div class="category-children">
{{{ each ../children }}}
{{{ if !../isSection }}}
<span class="category-children-item">
{buildCategoryIcon(@value, "24px", "rounded-circle")}
{{{ if ../link }}}
<a href="{../link}">{../name}</a>
{{{ else }}}
<a href="{config.relative_path}/category/{../slug}">{../name}</a>
{{{ end }}}
</span>
{{{ end }}}
{{{ end }}}
</div>
{{{ end }}}
<!-- ENDIF !config.hideSubCategories -->
</div>
<span class="d-block d-sm-none float-end">
<!-- IF ../teaser.timestampISO -->
<a class="permalink" href="{../teaser.url}">
<small class="timeago" title="{../teaser.timestampISO}"></small>
</a>
<!-- ENDIF ../teaser.timestampISO -->
</span>
</div>
<!-- IF !./link -->
<div class="col-md-1 d-none d-md-block stats text-muted">
<span title="{./totalTopicCount}">{humanReadableNumber(./totalTopicCount)}</span><br />
<small>[[global:topics]]</small>
</div>
<div class="col-md-1 d-none d-md-block stats text-muted">
<span title="{./totalPostCount}">{humanReadableNumber(./totalPostCount)}</span><br />
<small>[[global:posts]]</small>
</div>
<!-- IF !config.hideCategoryLastPost -->
<div class="col-md-3 col-sm-3 teaser d-none d-sm-block" component="topic/teaser">
<div class="lastpost background-link-container" style="border-color: {../bgColor}">
{{{each ./posts}}}
<!-- IF @first -->
<div component="category/posts">
<a class="background-link" href="{config.relative_path}/topic/{../topic.slug}<!-- IF ../index -->/{../index}<!-- ENDIF ../index -->"></a>
<p>
<a href="{config.relative_path}/user/{../user.userslug}">{buildAvatar(posts.user, "24px", true)}</a>
<a class="permalink text-muted" href="{config.relative_path}/topic/{../topic.slug}<!-- IF ../index -->/{../index}<!-- ENDIF ../index -->">
<small class="timeago" title="{../timestampISO}"></small>
</a>
</p>
<div class="post-content">
{../content}
</div>
</div>
<!-- ENDIF @first -->
{{{end}}}
<!-- IF !../posts.length -->
<div component="category/posts">
<div class="post-content">
[[category:no-new-posts]]
</div>
</div>
<!-- ENDIF !../posts.length -->
</div>
</div>
<!-- ENDIF !config.hideCategoryLastPost -->
<!-- ENDIF !./link -->
</li>
{{{ end }}}
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
<div data-widget-area="sidebar" class="col-lg-3 col-sm-12 {{{ if !widgets.sidebar.length }}}hidden{{{ end }}}">
{{{ each widgets.sidebar }}}
{{widgets.sidebar.html}}
{{{ end }}}
</div>
</div>
<div data-widget-area="footer">
{{{ each widgets.footer }}}
{{widgets.footer.html}}
{{{ end }}}
</div>