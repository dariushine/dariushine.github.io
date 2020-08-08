$(document).ready(function () {
  // Starts smooth scroll and fixes problem with links and nav bar
  var smoothscroll = new SmoothScroll('a[href*="#"]', {
    header: "nav",
    speed: 900,
  });

  // Sets the nav bar background when the page starts (depending on factors)
  if ($(window).scrollTop() >= 60 || $(window).width() < 576) {
    $(".navbar").addClass("bg-primary");
  }

  // Toggles the nav bar background when the screen is big enough and the position is adequate
  $(window).scroll(function () {
    if ($(window).width() >= 576) {
      var scroll = $(window).scrollTop();

      if (scroll >= 60) {
        $(".navbar").addClass("bg-primary");
      } else {
        $(".navbar").removeClass("bg-primary");
      }
    }
  });

  // Makes the nav bar background always visible when the window width is small
  $(window).resize(function () {
    if ($(window).width() < 576) $(".navbar").addClass("bg-primary");
    else if ($(window).width() >= 576 && $(window).scrollTop() < 60)
      $(".navbar").removeClass("bg-primary");
  });
});
