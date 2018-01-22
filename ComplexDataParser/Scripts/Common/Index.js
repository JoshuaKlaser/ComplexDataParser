(function (index, $, undefined) {

    function scaleTextAreas() {
        $('textarea').each(function (i) {
            $(this).height = $(window).height() - 250;
        });
    }

    //scaleTextAreas();
    // Don't need this?

}(window.index = window.index || {}, jQuery));