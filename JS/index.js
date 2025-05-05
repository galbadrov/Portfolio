$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 140) {
            $('#ime').addClass('scrolled');
            $('.fade').addClass('fade-out');
        } else {
            $('#ime').removeClass('scrolled');
            $('.fade').removeClass('fade-out');
        }
    });
});
