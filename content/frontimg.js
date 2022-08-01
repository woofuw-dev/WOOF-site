var imagesArray = ["barley_ac_1.png", "barley_ac_2.png", "barley_beach_1.png", "barley_mo_carbon_beach_1.png", "mo_beach_1.png", "mo_beach_2.png", "pride_beach_1.png", "sergio_barley_1.png", "twister_ac_1.png", "twister_ac_2.png", "twister_barley_ac_1.png"];

const img = document.querySelectorAll("img");
var num = Math.floor(Math.random() * 10); // 0...11
img[3].src = '/assets/img/carosel/' + imagesArray[num];
