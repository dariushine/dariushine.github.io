// SmoothScroll setup
let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 900
});

// Function for the navbar button
function dropdown() {
  const x = document.getElementById('nav-bar');
  if (x.className === '') {
    x.className = 'responsive';
  } else {
    x.className = '';
  }
}
