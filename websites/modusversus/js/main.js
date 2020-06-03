$(function () {
    // slick-slider

    $('.top-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: '<div class="slider-arrows top__slider-arrows arrow-left"><img src="media/img/icons/double-arrow-left.png" alt=""></div>',
        nextArrow: '<div class="slider-arrows top__slider-arrows arrow-right"><img src="media/img/icons/double-arrow-right.png" alt=""></div>',
        dots: true,
        arrows: true
    });

    $('.clients-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: '<div class="client__slider-arrows client__arrow-left"><img src="media/img/icons/arrow-left.png" alt=""></div>',
        nextArrow: '<div class="client__slider-arrows client__arrow-right"><img src="media/img/icons/arrow-right.png" alt=""></div>',
        arrows: true,
        responsive: [
            {
                breakpoint: 1130,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 585,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    centerMode: true
                }
            }
        ]
    });

    $('.project__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        prevArrow: '<div class="slider-arrows top__slider-arrows arrow-left"><img src="media/img/icons/double-arrow-left.png" alt=""></div>',
        nextArrow: '<div class="slider-arrows top__slider-arrows arrow-right"><img src="media/img/icons/double-arrow-right.png" alt=""></div>'
    });

    $('.project__related-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        prevArrow: '<div class="project-arrows client__slider-arrows client__arrow-left"><img src="../../media/img/icons/arrow-left.png" alt=""></div>',
        nextArrow: '<div class="project-arrows client__slider-arrows client__arrow-right"><img src="../../media/img/icons/arrow-right.png" alt=""></div>'
    });

    let postSlider = $('.post__slider');

    // узнаем есть ли элемент на странице 
    if (postSlider.length) {
        postSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            prevArrow: '<div class="slider-arrows post-arrows arrow-left"><img src="media/img/icons/double-arrow-left.png" alt=""></div>',
            nextArrow: '<div class="slider-arrows post-arrows arrow-right"><img src="media/img/icons/double-arrow-right.png" alt=""></div>',
            arrows: true
        });
    } 

    // autoplayerjs

    $('.audio-player').audioPlayer();

    // ON CLICK
    // button highlight

    $('.portfolio__btn-link').on('click', function() {
        // кастомизация кнопки после нажатия
        $('.portfolio__buttons').find('a').removeClass('active');
        $(this).addClass('active');
    });

    $('.menu-btn').on('click', function() {
        $('.menu').toggleClass('active');
        $('body').toggleClass('disabled');
    });

    $('.menu__list-item--dropdown').on('click', function() {
        if ($(window).width() < 1020) {
            $('.menu__dropdown').slideToggle();
        }
    });

    $(document).on('click', function(event){
        let clickElement = $(event.target).attr('class');

        if ((clickElement.indexOf('menu') === -1) && (clickElement.indexOf('search') === -1)) {
            $('.menu').removeClass('active');
            $('body').removeClass('disabled');
            $('.menu__list-search').removeClass('active');
        } else {
            return;
        }
    });

    $('.menu__list-search').on('click', function () {
        $(this).toggleClass('active');
    });
    
    $('.btn-close').on('click', function() {
        $('.menu').removeClass('active');
    });

    $('.portfolio__btns-dropdown').on('click', function() {
        $('.portfolio__buttons').slideToggle();
        $(this).toggleClass('active');
    });

    jplist.init();
});