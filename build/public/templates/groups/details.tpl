<div component="groups/container" class="groups details row">
<div component="groups/cover" style="background-image: url({group.cover:url}); background-position: {group.cover:position};">
<!-- IF group.isOwner -->
<div class="controls">
<span class="upload"><i class="fa fa-fw fa-4x fa-upload"></i></span>
<span class="resize"><i class="fa fa-fw fa-4x fa-arrows"></i></span>
<span class="remove"><i class="fa fa-fw fa-4x fa-times"></i></span>
</div>
<div class="save">[[groups:cover-save]] <i class="fa fa-fw fa-floppy-o"></i></div>
<div class="indicator">[[groups:cover-saving]] <i class="fa fa-fw fa-refresh fa-spin"></i></div>
<!-- ENDIF group.isOwner -->
</div>
<div class="col-12">
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
</div>
<div class="col-lg-4 col-12">
<div class="card mb-3">
<div class="card-header">
<span class="fs-5">
<i class="fa fa-list-ul"></i> [[groups:details.title]]
<!-- IF group.private --><span class="badge bg-info text-dark">[[groups:details.private]]</span><!-- ENDIF group.private -->
<!-- IF group.hidden --><span class="badge bg-info text-dark">[[groups:details.hidden]]</span>&nbsp;<!-- ENDIF group.hidden -->
</span>
</div>
<div class="card-body">
<h2>{group.displayName}</h2>
<p>{group.descriptionParsed}</p>
<!-- IF isAdmin -->
<div class="float-end">
<a href="{config.relative_path}/admin/manage/groups/{group.nameEncoded}" target="_blank" class="btn btn-info"><i class="fa fa-gear"></i> [[user:edit]]</a>
</div>
<!-- ENDIF isAdmin -->
<!-- IF loggedIn -->
<div class="float-end">
{function.membershipBtn, group}&nbsp;
</div>
<!-- ENDIF loggedIn -->
</div>
</div>
<div class="card mb-3">
<div class="card-header">
<span class="fs-5">
<i class="fa fa-users"></i> [[groups:details.members]]
</span>
</div>
<div class="card-body">
<div class="d-flex mb-3">
<!-- IF group.isOwner -->
<div class="flex-shrink-0">
<button component="groups/members/add" type="button" class="btn btn-primary me-3" title="[[groups:details.add-member]]"><i class="fa fa-user-plus"></i></button>
</div>
<!-- ENDIF group.isOwner -->
<div class="flex-grow-1">
<div class="input-group">
<input class="form-control" type="text" component="groups/members/search" placeholder="[[global:search]]"/>
<span class="input-group-text search-button"><i class="fa fa-search"></i></span>
</div>
</div>
</div>
<div component="groups/members" data-nextstart="{group.membersNextStart}" style="max-height: 500px; overflow: auto;">
<table class="table table-striped table-hover">
<tbody>
{{{each group.members}}}
<tr data-uid="{group.members.uid}" data-isowner="{{{ if group.members.isOwner }}}1{{{ else }}}0{{{ end }}}">
<td class="p-2">
<a href="{config.relative_path}/user/{group.members.userslug}">{buildAvatar(group.members, "24px", true)}</a>
</td>
<td class="member-name w-100 p-2">
<a class="align-text-top" href="{config.relative_path}/user/{group.members.userslug}">{group.members.username}</a>
<i component="groups/owner/icon" title="[[groups:owner]]" class="user-owner-icon fa fa-star align-text-top text-warning <!-- IF !group.members.isOwner -->invisible<!-- ENDIF !group.members.isOwner -->"></i>
<!-- IF group.isOwner -->
<div class="owner-controls btn-group float-end">
<a class="btn btn-sm" href="#" data-ajaxify="false" data-action="toggleOwnership" title="[[groups:details.grant]]">
<i class="fa fa-star"></i>
</a>
<a class="btn btn-sm" href="#" data-ajaxify="false" data-action="kick" title="[[groups:details.kick]]">
<i class="fa fa-ban"></i>
</a>
</div>
<!-- ENDIF group.isOwner -->
</td>
</tr>
{{{end}}}
</tbody>
</table>
</div>
</div>
</div>
<!-- IF group.isOwner -->
<div class="card mb-3">
<div class="card-header">
<div class="fs-5">
<i class="fa fa-clock-o"></i> [[groups:details.pending]]
<!-- IF group.pending.length -->
<div class="btn-group float-end">
<button type="button" class="btn btn-outline-secondary btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
[[global:more]] <span class="caret"></span>
</button>
<ul class="dropdown-menu" role="menu">
<li><a class="dropdown-item" href="#" data-action="acceptAll" role="menuitem">[[groups:pending.accept-all]]</a></li>
<li><a class="dropdown-item" href="#" data-action="rejectAll" role="menuitem">[[groups:pending.reject-all]]</a></li>
</ul>
</div>
<!-- ENDIF group.pending.length -->
</div>
</div>
<div class="card-body">
<div component="groups/pending/alert" class="alert alert-info {{{ if group.pending.length }}}hidden{{{ end }}}">[[groups:pending.none]]</div>
<table component="groups/pending" class="table table-striped table-hover">
<tbody>
{{{each group.pending}}}
<tr data-uid="{group.pending.uid}">
<td class="p-2">
<a href="{config.relative_path}/user/{group.pending.userslug}">{buildAvatar(group.pending, "24px", true)}</a>
</td>
<td class="member-name p-2">
<a href="{config.relative_path}/user/{group.pending.userslug}">{group.pending.username}</a>
</td>
<td class="p-2">
<div class="btn-group float-end">
<button type="button" class="btn btn-outline-secondary btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
[[global:more]] <span class="caret"></span>
</button>
<ul class="dropdown-menu" role="menu">
<li><a class="dropdown-item" href="#" data-action="accept" role="menuitem">[[groups:pending.accept]]</a></li>
<li><a class="dropdown-item" href="#" data-action="reject" role="menuitem">[[groups:pending.reject]]</a></li>
</ul>
</div>
</td>
</tr>
{{{end}}}
</tbody>
</table>
</div>
</div>
<div class="card mb-3">
<div class="card-header">
<span class="fs-5">
<i class="fa fa-gift"></i> [[groups:details.invited]]
</span>
</div>
<div class="card-body">
<div class="input-group mb-2">
<input class="form-control" type="text" component="groups/members/invite" placeholder="[[groups:invited.search]]"/>
<span class="input-group-text search-button"><i class="fa fa-search"></i></span>
</div>
<div class="mb-2">
<textarea class="form-control" component="groups/members/bulk-invite" placeholder="[[groups:bulk-invite-instructions]]"></textarea>
</div>
<div class="mb-2 clearfix">
<button class="btn btn-outline-secondary btn-sm float-end" component="groups/members/bulk-invite-button">[[groups:bulk-invite]]</button>
</div>
<div component="groups/invited/alert" class="alert alert-info {{{ if group.invited.length }}}hidden{{{ end }}}">[[groups:invited.none]]</div>
<table component="groups/invited" class="table table-striped table-hover">
<tbody>
{{{ each group.invited }}}
<tr data-uid="{group.invited.uid}">
<td class="p-2">
<a href="{config.relative_path}/user/{group.invited.userslug}">{buildAvatar(group.invited, "24px", true)}</a>
</td>
<td class="member-name p-2">
<a href="{config.relative_path}/user/{group.invited.userslug}">{group.invited.username}</a>
</td>
<td class="p-2">
<div class="btn-group float-end">
<button type="button" class="btn btn-outline-secondary btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
[[global:more]] <span class="caret"></span>
</button>
<ul class="dropdown-menu" role="menu">
<li><a class="dropdown-item" href="#" data-action="rescindInvite" role="menuitem">[[groups:invited.uninvite]]</a></li>
</ul>
</div>
</td>
</tr>
{{{end}}}
</tbody>
</table>
</div>
</div>
<div class="card mb-3">
<div class="card-header pointer" data-bs-toggle="collapse" data-bs-target=".options">
<span class="fs-5">
<i class="fa fa-caret-down float-end"></i>
<i class="fa fa-cogs"></i> [[groups:details.owner-options]]
</span>
</div>
<div class="card-body options collapse">
<form component="groups/settings" role="form">
<div class="mb-3">
<label class="form-label" for="name">[[groups:details.group-name]]</label>
<input <!-- IF group.system -->readonly<!-- ENDIF group.system --> class="form-control" name="name" id="name" type="text" value="{group.displayName}" />
</div>
<div class="mb-3">
<label class="form-label" for="description">[[groups:details.description]]</label>
<textarea class="form-control" name="description" id="description" type="text" maxlength="255">{group.description}</textarea>
</div>
<hr />
<div class="mb-3">
<label class="form-label" for="memberPostCids">[[groups:details.member-post-cids]]</label>
<div class="row">
<div class="col-md-6">
<input id="memberPostCids" type="text" class="form-control" value="{group.memberPostCids}">
</div>
<div class="col-md-6 member-post-cids-selector">
<div component="category-selector" class="btn-group dropdown-left category-dropdown-container bottom-sheet">
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
</div>
</div>
</div>
</div>
<hr />
<div class="mb-3 user-title-option">
<label class="form-label" for="userTitle">[[groups:details.badge-text]]</label>
<div class="d-flex gap-2">
<input component="groups/userTitleOption" class="form-control" name="userTitle" id="userTitle" type="text" maxlength="40" value="{group.userTitleEscaped}"<!-- IF !group.userTitleEnabled --> disabled<!-- ENDIF !group.userTitleEnabled --> />
<button component="groups/userTitleOption" type="button" class="btn btn-outline-secondary btn-sm text-nowrap" data-action="icon-select"<!-- IF !group.userTitleEnabled --> disabled<!-- ENDIF !group.userTitleEnabled -->>[[groups:details.change-icon]]</button>
</div>
</div>
<div class="mb-3 user-title-option">
<div class="d-flex align-items-center gap-3">
<label class="form-label mb-0">[[groups:details.badge-preview]]</label>
<span class="badge rounded-1 text-uppercase text-truncate rounded-1 {{{ if !group.userTitleEnabled }}} hide{{{ end }}}" style="max-width:150px; color: {group.textColor}; background-color: {group.labelColor}"><i class="fa{{{ if group.icon }}} {group.icon}{{{ if group.userTitle}}} me-1{{{ end }}}{{{ end }}}"></i><span class="badge-text">{{{ if group.userTitle }}}{group.userTitle}{{{ end }}}</span></span>
</div>
<hr/>
<div class="d-flex flex-column gap-2">
<div class="d-flex align-items-center gap-2">
<label class="form-label mb-0" for="labelColor" class="badge-color-label">[[groups:details.change-label-colour]]</label>
<input component="groups/userTitleOption" type="color" name="labelColor" id="labelColor"  value="<!-- IF group.labelColor -->{group.labelColor}<!-- ENDIF group.labelColor -->" />
</div>
<div class="d-flex align-items-center gap-2">
<label class="form-label mb-0" for="textColor" class="badge-color-label">[[groups:details.change-text-colour]]</label>
<input component="groups/userTitleOption" type="color" name="textColor" id="textColor" value="<!-- IF group.textColor -->{group.textColor}<!-- ENDIF group.textColor -->" />
</div>
<input type="hidden" name="icon" value="<!-- IF group.icon -->{group.icon}<!-- ENDIF group.icon -->" />
</div>
<div id="icons" class="hidden">
<div class="icon-container">
<div class="row nbb-fa-icons">
<div class="icon-container">
<div class="form-group">
<label class="form-label" for="fa-filter">Type to search for icons</label>
<input type="text" class="form-control" id="fa-filter" data-action="filter" placeholder="e.g. umbrella" />
</div>
<div class="d-flex nbb-fa-icons flex-wrap">
{{{ each icons }}}
<i class="fa fa-xl fa-{icons.style} fa-{icons.id} rounded-1"></i>
{{{ end }}}
</div>
<p class="form-text text-center">
For a full list of icons, please consult:
<a href="https://fontawesome.com/v6/icons/">FontAwesome</a>
</p>
</div>
</div>
</div>
</div>
</div>
<hr />
<div class="form-check">
<label class="form-check-label" for="userTitleEnabled">[[groups:details.userTitleEnabled]]</label>
<input class="form-check-input" name="userTitleEnabled" id="userTitleEnabled" type="checkbox"<!-- IF group.userTitleEnabled --> checked<!-- ENDIF group.userTitleEnabled -->>
</div>
<div class="form-check">
<label class="form-check-label" for="private">[[groups:details.private]]</label>
<input class="form-check-input" name="private" id="private" type="checkbox"<!-- IF group.private --> checked<!-- ENDIF group.private -->>
<!-- IF !allowPrivateGroups -->
<p class="form-text">
[[groups:details.private-system-help]]
</p>
<!-- ENDIF !allowPrivateGroups -->
<p class="form-text">
[[groups:details.private-help]]
</p>
</div>
<div class="form-check">
<label class="form-check-label" for="disableJoinRequests">[[groups:details.disableJoinRequests]]</label>
<input class="form-check-input" name="disableJoinRequests" id="disableJoinRequests" type="checkbox"<!-- IF group.disableJoinRequests --> checked<!-- ENDIF group.disableJoinRequests -->>
</div>
<div class="form-check">
<label class="form-check-label" for="disableLeave">[[groups:details.disableLeave]]</label>
<input class="form-check-input" name="disableLeave" id="disableLeave" type="checkbox"{{{if group.disableLeave}}} checked{{{end}}}>
</div>
<div class="form-check">
<label class="form-check-label" for="hidden">[[groups:details.hidden]]</label>
<input class="form-check-input" name="hidden" id="hidden" type="checkbox"<!-- IF group.hidden --> checked<!-- ENDIF group.hidden -->>
<p class="form-text">
[[groups:details.hidden-help]]
</p>
</div>
<button class="btn btn-link text-danger float-end" type="button" data-action="delete">[[groups:details.delete-group]]</button>
<button class="btn btn-primary" type="button" data-action="update">[[global:save-changes]]</button>
</form>
</div>
</div>
<!-- ENDIF group.isOwner -->
<div data-widget-area="left">
{{{each widgets.left}}}
{{widgets.left.html}}
{{{end}}}
</div>
</div>
<div class="col-lg-8 col-12">
<div class="col-lg-11">
<!-- IF !posts.length -->
<div class="alert alert-info">[[groups:details.has-no-posts]]</div>
<!-- ENDIF !posts.length -->
<ul component="posts" class="posts-list list-unstyled" data-nextstart="{nextStart}">
{{{each posts}}}
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
<div component="posts/loading" class="loading-indicator text-center hidden">
<i class="fa fa-refresh fa-spin"></i>
</div>
</div>
<div data-widget-area="right">
{{{each widgets.right}}}
{{widgets.right.html}}
{{{end}}}
</div>
</div>
</div>