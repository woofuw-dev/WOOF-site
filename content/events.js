/**
 * Creates cards for each event planned currently in the Discord server
 */

const NUM_CARD_IMAGES = 5; // Number of placeholder images currently supported
const EVENT_API = 'https://woofclub.xyz/api/v1/events'; // Link to the API endpoint

makeEvents(); // Calls async function

/**
 * Makes an API call to the Discord API endpoint to get events from the WOOF server.
 * Then creates a card for each event.
 */
async function makeEvents() {
    var events = []; // Array to hold events

    // Make a call to API Endpoint
    try {
        const response = await fetch(EVENT_API);
        if (!response.ok) throw Error("Event request failed.");
        events = await response.json(); // Populates events array

    } catch (e) { console.log(e) }

    console.log(events);

    if (events.length > 0 && events[0].name != null) { // Checks if any events are planned
        events.forEach(makeCard);
    }
    else { // Display "No events planned :(" if no events found
        let noevent = document.createElement('div');
        noevent.className = 'noevent';
        document.body.childNodes.item(1).firstChild.appendChild(noevent);

        let title = document.createElement('h1');
        title.innerText = "No events planned :(";
        noevent.appendChild(title);
    }
}

/**
 * Makes a card. Designed to work with forEach().
 * 
 * @param {*} value The object array containing the Title, Description, 
 *                  and Image from the Discord server
 * @param {*} index The position in the array
 * @param {*} array The array Object itself
 */
function makeCard(value, index, array) {

    /* Make new card */
    let card = document.createElement('div');
    card.className = 'card';
    document.body.childNodes.item(1).firstChild.appendChild(card);

    /* Add image element */
    let img = document.createElement("img");
    img.setAttribute('id', 'cardimg');

    /* Fetch an image for the element */
    let eventimg = value.image;
    if (eventimg != null) { // Checks if an image exists
        img.setAttribute('src', eventimg);

    } else { // Add random image if not
        var num = Math.floor(Math.random() * NUM_CARD_IMAGES); // Select random image from list
        img.setAttribute('src', 'assets/img/cards/card' + (num + 1) + '.jpg');
    }
    card.appendChild(img); // Append image to document

    /* make text container */
    let container = document.createElement('div');
    container.className = 'container';
    card.appendChild(container);

    /* make title */
    let title = document.createElement('h1');
    title.innerText = value.name; // Adds event title
    container.appendChild(title);

    /* make description */
    let subtitle = document.createElement('p');
    subtitle.innerText = value.description; // Gets event description
    container.appendChild(subtitle);
}