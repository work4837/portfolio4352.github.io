$(function() {
    $('.hapiness__bg').lettering();

    $('.situations__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipe: false,
        prevArrow: '<div class="tap-area left-area"></div>',
        nextArrow: '<div class="tap-area right-area"></div>',
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    swipe: true,
                    centerMode: true,
                    centerPadding: '20px',
                    dots: true
                }  
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    swipe: true,
                    centerMode: true,
                    centerPadding: '25px',
                    dots: true
                }
            }
        ]
    });
});