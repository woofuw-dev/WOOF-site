const NUM_CAROUSEL_IMAGES = 12;

const IMG = document.getElementById("splashimg");

var num = Math.floor(Math.random() * NUM_CAROUSEL_IMAGES); // select random image from list
IMG.src = 'assets/img/carousel/carousel' + (num + 1) + '.png';