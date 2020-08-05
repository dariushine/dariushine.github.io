$(document).ready(function () {
  var smoothscroll = new SmoothScroll('a[href*="#"]', {
    header: "nav",
    speed: 900,
  });
  //>=, not <=
  if ($(window).scrollTop() >= 60 || $(window).width() < 576) {
    //clearHeader, not clearheader - caps H
    $(".navbar").addClass("bg-primary");
  }

  $(window).scroll(function () {
    if ($(window).width() >= 576) {
      var scroll = $(window).scrollTop();

      //>=, not <=
      if (scroll >= 60) {
        //clearHeader, not clearheader - caps H
        $(".navbar").addClass("bg-primary");
      } else {
        $(".navbar").removeClass("bg-primary");
      }
    }
  });

  $(window).resize(function () {
    if ($(window).width() < 576) $(".navbar").addClass("bg-primary");
    else if ($(window).width() >= 576 && $(window).scrollTop() < 60)
      $(".navbar").removeClass("bg-primary");
  });
});
