const server_id = '633521381593710602';
var events;
//get events from server

if (true) { // TODO: check if any events are planned
    // TODO: make new card for each event
    // for (discordEvent in events) {

        // make new card
        let card = document.createElement('div');
        card.className = 'card';
        document.body.childNodes.item(1).firstChild.appendChild(card);

        // add image element
        let img = document.createElement("img");
        //img.setAttribute('style', 'width: 20vw');
        img.setAttribute('id', 'cardimg');

        if (false) { // TODO: check if event has image
            img.setAttribute('src', 'assets/borley.png'); // TODO: change to get event image
        }
        else { // default for events with no images
            img.setAttribute('src', 'assets/pawlogo_t.png');
        }
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
