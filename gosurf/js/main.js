$(function () {

  $('.header__slider').slick({
    infinite: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/icons/arrows-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/icons/arrows-right.svg" alt="">',
    asNavFor: '.slider-dotshead'
  });

  $('.slider-dotshead').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
    responsive: [
      {
        breakpoint: 961,
        settings: 'unslick'
      }
    ]
  });

  $('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/icons/arrows-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/icons/arrows-right.svg" alt="">',
    asNavFor: '.slider-map',
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerMode: true
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  });

  $('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          centerMode: true
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerMode: true
        }
      }
    ]
  });

  $('.shop__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/icons/arrows-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/icons/arrows-right.svg" alt="">'
  });

  $('.holder__slider').slick({
    fade: true,
    infinite: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/icons/arrows-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/icons/arrows-right.svg" alt="">'
  });

  jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
  jQuery('.quantity').each(function () {
    var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });

  $('.quantity-button').on('click', function () {
    let sum = $('.nights').val() * $('.sum').data('nights') + ($('.guests').val() - 1) * $('.sum').data('guests');
    $('.sum').html(sum);
  });
  let sum = $('.nights').val() * $('.sum').data('nights') + ($('.guests').val() - 1) * $('.sum').data('guests');
  $('.sum').html(sum);


  $('.surfboard__box-circle').on('click', function () {
    $(this).toggleClass('active');
  });

  $('.menu-btn').on('click', function () {
    $('.menu').toggleClass('active');
  });

  new WOW().init();

  $('.link').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
        if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body').animate({ scrollTop: targetOffset }, 500);//СЃРєРѕСЂРѕСЃС‚СЊ РїСЂРѕРєСЂСѓС‚РєРё
            return false;
        }
    }
});

});