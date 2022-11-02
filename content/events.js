/**
 * Creates cards for each event planned currently in the Discord server
 */

const NUM_CARD_IMAGES = 5; // Number of placeholder images currently supported
const EVENT_API = 'https://woofclub.xyz/api/v1/events'; // Link to the API endpoint

// Call main, and call on refresh
let cards;
main();

// Only reformat if the width of the window changed - ignore height changes
let last_width = document.querySelector(".events").clientWidth;
window.addEventListener("resize", async (_) => {
    // Don't do anything if only the height changed
    if (document.querySelector(".events").clientWidth === last_width) return;
    last_width = document.querySelector(".events").clientWidth;
    await main();
});

// Fetch events from the server
async function getEvents() {
    var events = []; // Array to hold events

    // Make a call to API Endpoint
    try {
        const response = await fetch(EVENT_API);
        if (!response.ok) throw Error("Event request failed.");
        events = await response.json(); // Populates events array

    } catch (e) { console.log(e) }

    console.info(events);

    return events;
}

// Creates a group of columns based on window width
function genColumns() {
    const cardWidth = 450; // px
    const browserWidth = document.querySelector(".events").clientWidth;

    // Find number of columns that fit, at least one
    const columns = Math.max(1, Math.floor(browserWidth / cardWidth));

    const boxes = [];
    for (let i = 0; i < columns; i++) {
        const box = document.createElement("div");
        box.className = "eventcolumn";
        boxes.push(box);
    }

    return boxes;
}

/**
 * Makes a card. Designed to work with forEach().
 * 
 * @param {*} value The object array containing the Title, Description, 
 *                  and Image from the Discord server
 * @param {*} index The position in the array
 * @param {*} array The array Object itself
 */
function makeCard(value) {

    /* Make new card */
    let card = document.createElement('div');
    card.className = 'card';

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
    title.innerHTML = formatText(value.name); // Adds event title
    container.appendChild(title);

    /* make description */
    let subtitle = document.createElement('p');
    subtitle.innerHTML = formatText(value.description); // Gets event description
    container.appendChild(subtitle);

    return card;
}

/**
 * Replaces Discord markdown with HTML formatting blocks. Assumes call uses the
 * innerHTML element instead of innerText. Is recursive.
 * 
 * Currently supports: bold italics, bold, italics, underline, strikethrough and newlines.
 * 
 * @param {*} text Text to format.
 * @returns A formatted string containing HTML codes.
 */
function formatText(text) {
    if (text.indexOf('***') != text.lastIndexOf('***')) { // bold italics
        text = text.replace('***', '<b><i>').replace('***', '</i></b>');

        return formatText(text);
    }
    else if (text.indexOf('**') != text.lastIndexOf('**')) { // bold
        text = text.replace('**', '<b>').replace('**', '</b>');

        return formatText(text);
    }
    else if (text.indexOf('*') != text.lastIndexOf('*')) { // italics with *str*
        text = text.replace('*', '<i>').replace('*', '</i>');

        return formatText(text);
    }
    else if (text.indexOf('__') != text.lastIndexOf('__')) { // underline
        text = text.replace('__', '<u>').replace('__', '</u>');

        return formatText(text);
    }
    else if (text.indexOf('_') != text.lastIndexOf('_')) { // italics with _str_
        text = text.replace('_', '<i>').replace('_', '</i>');

        return formatText(text);
    }
    else if (text.indexOf('~~') != text.lastIndexOf('~~')) { // strikethrough
        text = text.replace('~~', '<strike>').replace('~~', '</strike>');

        return formatText(text);
    }
    else if (text.indexOf('\n') != -1) { // newline
        text = text.replace('\n', '<br>');

        return formatText(text);
    }

    return text;
}

// Returns the shortest element in a list of elements
function getShortestOf(elements) {
    return elements.slice().sort((a, b) => {
        return a.offsetHeight - b.offsetHeight;
    })[0];
}

// Creates and populates columns of event cards if necessary
let cols;
function refreshColumns(cards) {
    const new_cols = genColumns();
    if (!cols || new_cols.length !== cols.length) {
        // Remove columns (for after resize)
        const container = document.querySelector(".events");
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }

        cols = new_cols;

        for (c of cols) {
            container.appendChild(c);
        }
        for (card of cards) {
            getShortestOf(cols).appendChild(card);
        }

    }
}


// Main logic
async function main() {
    // Get events from server if not already done
    const event_cards = cards || (await getEvents()).map(makeCard);
    cards = event_cards;

    if (cards.length > 0) {
        // Populate columns
        refreshColumns(cards);
    } else {
        // Alternatively, show a message
        let noevent = document.createElement('div');
        noevent.className = 'noevent';
        document.body.childNodes.item(1).firstChild.appendChild(noevent);

        let title = document.createElement('h1');
        title.innerText = "No events planned :(";
        noevent.appendChild(title);
    }
}