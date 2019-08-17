var scroll = new SmoothScroll('a[href*="#"]', {
    header: 'header',
    speed: 900
});

function dropdown() {
    var x = document.getElementById("nav-bar");
    if (x.className === "") {
      x.className = "responsive";
    } else {
      x.className = "";
    }
} 