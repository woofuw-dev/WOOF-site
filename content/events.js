const NUM_CARD_IMAGES = 5;

//get events from server

if (true) { // TODO: check if any events are planned
    // TODO: make new card for each event
    // for (discordEvent in events) {

        let cardcontainer = document.createElement('div');
        cardcontainer.className = 'cardcontainer';
        document.body.childNodes.item(1).firstChild.appendChild(cardcontainer);

        // make new card
        let card = document.createElement('div');
        card.className = 'card';
        cardcontainer.appendChild(card);

        // add image element
        let img = document.createElement("img");
        img.setAttribute('id', 'cardimg');

        // add random image
        var num = Math.floor(Math.random() * NUM_CARD_IMAGES); // select random image from list
        img.setAttribute('src', 'assets/img/cards/card' + (num + 1) + '.jpg');
        card.appendChild(img);

        // make text container
        let container = document.createElement('div');
        container.className = 'container';
        card.appendChild(container);

        // make title
        let title = document.createElement('h1');
        title.innerText = "No title"; // TODO: change to get event title
        container.appendChild(title);

        // make description
        let subtitle = document.createElement('p');
        subtitle.innerText = "No description." // TODO: change to get event description
        container.appendChild(subtitle);

    // }
}
else { // display "No events planned :(" if no events found
    let noevent = document.createElement('div');
    noevent.className = 'noevent';
    document.body.childNodes.item(1).firstChild.appendChild(noevent);

    let title = document.createElement('h1');
    title.innerText = "No events planned :(";
    noevent.appendChild(title);
}