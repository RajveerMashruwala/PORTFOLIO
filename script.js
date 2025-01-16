$(document).ready(function () {
    // Smooth scroll for navigation
    $('#navi ul li a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 50
        }, 600);
    });

    // Highlight active section in navigation
    $(window).on('scroll', function () {
        var scrollPos = $(document).scrollTop();
        $('#navi ul li a').each(function () {
            var section = $($(this).attr('href'));
            if (section.position().top <= scrollPos + 60 && section.position().top + section.height() > scrollPos) {
                $('#navi ul li a').removeClass('active');
                $(this).addClass('active');
            }
        });
    });
});
