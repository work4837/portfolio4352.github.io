$(function() {
    // Слайдеры 
    $('.gallery__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
        fade: true,
        swipe: false
    });

    // Меню
    $('.menu-btn').on('click', function() {
        $('.menu__list').slideToggle();
    });
});