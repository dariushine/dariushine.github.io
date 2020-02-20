$('.modal').on("show.bs.modal", function () {
  $(this).find('.lazyLoad').each(function(){
      var img = $(this);
      img.attr('src', img.data('src'));
  });
});   

$('.lazyLoad').on("load", function (e) {
  const loadingURL = './img/svg/spinner.svg';
  if( $(this).attr('src') != loadingURL && $(this).hasClass('loading') ) {
    $(this).removeClass('loading');
    $(this).addClass('loaded-image')
  }
})

var scroll = new SmoothScroll('a[href*="#"]', {
  header: 'nav',
  speed: 900
});

$(document).ready(function () {
  $('.slider-nav').slick({
    slidesToShow: 3,
    dots: true,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToSroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToSroll: 1,
        }
      }
    ]
  });
});
