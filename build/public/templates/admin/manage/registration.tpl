<div class="row px-lg-4">
<div class="col-12">
<div class="registration card mb-3">
<div class="card-header text-bg-primary">
[[admin/manage/registration:queue]]
</div>
{{{ if !users.length }}}
<p class="card-body">
[[admin/manage/registration:description, {config.relative_path}/admin/settings/user#user-registration]]
</p>
{{{ end }}}
<div class="table-responsive">
<table class="table users-list">
<thead>
<tr>
<th>[[admin/manage/registration:list.name]]</th>
<th>[[admin/manage/registration:list.email]]</th>
<th class="hidden-xs">[[admin/manage/registration:list.ip]]</th>
<th class="hidden-xs">[[admin/manage/registration:list.time]]</th>
{{{ each customHeaders }}}
<th class="hidden-xs">{./label}</th>
{{{ end }}}
<th></th>
</tr>
</thead>
<tbody>
{{{ each users }}}
<tr data-username="{./usernameEscaped}">
<td>
{{{ if ./usernameSpam }}}
<i class="fa fa-times-circle text-danger" title="[[admin/manage/registration:list.username-spam, {./spamData.username.frequency}, {./spamData.username.appears}, {./spamData.username.confidence}]]"></i>
{{{ else }}}
{{{ if ./spamChecked }}}
<i class="fa fa-check text-success"></i>
{{{ end }}}
{{{ end }}}
{./username}
</td>
<td>
{{{ if ./emailSpam }}}
<i class="fa fa-times-circle text-danger" title="[[admin/manage/registration:list.email-spam, {./spamData.email.frequency}, {./spamData.email.appears}]]"></i>
{{{ else }}}
{{{ if ./spamChecked }}}
<i class="fa fa-check text-success"></i>
{{{ end }}}
{{{ end }}}
{./email}
</td>
<td class="hidden-xs">
{{{ if ./ipSpam }}}
<i class="fa fa-times-circle text-danger" title="[[admin/manage/registration:list.ip-spam, {./spamData.ip.frequency}, {./spamData.ip.appears}]]"></i>
{{{ else }}}
{{{ if ./spamChecked }}}
<i class="fa fa-check text-success"></i>
{{{ end }}}
{{{ end }}}
{./ip}
{{{ each ./ipMatch }}}
<br>
{buildAvatar(@value, "24px", true)}
<a href="{config.relative_path}/uid/{./uid}">{./username}</a>
{{{ end }}}
</td>
<td class="hidden-xs">
<span class="timeago" title="{./timestampISO}"></span>
</td>
{{{ each ./customRows }}}
<td class="hidden-xs">{./value}</td>
{{{ end }}}
<td>
<div class="btn-group float-end">
<button class="btn btn-success btn-sm" data-action="accept"><i class="fa fa-check"></i></button>
<button class="btn btn-danger btn-sm" data-action="delete"><i class="fa fa-times"></i></button>
{{{ each ./customActions }}}
<button id="{./id}" title="{./title}" class="btn btn-sm {./class}">
<i class="fa {./icon}"></i>
</button>
{{{ end }}}
</div>
</td>
</tr>
{{{ end }}}
</tbody>
</table>
</div>
<div component="pagination" class="pagination-container mt-3{{{ if !pagination.pages.length }}} hidden{{{ end }}}">
<ul class="pagination pagination-sm gap-1 hidden-xs hidden-sm justify-content-center">
<li class="page-item previous float-start{{{ if !pagination.prev.active }}} disabled{{{ end }}}">
<a class="page-link rounded fw-secondary px-3" href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
</li>
{{{each pagination.pages}}}
{{{ if pagination.pages.separator }}}
<li component="pagination/select-page" class="page-item page select-page">
<a class="page-link rounded fw-secondary px-3" href="#"><i class="fa fa-ellipsis-h"></i></a>
</li>
{{{ else }}}
<li class="page-item page{{{ if pagination.pages.active }}} active{{{ end }}}" >
<a class="page-link rounded fw-secondary px-3" href="?{pagination.pages.qs}" data-page="{pagination.pages.page}">{pagination.pages.page}</a>
</li>
{{{ end }}}
{{{end}}}
<li class="page-item next float-end {{{ if !pagination.next.active }}} disabled{{{ end }}}">
<a class="page-link rounded fw-secondary px-3" href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
</li>
</ul>
{{{ if !template.topic }}}
<ul class="pagination pagination-sm hidden-md hidden-lg justify-content-center">
<li class="page-item first{{{ if !pagination.prev.active }}} disabled{{{ end }}}">
<a class="page-link fw-secondary"  href="?{pagination.first.qs}" data-page="1"><i class="fa fa-fast-backward"></i> </a>
</li>
<li class="page-item previous{{{ if !pagination.prev.active }}} disabled{{{ end }}}">
<a class="page-link fw-secondary"  href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
</li>
<li component="pagination/select-page" class="page-item page select-page">
<a class="page-link fw-secondary"  href="#">{pagination.currentPage} / {pagination.pageCount}</a>
</li>
<li class="page-item next{{{ if !pagination.next.active }}} disabled{{{ end }}}">
<a class="page-link fw-secondary"  href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
</li>
<li class="page-item last{{{ if !pagination.next.active }}} disabled{{{ end }}}">
<a class="page-link fw-secondary"  href="?{pagination.last.qs}" data-page="{pagination.pageCount}"><i class="fa fa-fast-forward"></i> </a>
</li>
</ul>
{{{ end }}}
</div>
</div>
<div class="invitations card">
<div class="card-header text-bg-success">
[[admin/manage/registration:invitations]]
</div>
<p class="card-body">
[[admin/manage/registration:invitations.description]]
</p>
<div class="table-responsive">
<table class="table invites-list">
<thead>
<tr>
<th>[[admin/manage/registration:invitations.inviter-username]]</th>
<th>[[admin/manage/registration:invitations.invitee-email]]</th>
<th>[[admin/manage/registration:invitations.invitee-username]]</th>
</tr>
</thead>
<tbody>
{{{ each invites }}}
{{{ each invites.invitations }}}
<tr data-invitation-mail="{invites.invitations.email}"
data-invited-by="{invites.username}">
<td class ="invited-by">{{{ if @first }}}{invites.username}{{{ end }}}</td>
<td>{invites.invitations.email}</td>
<td>{invites.invitations.username}
<div class="btn-group float-end">
<button class="btn btn-danger btn-sm" data-action="delete"><i class="fa fa-times"></i></button>
</div>
</td>
</tr>
{{{ end }}}
{{{ end }}}
</tbody>
</table>
</div>
</div>
</div>
</div>