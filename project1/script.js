let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 900
});

function dropdown() {
  const x = document.getElementById('nav-bar');
  if (x.className === '') {
    x.className = 'responsive';
  } else {
    x.className = '';
  }
}
