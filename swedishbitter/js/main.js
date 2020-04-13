$(function() {

    $('.list .list__item').on('click', function(event) {
       let id = $(this).attr('data-id');
       $('.symptoms-body__img').find('.symptoms-body__circle').removeClass('active-tab').hide();
       $('.list').find('.list__item').removeClass('active');
       $(this).addClass('active');
       $('#'+id).addClass('active-tab').fadeIn();
       return false;
    });

    $('.comments-switch__text').on('click', function() {
        let id = $(this).attr('data-comment');
       $('.comments__inner').find('.comments__wrapper').removeClass('active-tab');
       $('.comments-switch').find('.comments-switch__text').removeClass('active');
       $(this).addClass('active');
       $('#c'+id).addClass('active-tab');
       return false;
    });

    $('.herb-box').on('click', function() {
      $('.consistency__inner').find('.herb-box').removeClass('active');
      $(this).toggleClass('active');
    });

    $('#dropdown').on('click', function() {
        if($(window).width() <= 768) {
            let id = $(this).val(),
            active = 1;
    
            $('.hidden').slideToggle('slow');
    
            if(id == 0) {
                $(this).text('Свернуть отзывы');
                $(this).val(active);
            } else {
                $(this).text('Читать ещё отзывы');
                $(this).val(0);
            }
        }
    });
});
