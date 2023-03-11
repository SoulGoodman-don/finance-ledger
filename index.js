$(document).ready(function () {
    fixedHeader()
    $(window).scroll(function () {
        fixedHeader()
    });
    function fixedHeader() {
        if (window.pageYOffset > 0) {
            $("header").addClass("fixed")
        } else {
            $("header").removeClass("fixed")
        }
    }
});