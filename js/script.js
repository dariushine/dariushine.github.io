var scroll = new SmoothScroll('a[href*="#"]', {
    header: 'nav',
    speed: 900
});

$(document).ready(function () {
      $('.slider-showcase').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-nav,.slider-description'
      });

      $('.slider-description').slick({
        draggable: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
        asNavFor: '.slider-nav,.slider-showcase'
      });

      $('.slider-nav').slick({
        slidesToShow: 3,
        dots: true,
        centerMode: true,
        arrows: false,
        centerPadding: '0',
        focusOnSelect: true,
        swipeToSlide: true,
        asNavFor: '.slider-showcase,.slider-description'
      });
    });
