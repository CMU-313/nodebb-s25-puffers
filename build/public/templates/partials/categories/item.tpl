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