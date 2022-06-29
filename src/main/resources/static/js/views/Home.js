import {waitForElm} from "../mapboxSearch.js";
import {markerPostCards, postCards} from "./partials/postCards.js";
import {createPostModal} from "./partials/modals.js";
import {myFooter} from "./partials/footer.js";

export default function Home(props) {
    //todo styling
    //todo add search bar for US6
    console.log("This is the Home Page");
    console.log(props)
    //props.user.username displays the user which currently is a testUser
    //language=HTML
    return `
        <style>
            #map {
                width: 170vh;
                height: 50vh;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            }

            .marker {
                background-image: url('js/views/img/postmarker.png');
                background-size: cover;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                cursor: pointer;
            }

            .current-user-marker {
                background-image: url('js/views/img/usermarker.png');
                background-size: cover;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                cursor: pointer;
            }
        </style>
        <script type="text/javascript">
            function open_file() {
                document.getElementById('input_file').click();
            }
        </script>
        ${getprops(props.posts)}
        ${getUserProps(props.user)}
        <!--TODO: MOVE INPUT FIELD/SEARCHBAR TO WHERE IT NEEDS TO BE-->
        <div class="d-flex justify-content-center">
            <p class="mt-2">Click a <img src="js/views/img/postmarker.png" id="postmarker"> on the map to see what your neighbors are sharing!</p>
        </div>
        <div class="d-flex justify-content-center mb-5">
            <div id="map"></div>
        </div>
        <!--      todo  this add some white space on the right problem is the margin-->
        <div class="d-flex justify-content-center mb-4">
            <div class="my-auto mx-5">
                <input style="width: 120%" class="inputFields" placeholder="Search items..." name="search-by-item-name"
                       id="search-by-item-name-input" required>
            </div>
            <div class="my-auto mx-5">
                ${createPostModal(props.user.username)}
            </div>
        </div>
        <!--      todo  this add some white space on the right problem is the margin-->

        <div id="cards" class="row justify-content-center g-2">
        </div>

        </div>
        </body>
    `;
}

var postProps;
var userProps;
var usersWithin5Miles = [];
var geoJson;
var currentUserGeoJson = [];
var postsOfUsersWithin5Miles = [];

// [-79.4512, 43.6568]


//Waits for the div with the id of map then add the map from mapbox to it. Then it calls the function that creates the marker
//and places those markers in the correct location. Finally, if one of the marker are clicked it will call get allAllUserPost to
//get all the clicked user posts.
function initMap(lng, lat) {
    waitForElm('#map').then((elm) => {
        mapboxgl.accessToken = KEY_mapbox;
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: 12.1
        });
        map.scrollZoom.disable();
        map.doubleClickZoom.disable();
        map.dragPan.disable();
        addUserMarkersToMap(geoJson, map);
        addActiveUserMarkersToMap(currentUserGeoJson, map);
        $(".marker").click(function (){
            console.log(this.id)
            getAllUserPost(this.id)
        })
    })
}

waitForElm('#OTH').then((elm) => {
    // $('#OTH').attr("src", "../views/img/othNavImg.png")
})

//sets the user of props to a var to be used in other functions
function getUserProps(props) {
    userProps = props;
    return `<span></span>`
}

//sets the post of props to a var to be used in  other functions
function getprops(props) {
    postProps = props;
    return `<span></span>`
}

//waits for the tag with the id of cards then create all the cards of post
function startCards(props) {
    waitForElm('#cards').then((elm) => {
        $('#cards').html(postCards(props))
    })
}

//updates the cards when the marker is clicked on
function currentMarkerPostCards(user){
    waitForElm("#cards").then((elm)=>{
        $('#cards').html(markerPostCards(user))
    })
}

//events that run when the page is loaded
export function homepageEvent() {
    $('body').css("background", "none");
    $('body').css("background-color", "#FBFAF2")

    let today = new Date().toLocaleDateString('en-Us', {timeZone :'UTC'});
    console.log(today)
    emptyTheArray()
    savePostEventListener();
    saveEventInfo()
    cancelBtnEventListener();
    searchPostsByItemNameEventListener();
    initMap(userProps.coordinates.split(',')[1], userProps.coordinates.split(',')[0]);
    findUsersWithinRange();
    createGeoJsonForMarkers(usersWithin5Miles);
    createGeoJsonForActiveUser();
    getPostsOfUsersWithin5Miles(usersWithin5Miles)
}

