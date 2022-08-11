const NUM_CAROSEL_IMAGES = 12;

const IMG = document.getElementById("splashimg");

var num = Math.floor(Math.random() * NUM_CAROSEL_IMAGES); // select random image from list
IMG.src = 'assets/img/carosel/carosel' + (num + 1) + '.png';