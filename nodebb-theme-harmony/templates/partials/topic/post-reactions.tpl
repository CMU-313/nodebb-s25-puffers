<div component="post/reactions" class="post-reactions mt-2">
    {{{ each reactions }}}
    <button class="btn btn-sm btn-light border reaction-btn {{{ if ./reacted }}}reacted{{{ end }}}" 
            data-emoji="{./emoji}" 
            data-count="{./count}">
        <span class="reaction-emoji">{./emoji}</span>
        <span class="reaction-count">{./count}</span>
    </button>
    {{{ end }}}
</div> 