//clears the fields of the post modal will eventually clear the event modal too
function clearModalFields() {
    $('#create-item-name').val("")
    $('#create-description').val("")
    $('#create-photo').val("")
    $('#create-expire-date').val("")
    $('#create-quantity').val("")
}

//check what value of the searchbar is as the user types and updates the cards based on the results
function searchPostsByItemNameEventListener() {
    $('#search-by-item-name-input').keyup(function (e) {
        let itemNameToSearch = $('#search-by-item-name-input').val();
        console.log(itemNameToSearch)
        const options = {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'GET'
        }

        if (itemNameToSearch != "") {
            let p = 0
            do {

                if (postsOfUsersWithin5Miles[p].itemName.toLowerCase().includes(itemNameToSearch.toLowerCase())) {
                    fetch(`http://localhost:8080/api/posts/searchItems/${itemNameToSearch}`, options)
                        .then(res => res.json())
                        .then(data => {
                            startCards(data)
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }
                startCards(postsOfUsersWithin5Miles)
                p++
            } while (p < postsOfUsersWithin5Miles.length)
        } else {
            startCards(postsOfUsersWithin5Miles)
        }

    })
}

//calls the clearModalFields when the cancel-btn of the post modal is clicked
function cancelBtnEventListener() {
    $(document).on('click', '#cancel-btn', function (e) {
        clearModalFields();
    })
}

//gets the values in the modal and calls the function that saves the post then clear out the fields
function savePostEventListener() {
    $(document).on('click', '#create-post-btn', function (e) {
        let currentUser = $('#create-post-btn').data('id');
        let itemName = $('#create-item-name').val()
        let description = $('#create-description').val()
        let itemPhoto = $('#create-photo').val()
        let expiryDate = $('#create-expire-date').val().split("-").reverse().join("-")
        let quantity = $('#create-quantity').val()
        const postReqBody = {
            itemName: itemName,
            description: description,
            itemPhoto: itemPhoto,
            expiryDate: expiryDate,
            quantity: quantity
        }
        savePostFetch(currentUser, postReqBody)
        clearModalFields();
    })
}

//saves the info to the backend
function savePostFetch(username, reqBody) {
    console.log(username)
    console.log(reqBody)
    const options = {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify(reqBody)
    }
    console.log(options)
    fetch(`http://localhost:8080/api/posts/${username}`, options)
        .then(res=>{
            console.log(res)})
        .then(console.log('this post has been created'))
        .catch(err => console.log(err))
}

//check to see if there are users in  a set range of the current user
function findUsersWithinRange() {
    let users = [];
    let currentUserLng = userProps.coordinates.split(',')[1];
    let currentUserLat = userProps.coordinates.split(',')[0];
    for (let i = 0; i < postProps.length; i++) {
        if (userProps.id !== postProps[i].user.id) {
            users.push(postProps[i].user);
        }
    }
    let filteredArrayOfUsers = removeDuplicates(users, 'id');
    for (let i = 0; i < filteredArrayOfUsers.length; i++) {
        let distance = distanceInMiBetweenEarthCoordinates(currentUserLat, currentUserLng, filteredArrayOfUsers[i].coordinates.split(',')[0], filteredArrayOfUsers[i].coordinates.split(',')[1]);
        if (distance <= 5) {
            usersWithin5Miles.push(filteredArrayOfUsers[i]);
        }
    }
    return usersWithin5Miles
}

//remove any duplicate user
function removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject = {};

    for (var i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
    return newArray;
}

function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}

function distanceInMiBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
    var earthRadiusMi = 3958.75;

    var dLat = degreesToRadians(lat2 - lat1);
    var dLon = degreesToRadians(lon2 - lon1);

    lat1 = degreesToRadians(lat1);
    lat2 = degreesToRadians(lat2);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadiusMi * c;
}

//creates the geoJson of the users within 5 miles for the marker to user
function createGeoJsonForMarkers(arrayOfUsers) {
    geoJson = {
        type: "FeatureCollection",
        features: []
    };

    for (let i = 0; i < arrayOfUsers.length; i++) {
        let lon = parseFloat(arrayOfUsers[i].coordinates.split(',')[0]);
        let lat = parseFloat(arrayOfUsers[i].coordinates.split(',')[1]);
        let username = arrayOfUsers[i].username;
        let userId = arrayOfUsers[i].id
        geoJson.features.push({
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [lat, lon]
            },
            properties: {
                id: userId,
                title: username
            }
        })
    }
    return geoJson;
}

