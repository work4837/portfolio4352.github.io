$(function() {
    $('.hapiness__bg').lettering();

     /* **********************************************************************************************************
    Слайдеры
    ********************************************************************************************************** */

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
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    swipe: true,
                    dots: true
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

    $('.after__slider').slick({
        fade: true,
        swipe: false,
        prevArrow: '<div class="tap-area left-area"></div>',
        nextArrow: '<div class="tap-area right-area"></div>',
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    swipe: true,
                    prevArrow: '<div class="after__arrow-left"><img src="../img/icons/arrow-left.png"></div>',
                    nextArrow: '<div class="after__arrow-right"><img src="../img/icons/arrow-right.png"></div>',
                }
            }
        ]
    });

    $('.will__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        swipe: false,
        centerMode: true,
        prevArrow: '<div class="tap-area left-area"></div>',
        nextArrow: '<div class="tap-area right-area"></div>'
    });

    // $('.girls__slider').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     swipe: false 
    // });

    
    /* **********************************************************************************************************
    Реализация тестов 
    ********************************************************************************************************** */
    var progressBar, questionNumber, returnBack, answerNo, answerYes, testNumber, testCounter, testResult;

    progressBar = $('.test__progress-bar');
    questionNumber = $('.test__question-number');
    comeBack = $('.test__return');
    answerYes = $('#yes');
    answerNo = $('#no');
    testNumber = $('.test__question').length;
    testCounter = 1;
    testResult = 0;

    initTests();
 
    answerYes.on('click', function() {
        testResult++;
        
        if (testCounter < testNumber) {
            makeStep();
        } else {
            showResults();
        }
    });

    answerNo.on('click', function() {
        if (testCounter < testNumber) {
            makeStep();
        } else {
            showResults();
        }
    });

    comeBack.on('click', function() {
        comeBackQuestion();
    });

    var makeStep = function() {
        testCounter++;
        questionNumber.html(testCounter);

        if (testCounter === testNumber) {
            progressBar.addClass('end');
        }

        updateProgressBar(testNumber);
        nextQuestion(testCounter);
    }

    function updateProgressBar(testNumber) {
        if (testCounter === testNumber) {
            progressBar.addClass('end');
        }

        var progressAllWidth = $('.test__progress').width();
        var progressBarWidth = (progressAllWidth / testNumber) * testCounter;
        progressBar.width(progressBarWidth);
    }

    function nextQuestion(testCounter) {
        $('#question-' + (testCounter - 1)).css({'display': 'none'});
        $('#question-' + testCounter).css({'display': 'block'});
    }

    function prevQuestion(testCounter) {
        $('#question-' + testCounter).css({'display': 'none'});
        $('#question-' + (testCounter - 1)).css({'display': 'block'});
    }

    function showResults() {
        var bills = $('#test-result');
        $('#test').css({'display': 'none'});

        if (testResult !== 0) {
            bills.html((testResult - 1) + '-' + testResult + ' балла');
        } else {
            bills.html(testResult + '-' + (testResult + 1) + ' балл');
        }
        
        $('.test__final-content').css({'display': 'block'});
        $('.test__contact').css({'display': 'block'});
    }

    function comeBackQuestion() {
        if (testCounter >= 2) {
            prevQuestion(testCounter);  
            testCounter--;
            questionNumber.html(testCounter);
            updateProgressBar(testNumber);
        }
    }

    function initTests() {
        updateProgressBar(testNumber);
        nextQuestion(testCounter);
    }

    new WOW().init();
});