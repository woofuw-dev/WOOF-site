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

// make new card
let card = document.createElement('div');
card.className = 'card';
document.body.childNodes.item(1).firstChild.appendChild(card);

// add image
let img = document.createElement("img");
img.setAttribute('style','width: 100%');
img.setAttribute('id','cardimg');

if (false) { //add if event contains image
    img.setAttribute('src', 'assets/borley.png');
}
else {
    img.setAttribute('src', 'assets/pawlogo_t.png');
}
card.appendChild(img);

// make text container
let container = document.createElement('div');
container.className = 'container';
card.appendChild(container);

// make title
let title = document.createElement('h1');
title.innerText = "test";
container.appendChild(title);

// make description
let subtitle = document.createElement('p');
subtitle.innerText = "subtitle";
container.appendChild(subtitle);