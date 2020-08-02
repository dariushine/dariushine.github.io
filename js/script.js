var smoothscroll = new SmoothScroll('a[href*="#"]', {
  header: 'nav',
  speed: 900
});

$(document).ready(function() {


  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
  
       //>=, not <=
      if (scroll >= 60) {
          //clearHeader, not clearheader - caps H
          $(".navbar").addClass("bg-primary");
      } else {
        $(".navbar").removeClass("bg-primary");
      }
  });

})