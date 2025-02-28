<div class="topic-main-buttons float-end d-inline-block">
<span class="loading-indicator btn float-start hidden" done="0">
<span class="hidden-xs">[[topic:loading-more-posts]]</span> <i class="fa fa-refresh fa-spin"></i>
</span>
<!-- IF loggedIn -->
<button component="topic/mark-unread" class="btn btn-sm btn-outline-secondary" title="[[topic:mark-unread]]">
<i class="fa fa-fw fa-inbox"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline"></span>
</button>
<!-- ENDIF loggedIn -->
<!-- IF config.loggedIn -->
<div class="btn-group bottom-sheet" component="topic/watch"
data-bs-toggle="tooltip"
{{{if isFollowing}}}title="[[topic:watching]]"{{{end}}}
{{{if isNotFollowing}}}title="[[topic:not-watching]]"{{{end}}}
{{{if isIgnoring}}}title="[[topic:ignoring]]"{{{end}}}
>
<button class="btn btn-sm btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button" aria-haspopup="true" aria-expanded="false">
<span component="topic/following/menu" <!-- IF !isFollowing -->class="hidden"<!-- ENDIF !isFollowing -->><i class="fa fa-fw fa-bell-o"></i></span>
<span component="topic/not-following/menu" <!-- IF !isNotFollowing -->class="hidden"<!-- ENDIF !isNotFollowing -->><i class="fa fa-fw fa-bell-slash-o"></i></span>
<span component="topic/ignoring/menu" <!-- IF !isIgnoring -->class="hidden"<!-- ENDIF !isIgnoring -->><i class="fa fa-fw fa-eye-slash"></i></span>
</button>
<ul class="dropdown-menu dropdown-menu-end" role="menu">
<li>
<a class="dropdown-item d-flex" href="#" component="topic/following" role="menuitem">
<span><i component="topic/following/check" class="fa fa-fw {{{ if isFollowing }}}fa-check{{{ end }}}"></i></span>
<div class="d-flex flex-column">
<span><i class="fa fa-fw fa-bell-o"></i> [[topic:watching]]</span>
<p class="help-text text-muted"><small>[[topic:watching.description]]</small></p>
</div>
</a>
</li>
<li>
<a class="dropdown-item d-flex" href="#" component="topic/not-following" role="menuitem">
<span><i component="topic/not-following/check" class="fa fa-fw {{{ if isNotFollowing }}}fa-check{{{ end }}}"></i></span>
<div class="d-flex flex-column">
<span><i class="fa fa-fw fa-bell-slash-o"></i> [[topic:not-watching]]</span>
<p class="help-text text-muted"><small>[[topic:not-watching.description]]</small></p>
</div>
</a>
</li>
<li>
<a class="dropdown-item d-flex" href="#" component="topic/ignoring" role="menuitem">
<span><i component="topic/ignoring/check" class="fa fa-fw {{{ if isIgnoring }}}fa-check{{{ end }}}"></i></span>
<div class="d-flex flex-column">
<span><i class="fa fa-fw fa-eye-slash"></i> [[topic:ignoring]]</span>
<p class="help-text text-muted"><small>[[topic:ignoring.description]]</small></p>
</div>
</a>
</li>
</ul>
</div>
<!-- ENDIF config.loggedIn -->
<div title="[[topic:sort-by]]" class="btn-group bottom-sheet hidden-xs" component="thread/sort">
<button class="btn btn-sm btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="[[aria:post-sort-option, {sortOptionLabel}]]">
<i class="fa fa-fw fa-sort"></i></button>
<ul class="dropdown-menu dropdown-menu-end" role="menu">
<li><a class="dropdown-item" href="#" class="oldest_to_newest" data-sort="oldest_to_newest" role="menuitem"><i class="fa fa-fw"></i> [[topic:oldest-to-newest]]</a></li>
<li><a class="dropdown-item" href="#" class="newest_to_oldest" data-sort="newest_to_oldest" role="menuitem"><i class="fa fa-fw"></i> [[topic:newest-to-oldest]]</a></li>
<li><a class="dropdown-item" href="#" class="most_votes" data-sort="most_votes" role="menuitem"><i class="fa fa-fw"></i> [[topic:most-votes]]</a></li>
</ul>
</div>
<div class="d-inline-block">
{{{ if privileges.view_thread_tools }}}
<div title="[[topic:thread-tools.title]]" class="btn-group thread-tools bottom-sheet">
<button class="btn btn-sm btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button" aria-haspopup="true" aria-expanded="false">
<i class="fa fa-fw fa-gear"></i>
</button>
<ul class="dropdown-menu dropdown-menu-end" role="menu"></ul>
</div>
{{{ end }}}
</div>
<div component="topic/reply/container" class="btn-group bottom-sheet <!-- IF !privileges.topics:reply -->hidden<!-- ENDIF !privileges.topics:reply -->">
<a href="{config.relative_path}/compose?tid={tid}" class="btn btn-sm btn-primary" component="topic/reply" data-ajaxify="false" role="button"><i class="fa fa-reply visible-xs-inline"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline"> [[topic:reply]]</span></a>
<button type="button" class="btn btn-sm btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<span class="caret"></span>
</button>
<ul class="dropdown-menu dropdown-menu-end" role="menu">
<li><a class="dropdown-item" href="#" component="topic/reply-as-topic" role="menuitem">[[topic:reply-as-topic]]</a></li>
</ul>
</div>
<!-- IF loggedIn -->
<!-- IF !privileges.topics:reply -->
<!-- IF locked -->
<a component="topic/reply/locked" class="btn btn-sm btn-primary" disabled><i class="fa fa-lock"></i> [[topic:locked]]</a>
<!-- ENDIF locked -->
<!-- ENDIF !privileges.topics:reply -->
<!-- IF !locked -->
<a component="topic/reply/locked" class="btn btn-sm btn-primary hidden" disabled><i class="fa fa-lock"></i> [[topic:locked]]</a>
<!-- ENDIF !locked -->
<!-- ELSE -->
<!-- IF !privileges.topics:reply -->
<a component="topic/reply/guest" href="{config.relative_path}/login" class="btn btn-sm btn-primary">[[topic:guest-login-reply]]</a>
<!-- ENDIF !privileges.topics:reply -->
<!-- ENDIF loggedIn -->
</div>