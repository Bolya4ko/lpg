$(document).ready(function () {

  $('.reviews__items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 500,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/icon/arrow-left.png"></button></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icon/arrow-right.png"> </button>',
    responsive: [
      {
        breakpoint: 950,
        settings: {
          arrows: false,
        }
      },
    ]
  });

  $('.small a').click(function (e) {
    if ($('.big img').attr('src')!== $(this).attr('href')) {
      $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000)  
    }
    $('.small a').click(function (e) {
      $('.small a').removeClass('active');
      $(this).addClass('active');
    })
    e.preventDefault();
  })

  let data = $('.accardion').attr('data-accardion');

  $('.accardion-header').on('click', function () {
       if (data === 'close') {
            $('.accardion-body').slideUp();
            if ($(this).hasClass('active')) {
                 $(this).toggleClass('active');
            }
            else {
                 $('.accardion-header').removeClass('active');
                 $(this).toggleClass('active');
            }
       }
       else {
            $(this).toggleClass('active');
       }
       $(this).next('.accardion-body').not(':animated').slideToggle();
  })

});