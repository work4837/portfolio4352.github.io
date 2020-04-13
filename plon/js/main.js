$(function () {

    $('.header-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        draggable: false,
        arrows: false,
        fade: true,
        dots: true
    });

    $('.games-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        draggable: false,
        arrows: true,
        infinite: true,
        prevArrow: '<div class="slider-arrows games-slider__arrows arrow-left"><img src="img/icons/arrow-left-grey.png" alt="" class="slider-arrows__img"></div>',
        nextArrow: '<div class="slider-arrows games-slider__arrows arrow-right"><img src="img/icons/arrow-right-grey.png" alt="" class="slider-arrows__img"></div>',
        responsive: [
            {
                breakpoint: 868,
                settings: {
                    slidesToShow: 3,
                    draggable: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    draggable: true
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "20px",
                    draggable: true
                }
            }
        ]
    });

    $('.upcoming-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        draggable: false,
        arrows: true,
        infinite: true,
        prevArrow: '<div class="slider-arrows upcoming-slider__arrows arrow-left"><img src="img/icons/arrow-left-grey.png" alt="" class="slider-arrows__img"></div>',
        nextArrow: '<div class="slider-arrows upcoming-slider__arrows arrow-right"><img src="img/icons/arrow-right-grey.png" alt="" class="slider-arrows__img"></div>',
        centerMode: true,
        centerPadding: "380px",
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    centerPadding: '150px'
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerPadding: '80px'
                }
            },
            {
                breakpoint: 450,
                settings: {
                    centerPadding: '40px'
                }
            }
        ]
    });

    $('.categories-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        draggable: false,
        arrows: true,
        infinite: true,
        prevArrow: '<div class="slider-arrows categories-slider__arrows arrow-left"><img src="img/icons/arrow-left-grey.png" alt="" class="slider-arrows__img"></div>',
        nextArrow: '<div class="slider-arrows categories-slider__arrows arrow-right"><img src="img/icons/arrow-right-grey.png" alt="" class="slider-arrows__img"></div>',
        responsive: [
            {
                breakpoint: 979,
                settings: "unslick"
            }
        ]
    });

    $('.games__platform-btn').on('click', function () {
        // 1. получить items
        let items = $('.games-slider__item');

        // 2. проверить наличие value в классах элементов | если есть - блок, нет - none
        for (let i = 0; i < items.length; i++) {
            if (items[i].classList.contains(this.value)) {
                // 3. отображаем нужные элементы добавляя класс
                items[i].classList.remove('disabled');
                items[i].classList.add('active');
                items[i].closest('.slick-slide').classList.remove('disabled');
                items[i].closest('.slick-slide').classList.add('active');
            } else {
                // 4. прячем элементы, которые не подходят
                items[i].classList.remove('active');
                items[i].classList.add('disabled');
                items[i].closest('.slick-slide').classList.remove('active');
                items[i].closest('.slick-slide').classList.add('disabled');
            }
        }
    });

    $('#scroll-to').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({ scrollTop: targetOffset }, 600);
                return false;
            }
        }
    });
   

});

