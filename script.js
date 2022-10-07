/*Menu-toggle*/
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
});

/*Scroll Spy*/
$('body').scrollspy({ target: '#spy', offset:80});


(function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.visible = function(partial) {

        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

})(jQuery);

// whenever the window is scrolled
$(window).scroll(function(event) {
    // get all elements with class=scroll-off
    $(".scroll-off").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            // add the class=leave which slides the element off the screen
            el.addClass("leave");
        }
    });

    $(".scroll-off-up").each(function(i, el) {
        var el = $(el);
            // add the class=leave which slides the element off the screen
            el.addClass("leave-up");

    });

    $(".scroll-on").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            // add the class=leave which slides the element off the screen
            el.addClass("join");
        }
    });

    $(".scroll-on-2").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            // add the class=leave which slides the element off the screen
            el.addClass("join-2");
        }
    });

    $(".scroll-up").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            // add the class=leave which slides the element off the screen
            el.addClass("join-up");
        }
    });
});