const NUM_CARD_IMAGES = 5;
const EVENT_API = 'https://woofclub.xyz/api/v1/events';

makeEvents();

async function makeEvents() {
    var events = [];
    try{
        //get events from server
        const response = await fetch(EVENT_API);
        if (!response.ok) throw Error("Event request failed.");
        events = await response.json();

    } catch (e) {
        console.log(e);
    }

    console.log(events);

    if (events.length > 0 && events[0].name != null) { // Checks if any events are planned
        events.forEach(makeCard);
    }
    else { // display "No events planned :(" if no events found
        let noevent = document.createElement('div');
        noevent.className = 'noevent';
        document.body.childNodes.item(1).firstChild.appendChild(noevent);
    
        let title = document.createElement('h1');
        title.innerText = "No events planned :(";
        noevent.appendChild(title);
    }
}

function makeCard(value, index, array) { // Makes a new card for each event

    // make new card
    let card = document.createElement('div');
    card.className = 'card';
    document.body.childNodes.item(1).firstChild.appendChild(card);

    // add image element
    let img = document.createElement("img");
    img.setAttribute('id', 'cardimg');

    let eventimg = value.image;
    if (eventimg != null) { // Checks if an image exists
        img.setAttribute('src', eventimg);
    } else { // Add random image if not
        var num = Math.floor(Math.random() * NUM_CARD_IMAGES); // Select random image from list
        img.setAttribute('src', 'assets/img/cards/card' + (num + 1) + '.jpg');
    }
    card.appendChild(img);

    // make text container
    let container = document.createElement('div');
    container.className = 'container';
    card.appendChild(container);

    // make title
    let title = document.createElement('h1');
    title.innerText = value.name; // Adds event title
    container.appendChild(title);

    // make description
    let subtitle = document.createElement('p');
    subtitle.innerText = value.description; // Gets event description
    container.appendChild(subtitle);
}