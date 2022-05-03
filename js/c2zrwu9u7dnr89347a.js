(function($) {

    $.fn.visible = function(partial) {

        var $t = $(this),
            $w = $(window),
            offset = 0,
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

})(jQuery);


// Already visible modules
$(".row").each(function(i, el) {
    var el = $(el);
    el.css("opacity", "0");
    if (el.visible(true)) {
        setTimeout(function() {
            el.addClass("animate", "1");
        }, 5 + (i * 5));
    }
});

$(window).scroll(function(event) {
    $(".row").each(function(i, el) {
        var el = $(el);
        el.css("opacity", "0");
        if (el.visible(true)) {
            setTimeout(function() {
                el.addClass("animate", "1");
            }, 5 + (i * 5));
        }
    });
});
