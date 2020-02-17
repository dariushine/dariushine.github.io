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
