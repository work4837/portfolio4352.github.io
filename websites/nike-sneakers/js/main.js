$(function() {

    $('.menu-btn').on('click', function() {
        $('.header__wrapper').addClass('active');
        $('body').addClass('active-menu');
    });

    $('.close-btn').on('click', function() {
        $('.header__wrapper').removeClass('active');
        $('body').removeClass('active-menu');
    });

    new WOW().init();

});