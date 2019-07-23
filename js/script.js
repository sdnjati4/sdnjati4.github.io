$(window).scroll(function () {
    var wScroll = $(this).scrollTop();


    if (wScroll <= 119) {
        $('.navbar-brand img').css({
            'height': '3.54rem'
        });
        $('.navbar-dark .navbar-nav .nav-link,.navbar-dark .navbar-nav .nav-link .active,.navbar-dark .navbar-nav .nav-link:hover').css({
            'padding': '1.42rem 1.2rem',
            'font-size': '.9rem'
        });
    }
    if (wScroll >= 120) {

        $('.navbar-brand img').css({
            'transition': '.3s ease-in-out',
            'height': '2.8rem'
        });
        $('.navbar-dark .navbar-nav .nav-link,.navbar-dark .navbar-nav .nav-link .active,.navbar-dark .navbar-nav .nav-link:hover').css({
            'transition': '.3s ease-in-out',
            'padding': '.65rem .65rem 1.2rem .5rem',
            'font-size': '.8rem'
        });
        $('.form-inline .cari').css({
            'left': '1200'
        })
    }
});

$('.text-lg').css({
    'opacity': '1',
    'color': 'black'
})