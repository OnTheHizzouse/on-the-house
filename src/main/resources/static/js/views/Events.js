import {createEventsReceivedCards, createEventsSentCards} from "./partials/postCards.js";

export default function (props){

    // language=HTML
    return`
    <body>
    
    <div class="d-flex justify-content-center">
        <h3>Your Requests</h3>
    </div>
    <hr class="mt-0">
    <div id="user-started-events" class="row mt-4 justify-content-center">
        ${createEventsSentCards("Sent Event Cards")}
    </div>
    
    <div class="d-flex justify-content-center mt-4">
        <h3>Requests From Other Users</h3>
    </div>
    <hr class="mt-0">
    <div id="user-received-events" class="row mt-4 justify-content-center">
        ${createEventsReceivedCards("Received Event Cards")}
    </div>
    </body>
    
    `
}

export function eventsEvents() {
    // eventsBackground();
}

function eventsBackground() {
    $('body').css("background", "none");
    $('body').css("background-color", "#FBFAF2");
}