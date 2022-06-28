import {createEventsReceivedCards, createEventsSentCards} from "./partials/postCards.js";
import {waitForElm} from "../mapboxSearch.js";
let url = `http://localhost:8080`
const put = {
    headers: {
        "Content-Type": "application/json"
    },
    method: 'PUT'
}

export default function (props){
    getUserProps(props);

    // language=HTML
    return`
    <body>
    
    <div class="d-flex justify-content-center">
        <h3>Your Requests</h3>
    </div>
    <hr class="mt-0">
    <div id="user-started-events" class="row mt-4 justify-content-center">
    </div>
    
    <div class="d-flex justify-content-center mt-4">
        <h3>Requests From Other Users</h3>
    </div>
    <hr class="mt-0">
    <div id="user-received-events" class="row mt-4 justify-content-center">
    </div>
    
    <span id="waiting-span-one"></span>
    <span id="waiting-span-two"></span>
    </body>
    
    `
}

//Global Variables
var userProps;
var arrayOfShares = [];
var arrayOfActiveSharedPosts = [];
var arrayOfRequests = [];
var arrayOfPostsUserIsRequesting = [];

//Functions
export function eventsEvents() {
    clearArrays()
    eventsBackground();
    onClickListener();
    getPendingShares(userProps);
    getPendingRequests(userProps);
    getArrayOfActiveSharedPosts(arrayOfShares);
    getArrayOfActiveRequestedPosts(arrayOfRequests);
    startReceivedCards(arrayOfShares, arrayOfActiveSharedPosts);
    startRequestCards(arrayOfRequests, arrayOfPostsUserIsRequesting)
}

//Gets Props
function getUserProps(props) {
    userProps = props;
    return userProps;
}

//Creates an array of post-events the User is currently a part of and are OPEN as the DONOR
function getPendingShares(props) {
    for (let i = 0; i < props.user.donorEvents.length; i++) {
        if(props.user.donorEvents[i].status === "OPEN") {
            arrayOfShares.push(props.user.donorEvents[i])
        }
    }
}

//Takes the above array of post-events and uses fetch to create an array of corresponding events
//Creates a span that is used as an element to wait for because ASYNCHRONOUS ISSUES
function getArrayOfActiveSharedPosts(arrayOfActiveEvents) {
    for (let i = 0; i < arrayOfActiveEvents.length; i++) {
        let currentPostId = arrayOfActiveEvents[i].postId;
        const options = {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'GET'
        }

        fetch(`${url}/api/posts/${currentPostId}`, options)
            .then(res => res.json())
            .then(data => {
                arrayOfActiveSharedPosts.push(data);
                $('#waiting-span-one').html(`<span id="loaded-span-one"></span>`)
            })
            .catch(err => console.log(err))
    }
}

//Waits for the above created "timing span" to be created before populating cards
function startReceivedCards(arrayOfEvents, arrayOfPosts) {
    waitForElm('#loaded-span-one').then((elm) => {
        $('#user-received-events').html(createEventsReceivedCards(arrayOfEvents, arrayOfPosts));
    })
}

//Creates an array of post-events the User is currently a part of and are OPEN as the REQUESTER
function getPendingRequests(props) {
    for (let i = 0; i < props.user.requesterEvents.length; i++) {
        if(props.user.requesterEvents[i].status === "OPEN") {
            arrayOfRequests.push(props.user.requesterEvents[i])
        }
    }
}

//Takes the above array of post-events and uses fetch to create an array of corresponding events
//Creates a span that is used as an element to wait for because ASYNCHRONOUS ISSUES
function getArrayOfActiveRequestedPosts(arrayOfActiveEvents){
    for (let i = 0; i < arrayOfActiveEvents.length; i++) {
        let currentPostId = arrayOfActiveEvents[i].postId;
        const options = {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'GET'
        }

        fetch(`${url}/api/posts/${currentPostId}`, options)
            .then(res => res.json())
            .then(data => {
                arrayOfPostsUserIsRequesting.push(data);
                $('#waiting-span-two').html(`<span id="loaded-span-two"></span>`)
            })
            .catch(err => console.log(err))
    }
}

//Waits for the above created "timing span" to be created before populating cards
function startRequestCards(arrayOfEvents, arrayOfPosts) {
    waitForElm('#loaded-span-two').then((elm) => {
        $('#user-started-events').html(createEventsSentCards(arrayOfEvents, arrayOfPosts));
    })
}

//Sets background color and removes background picture if coming from login/register page
function eventsBackground() {
    $('body').css("background", "none");
    $('body').css("background-color", "#FBFAF2");
}

function onClickListener(){
    onclickCancel()
    onClickAccept()
    onClickDecline()
}


function onclickCancel(){
    $(document).on('click', '#event-cancel-btn', function (){
        let id = $(this).data('id')
        console.log('click')
        console.log(id)
        fetch(`${url}/api/requester/events/changeStatus/close/${id}`, put)
            .then(setTimeout (reload, 1500))
            .catch(err=>console.log(err))

    })
}
function reload(){
    location.reload();
}
function onClickDecline(){
    $(document).on('click', '#decline-request-btn', function (){
        let id = $(this).data('id')
        console.log('click')
        console.log(id)
        fetch(`${url}/api/requester/events/changeStatus/close/${id}`, put)
            .then(setTimeout (reload, 1500))
            .catch(err=>console.log(err))
    })
}

function onClickAccept(){
    $(document).on('click', '#accept-request-btn', function (){
        let id = $(this).data('id')
        console.log('click')
        console.log(id)
        fetch(`${url}/api/requester/events/changeStatus/open/${id}`, put)
            .then(setTimeout (reload, 1500))
            .catch(err=>console.log(err))
    })
}


//Clears all the arrays
function clearArrays() {
    arrayOfShares = [];
    arrayOfActiveSharedPosts = [];
    arrayOfRequests = [];
    arrayOfPostsUserIsRequesting = [];
}