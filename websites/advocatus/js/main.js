$(function() {

    // Меню
    $('.menu-btn').on('click', function() {
        $('.header__menu').slideToggle();
    });

    $('.menu-list__link').on("click", function (event) {
        $('.header__menu-list').find('.menu-list__link').removeClass('active');
        $(this).addClass('active');
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        
        //забираем идентификатор бока с атрибута href
        let id = $(this).attr('href');
        
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        let top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
        });

    // Слайдер
    $('.review__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true,
        swipe: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    swipe: true
                }
            }
        ]
    });

    // Табы 
    $('.question__tabs-item').on('click', function() {
        // 1. Получаем значение data-атрибута 
        let tabId = $(this).attr('data-tab');

        // 2. Находим все элементы .question__tabs-item и удаляем класс active, is-rotated
        $('.question__tabs-item.active').removeClass('active');

        // 3. Удаляем класс is-rotated у линии
        $('.question__tabs-line.is-rotated').removeClass('is-rotated');

        // 4. Находим все элементы question__content-item и удаляем класс active
        $('.question__content-item.active').removeClass('active');

        // 5. Добавляем активный класс текущему табу и поворачиваем линию, добавив класс
        $(this).addClass('active').find('.question__tabs-line').addClass('is-rotated');

        // 6. Отображаем соответствующий tabId текст
        $('.question__content').find('#' + tabId).addClass('active');
    });

      //Check to see if the window is top if not then display button
      $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scrollToTop').fadeIn();
        } else {
            $('#scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('#scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});