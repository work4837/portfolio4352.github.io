$(function() {
    // Выпадающее меню
    $('.header__menu-btn').on('click', function() {
        $('.header__menu').slideToggle();
    });
    // Активная ссылка и скролл к якорям
    $('.header__menu-link').on('click', function(e) {
        e.preventDefault();

        $('.header__menu-list').find('.header__menu-link.active').removeClass('active');
        $(this).addClass('active');
       
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });
});