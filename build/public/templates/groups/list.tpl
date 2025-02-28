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
<div class="groups list">
<div class="row justify-content-between">
<div class="col-lg-6">
<!-- IF allowGroupCreation -->
<button class="btn btn-primary" data-action="new"><i class="fa fa-plus"></i> [[groups:new-group]]</button>
<!-- ENDIF allowGroupCreation -->
</div>
<div class="col-lg-6">
<div class="row justify-content-end">
<div class="col-5 col-md-6">
<select class="form-select" id="search-sort">
<option value="alpha">[[groups:details.group-name]]</option>
<option value="count">[[groups:details.member-count]]</option>
<option value="date">[[groups:details.creation-date]]</option>
</select>
</div>
<div class="col-7 col-md-6">
<div class="input-group">
<input type="text" class="form-control" placeholder="[[global:search]]" name="query" value="" id="search-text">
<button id="search-button" class="btn btn-primary">
<i class="fa fa-search"></i>
</button>
</div>
</div>
</div>
</div>
</div>
<hr />
<div component="groups/container" class="row" id="groups-list" data-nextstart={nextStart}>
<!-- IF groups.length -->
{{{each groups}}}
<div class="col-lg-4 col-md-6 col-sm-12 mb-3" component="groups/summary" data-slug="{groups.slug}">
<div class="card h-100">
<a href="{config.relative_path}/groups/{groups.slug}" class="card-header list-cover" style="{{{ if groups.cover:thumb:url }}}background-image: url({./cover:thumb:url});background-size: cover;	min-height: 125px; background-position: {./cover:position}{{{ end }}}">
<h5 class="card-title">{groups.displayName} <small>{groups.memberCount}</small></h5>
</a>
<div class="card-body">
<ul class="members">
{{{each groups.members}}}
<li>
<a href="{config.relative_path}/user/{groups.members.userslug}">{buildAvatar(groups.members, "24px", true)}</a>
</li>
{{{end}}}
{{{ if groups.truncated }}}
<li class="truncated"><i class="fa fa-ellipsis-h"></i></li>
{{{ end }}}
</ul>
</div>
</div>
</div>
{{{end}}}
<!-- ELSE -->
<div class="col-12">
<div class="alert alert-warning">
[[groups:no-groups-found]]
</div>
</div>
<!-- ENDIF groups.length -->
</div>
</div>