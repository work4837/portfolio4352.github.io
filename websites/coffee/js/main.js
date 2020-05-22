$(function() {

    // Меню
    $('.header__menu-btn').on('click', function() {
        $('.header__menu-list').slideToggle();
        $(this).toggleClass('active');
    });

    // Скролл к секциям меню
    $('.header__menu-link, .logo__link, .progress-bar__link').on('click', function(event) {
        event.preventDefault();

        let id = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top
        });
    });

    $(document).on('scroll' , function() {
        // Индикатор скролла по секциям страницы
        definePageProgress();
    });
    definePageProgress();

    function definePageProgress() {
        let positionId, sectionsArray;

        // создаем массив объектов, в каждом из них лежит id, координаты начала и конца
        sectionsArray = createSectionsArray();

        // определяем где мы находимся и сохраняем id
        positionId = checkWhereWeAre(sectionsArray);

        // подсвечиваем соответствующий пункт индикатора по id
        highlightIndicator(positionId);
    }

    function createSectionsArray() {
        // находим координаты конца и начала каждой секции, получаем имя и слаживаем объекты в массив
        let sectionsArray = $('.section'),
        sectionsDataArray = [];

        // Конструктор объекта секции
        function SectionObject(id, startPos, endPos, height) {
            this.id = id;
            this.startPos = startPos;
            this.endPos = endPos;
            this.height = height;
        }
        
        // заполняем массив
        for (let i = 0; i < sectionsArray.length; i++) {
            let id, startPos, endPos, height, sectionObject;

            id = $(sectionsArray[i]).attr('id');
            startPos = $(sectionsArray[i]).offset().top;
            endPos = $(sectionsArray[i]).height() + $(sectionsArray[i]).offset().top,
            height = $(sectionsArray[i]).height();

            sectionObject = new SectionObject(id, startPos, endPos, height);

            sectionsDataArray.push(sectionObject);
        }

        return sectionsDataArray;
    }

    function checkWhereWeAre(sectionsData) {
        // получаем текущие координаты
        let currentCoordinates =  $(document).scrollTop(),
        sectionId;

        // проверяем где находимся - сравниваем конец и начало каждого объекта с текущими координатами
        for (let i = 0; i < sectionsData.length; i++) {
            
            if (currentCoordinates >= (sectionsData[i].startPos - 250) && currentCoordinates < sectionsData[i].endPos) {
                sectionId = sectionsData[i].id;
            } else {
                let sumHeight = 0;

                for (let j = 0; j < sectionsData.length; j++) {
                    sumHeight += sectionsData[j].height;
                }

                if (sumHeight < currentCoordinates) {
                    $('.progress-bar__items').find($('.progress-bar__link')[$('.progress-bar__link').length-1]).removeClass('active');
                }
                
            }
        }

        return sectionId;
    }

    function highlightIndicator(id) {
        let indicatorItems = $('.progress-bar__item');

        for (let i = 0; i < indicatorItems.length; i++) {
            if ($(indicatorItems[i]).attr('name') === id) {
                $('.progress-bar__items').find('.progress-bar__link.active').removeClass('active');
                $(indicatorItems[i]).find('.progress-bar__link').addClass('active');   
            } 
        }
    }

    // Слайдер
    $('.gallery__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        prevArrow: '<button class="arrow-left"><i class="fas fa-arrow-circle-left"></i></button>',
        nextArrow: '<button class="arrow-right"><i class="fas fa-arrow-circle-right"></i></button>',
        dots: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    swipe: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    swipe: true
                }
            }
        ]
    });

    // Динамический адаптив футера
    $(window).on('resize', function() {
        adaptiveFooter();
    });
    adaptiveFooter();

    function dynamicAdaptiveFooter(breakpoint, element, where, from) {
        if ($(window).width() < breakpoint) {
            if ($(where).children(element).length === 0) {
                $(where).append($(element));
            } 
        } else {
            $(from).append($(element));
        }
    }

    function adaptiveFooter() {
        dynamicAdaptiveFooter(1030, '.footer__logo', '.footer__wrapper', '.footer__column:nth-child(1)');
        dynamicAdaptiveFooter(1030, '.footer__visit-btn', '.footer__wrapper', '.footer__column:nth-child(2)');
        dynamicAdaptiveFooter(1030, '.footer__social', '.footer__wrapper', '.footer__column:nth-child(2)');
        dynamicAdaptiveFooter(1030, '.footer__copy', '.footer__wrapper', '.footer__column:nth-child(1)');
    }

    // Кнопка скролла вверх 
    if ($(window).width() < 1450) {
        $('.scrolltop').on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        });
    }
    // появление, исчезновение 
    $(window).on('scroll', function() {
        scrollTopAnimate();
    });
    scrollTopAnimate();

    function scrollTopAnimate() {
        if  ($(window).width() < 1450) {
            if ($(this).scrollTop() > 400 && $(this).scrollTop() < ($(document).height()) - ($(window).height() + 80)) {
                $('.scrolltop').fadeIn();
            } else {
                $('.scrolltop').fadeOut();
            }
        }
    }

    // popup форма
    $('.contact__btn').on('click', function() {
        $('body').addClass('popup-active');
        $('.popup').addClass('active');
    });

    $('.popup__close').on('click', function(e) {
        $('.popup').removeClass('active');
        $('body').removeClass('popup-active');
    });

});



    