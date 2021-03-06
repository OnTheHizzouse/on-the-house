import {myFooter} from "../views/partials/footer.js";
import {createEventsReceivedCards, createEventsSentCards} from "./partials/postCards.js";
import {waitForElm} from "../mapboxSearch.js";
let url = `https://onthehouse.fulgentcorp.com:8080`
const put = {
    headers: {
        "Content-Type": "application/json"
    },
    method: 'PUT'
}

export default function (props){
    getUserProps(props);
    console.log(props)
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
    ${myFooter()}
    </body>
    
    `
}

//Global Variables
var userProps;
var arrayOfShares = [];
var arrayOfActiveSharedPosts;
var arrayOfRequests = [];
var arrayOfPostsUserIsRequesting;
var requstedPost =[];

//Functions
export function eventsEvents() {
    clearArrays()
    eventsBackground();
    onClickListener();
    getPendingShares(userProps);
    getPendingRequests(userProps);
    getArrayOfActiveSharedPosts(arrayOfShares);
    getArrayOfActiveRequestedPosts(arrayOfRequests);

}

//Gets Props
function getUserProps(props) {
    userProps = props;
    return userProps;
}

//Creates an array of post-events the User is currently a part of and are OPEN as the DONOR
function getPendingShares(props) {
    for (let i = 0; i < props.user.donorEvents.length; i++) {
        if(props.user.donorEvents[i].status === "OPEN" || props.user.donorEvents[i].status === "PENDING") {
            arrayOfShares.push(props.user.donorEvents[i])
        }
        console.log(arrayOfShares)
    }
}

//Takes the above array of post-events and uses fetch to create an array of corresponding events
//Creates a span that is used as an element to wait for because ASYNCHRONOUS ISSUES
function getArrayOfActiveSharedPosts(arrayOfActiveEvents) {

    let id = userProps.user.id

    console.log(arrayOfActiveEvents)
    console.log(arrayOfActiveEvents.length)

        const options = {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'GET'
        }

        // todo filter out the post to be the post with a event because right now it is only getting all the current users post
        fetch(`${url}/api/posts/searchItemsByUserId/${id}`, options)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                console.log(data.length)
                // arrayOfActiveSharedPosts.push(data);
                arrayOfActiveSharedPosts = data
                console.log('this is the my shared post so plz work ;)')
                console.log(arrayOfActiveSharedPosts)
                console.log(arrayOfActiveSharedPosts.length)
                $('#waiting-span-one').html(`<span id="loaded-span-one"></span>`)
                startReceivedCards(arrayOfShares, arrayOfActiveSharedPosts);
            })
            .catch(err => console.log(err))


}

//Waits for the above created "timing span" to be created before populating cards
function startReceivedCards(arrayOfEvents, arrayOfPosts) {
    waitForElm('#loaded-span-one').then((elm) => {
        console.log(arrayOfPosts.length)
        $('#user-received-events').html(createEventsReceivedCards(arrayOfEvents, arrayOfPosts));
    })
}

//Creates an array of post-events the User is currently a part of and are OPEN as the REQUESTER
function getPendingRequests(props) {
    for (let i = 0; i < props.user.requesterEvents.length; i++) {
        if(props.user.requesterEvents[i].status === "OPEN" ||  props.user.requesterEvents[i].status === "PENDING") {
            arrayOfRequests.push(props.user.requesterEvents[i])
        }
    }
}

//Takes the above array of post-events and uses fetch to create an array of corresponding events
//Creates a span that is used as an element to wait for because ASYNCHRONOUS ISSUES
function getArrayOfActiveRequestedPosts(arrayOfActiveEvents){
    console.log(arrayOfActiveEvents)


// Todo: filter out the users post

                arrayOfPostsUserIsRequesting = userProps.posts
                filterEventPost(arrayOfActiveEvents)
                $('#waiting-span-two').html(`<span id="loaded-span-two"></span>`)
                startRequestCards(arrayOfRequests, requstedPost)


}

function filterEventPost(events){
    console.log(events)

    for (let i = 0; i < events.length; i++) {
        console.log(events[i].id)
        console.log(arrayOfPostsUserIsRequesting)
        console.log(arrayOfPostsUserIsRequesting.length)
        for (let j = 0; j < arrayOfPostsUserIsRequesting.length; j++) {
            if (arrayOfPostsUserIsRequesting[j].id == events[i].postId) {
                console.log('getting the post and event')
                console.log(arrayOfPostsUserIsRequesting[j])
                console.log(events[i])
                requstedPost.push(arrayOfPostsUserIsRequesting[j])
            }
        }
    }
    console.log(requstedPost)
    console.log(events.length)
    console.log(requstedPost.length)

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
    onClickFinalAccept()
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

function onClickFinalAccept(){
    $(document).on('click', '#final-accept-btn', function (){
        let id = $(this).data('id');
        let postId = $(this).data('postid');
        console.log(postId);
        console.log("FINAL ACCEPT BUTTON CLICKED")
        fetch(`${url}/api/requester/events/changeStatus/close/${id}`, put)
            .then(fetch(`${url}/api/posts/changeStatus/close/${postId}`, put))
            .then("FINAL ACCEPT FINALLY ACCEPTED")
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
     requstedPost =[];
}