// Animasi navbar

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    if (wScroll <= 39) {
        $('.navbar-brand img').css({
            'height': '3.54rem'
        });
        $('.navbar-dark .navbar-nav .nav-link,.navbar-dark .navbar-nav .nav-link .active,.navbar-dark .navbar-nav .nav-link:hover').css({
            'padding': '1.42rem 1.2rem',
            'font-size': '.9rem'
        });
    }
    if (wScroll >= 40) {

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

// popup animasi ketika diklik 

for (let j = 0; j < $('.popuplink').length; j++) {

    $('.popuplink')[j].addEventListener(('click'), function () {
        // ketika di klik memunculkan popup
        $('.popup')[j].style.display = 'block';
        // ketika di klik menhide popup
        $('.close')[j].addEventListener('click', function () {

            $('.popup')[j].style.display = 'none';
        })
    })
}