//uses the geoJson of the user within 5 miles to create the markers at theses location
function addUserMarkersToMap(geoJsonData, map) {
    console.log(geoJsonData)
    for (const feature of geoJsonData.features) {
// create a HTML element for each feature
        const el = document.createElement('div');
        el.setAttribute("id", `${feature.properties.id}`)
        el.className = 'marker ';
        el.setAttribute('id', `${feature.properties.id}`)


// make a marker for each feature and add it to the map
        new mapboxgl.Marker(el)
            .setLngLat(feature.geometry.coordinates)
            .setPopup(
                new mapboxgl.Popup({offset: 25}) // add popups
                    // .setHTML(
                    //     `<div>${feature.properties.title}</div>`
                    // )
            )
            .addTo(map);
    }
}

//creates the geoJson of the current users location
function createGeoJsonForActiveUser() {
    currentUserGeoJson = {
        type: "FeatureCollection",
        features: []
    };
    let username = userProps.username;
    let lon = parseFloat(userProps.coordinates.split(',')[0]);
    let lat = parseFloat(userProps.coordinates.split(',')[1]);
    let currentUserId = userProps.id
    currentUserGeoJson.features.push({
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [lat, lon]
        },
        properties: {
            id: currentUserId,
            title: username
        }
    })
    return currentUserGeoJson
}

//uses the geoJson of the current user to create a marker at that location
function addActiveUserMarkersToMap(geoJsonData, map) {
    for (const feature of geoJsonData.features) {
// create a HTML element for each feature
        const el = document.createElement('div');
        el.className = 'current-user-marker ';

        el.setAttribute('id', `${feature.properties.id}`)

// make a marker for each feature and add it to the map
        new mapboxgl.Marker(el)
            .setLngLat(feature.geometry.coordinates)
            .setPopup(
                new mapboxgl.Popup({offset: 25}) // add popups
                    .setHTML(
                        `<div>You are here</div>`
                    )
            )
            .addTo(map);
    }
}

// gets all post of a specific user
function getAllUserPost(userId) {
    const options = {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    }
    fetch(`http://localhost:8080/api/users/${userId}`, options)
        .then(res => res.json())
        .then(data => {
            currentMarkerPostCards(data)
        })
        .catch(err => {
            console.log(err)
        })
}

//gets all the post of the user within 5 miles
function getPostsOfUsersWithin5Miles(arrayOfUsers) {
    const options = {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    }

    for (let i = 0; i < arrayOfUsers.length; i++) {
        let id = arrayOfUsers[i].id;
        fetch(`http://localhost:8080/api/posts/searchItemsByUserId/${id}`, options)
            .then(res => res.json())
            .then(data => {
                for (let j = 0; j < data.length; j++) {
                    postsOfUsersWithin5Miles.push(data[j]);
                }
                console.log(postsOfUsersWithin5Miles)
                startCards(postsOfUsersWithin5Miles)
            })
            .catch(err => console.log(err))
    }
}

//empty's the global  arrays
function emptyTheArray() {
    usersWithin5Miles = []
    currentUserGeoJson = []
    postsOfUsersWithin5Miles = []
}

function saveEventInfo(){
    $(document).on("click", "#create-event-btn", function (e){
        e.preventDefault();
        console.log("this button has been click")
        let postId = $(this).data("id")
        let postOwner = $(this).data("name")
        let currentUser = userProps.username
        const eventReqBody={
            meetupDate: $(`#meet-date${postId}`).val().split("-").reverse().join("-"),
            meetupTime:$(`#meet-time${postId}`).val(),
            meetupLocation:$(`#meetUp${postId}`).val()
        }
        const options = {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST',
            body: JSON.stringify(eventReqBody)
        }
        fetch(`http://localhost:8080/api/requester/events/createDonorEvent/${currentUser}/${postOwner}/${postId}`,options)
            .then(fetch(`http://localhost:8080/api/requester/events/createRequesterEvent/${currentUser}/${postOwner}/${postId}`,options))
            .catch(err=> console . log(err))
            .catch(err => console.log(err))
            .finally(setTimeout(location.reload(), 5000))

    })
}