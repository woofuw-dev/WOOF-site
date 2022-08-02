const server_id = '633521381593710602';
var events;
//get events from server

// TODO: make new card for each event
// for (discordEvent in events) {

// make new card
let card = document.createElement('div');
card.className = 'card';
document.body.childNodes.item(1).firstChild.appendChild(card);

// add image element
let img = document.createElement("img");
img.setAttribute('style','width: 100%');
img.setAttribute('id','cardimg');

if (false) { // TODO: check if event has image
    img.setAttribute('src', 'assets/borley.png'); // TODO: change to get event image
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
title.innerText = "test"; // TODO: change to get event title
container.appendChild(title);

// make description
let subtitle = document.createElement('p');
subtitle.innerText = "subtitle"; // TODO: change to get event description
container.appendChild(subtitle);

// }
