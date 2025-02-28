<div id="results" class="search-results col-md-12" data-search-query="{search_query}">
{{{ if matchCount }}}
<div class="alert alert-info">[[search:results-matching, {matchCount}, {search_query}, {time}]] </div>
{{{ else }}}
{{{ if search_query }}}
<div class="alert alert-warning">[[search:no-matches]]</div>
{{{ end }}}
{{{ end }}}
{{{each posts}}}
<div class="topic-row card clearfix mb-3">
<div class="card-body">
<div>
<a href="{config.relative_path}/user/{./user.userslug}">{buildAvatar(./user, "24px", true)}</a>
<span class="search-result-text search-result-title"><a href="{config.relative_path}/post/{posts.pid}">{./topic.title}</a></span>
</div>
{{{ if showAsPosts }}}
<div class="search-result-text">
{./content}
<p class="fade-out"></p>
</div>
{{{ end }}}
<small class="post-info float-end">
<a href="{config.relative_path}/category/{./category.slug}">
<div class="category-item d-inline-block">
{buildCategoryIcon(./category, "24px", "rounded-circle")}
{./category.name}
</div>
</a> &bull;
<span class="timeago" title="{./timestampISO}"></span>
</small>
</div>
</div>
{{{end}}}
{{{ if users.length }}}
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
{{{ end }}}
{{{ if tags.length }}}
{{{each tags}}}
<h5 class="float-start tag-container me-4 mb-4 fw-bold">
<a href="{config.relative_path}/tags/{tags.valueEncoded}" data-tag="{tags.valueEscaped}"><span class="tag-item text-muted text-uppercase text-nowrap tag-class-{tags.class} me-2" data-tag="{tags.valueEscaped}">{tags.valueEscaped}</span><span class="tag-topic-count text-primary text-nowrap" title="{tags.score}">{formattedNumber(tags.score)}</span></a>
</h5>
{{{end}}}
{{{ end }}}
{{{ if categories.length }}}
<ul class="categories">
{{{each categories}}}
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
{{{end}}}
</ul>
{{{ end }}}
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