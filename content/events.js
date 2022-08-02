const server_id = '633521381593710602';
var events;
//get events from server

//sort by date

//make card for each
// for (discordEvent in events) {
//     let card = document.createElement('div');
//     card.className = 'card';

//     //add if event contains image
//     let img = document.createElement("img");
//     img.setAttribute('src', 'add event image here');

//     let container = document.createElement('div');
//     container.className = 'container';
// }

let card = document.createElement('div');
card.className = 'card';
document.body.childNodes.item(1).firstChild.appendChild(card);

//add if event contains image
let img = document.createElement("img");
img.setAttribute('style','width: 100%');
img.setAttribute('id','cardimg')
if (false) {
    img.setAttribute('src', 'assets/borley.png');
}
else {
    img.setAttribute('src', 'assets/pawlogo_t.png');
}
card.appendChild(img);

let container = document.createElement('div');
container.className = 'container';
card.appendChild(container);

let title = document.createElement('h1');
title.innerText = "test";
container.appendChild(title);

let subtitle = document.createElement('p');
subtitle.innerText = "subtitle";
container.appendChild(subtitle);