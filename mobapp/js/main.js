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

    // Отзывчивые блоки
    $(window).on('resize', function() {
        autoHeight('header', '.top__wrapper');
    
        if ($(window).width() <= 768) {
            autoHeight('header', '.top__img', 20); 
        } else {
            $('.top__img').css({height: '100%'});
        }
    });
    $(window).on('load', function() {
        autoHeight('header', '.top__wrapper');

        if ($(window).width() <= 768) {
            autoHeight('header', '.top__img', 20); 
        } else {
            $('.top__img').css({height: '100%'});
        }
    });
    
    function autoHeight(element, neededElement) {
        // получить высоту header, window
        let windowHeight = $(window).height(),
        elementHeight = (($(element).height())*100)/windowHeight;
        // вычислить высоту top__wrapper
        let height;

        if (arguments.length == 3) {
            height = (100 - elementHeight) - arguments[2];
        } else {
            height = 100 - elementHeight;
        }
        $(neededElement).css({height: height + 'vh'});
    }

    // Слайдеры
    $('.top__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipe: false,
        arrows: true,
        prevArrow: '<button class="arrow-left"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="arrow-right"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    swipe: true,
                    autoplay: false
                }
            }
        ]
    });

    $('.customer__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        swipe: false,
        arrows: true,
        prevArrow: '<button class="arrow-left"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="arrow-right"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    swipe: true
                }
            }
        ]
    });

    // Заглушка для видео
    $('.customer__slider-item').on('click', function (event) {
        let videoSrc = 'https://www.youtube.com/embed/8Z1eMy2FoX4';
        event.preventDefault();
        $(this).html('<iframe id="video" width="100%" height="100%" src="' + videoSrc + '?autoplay=1' + '" frameborder="0" allowfullscreen></iframe>');
    });

    // Появление и исчезновение кнопки скролла вверх
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 150 && $(this).scrollTop() < ($('body').height() - ($(window).height() + 80))) {
            $('#totop-btn').fadeIn();
        } else {
            $('#totop-btn').fadeOut();
        }
    });

   // Плавный скролл вверх
   $('#totop-btn').on('click', function() {
       $('html, body').animate({
           scrollTop: 0
       }, 500);
   });

});