import {waitForElm} from "../mapboxSearch.js";
import {postCards} from "./partials/postCards.js";
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
                border: .5rem solid #6a9f5a;
            }
            .marker {
                background-image: url('js/views/img/recycleLogo.png');
                background-size: cover;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                cursor: pointer;
            }
        </style>

        ${getprops(props.posts)}
        ${getUserProps(props.user)}

        <!--TODO: MOVE INPUT FIELD/SEARCHBAR TO WHERE IT NEEDS TO BE-->

        <h4>Hello, ${props.user.username}</h4>
        <div class="d-flex justify-content-center mb-3">
            <div id="map"></div>
        </div>
        <!--      todo  this add some white space on the right problem is the margin-->
        <div class="row justify-content-center mb-3">
            <div class="col-4 my-auto">
                <input class="inputFields" placeholder="Search items..." name="search-by-item-name"
                       id="search-by-item-name-input" required>
            </div>
            <div class="col-3">
                <button type="button" class="btn btn-success" id="search-by-item-name-submit-btn">Search</button>
            </div>

            <div class="col-3 my-auto">
                ${createPostModal(props.user.username)}
            </div>
        </div>
        <!--      todo  this add some white space on the right problem is the margin-->

        <div id="cards" class="row justify-content-center g-2">
        </div>
        <div>
            ${myFooter()}
        </div>
        </div>
        </body>
    `;
}

var postProps;
var userProps;
var usersWithin5Miles = [];
var geoJson;

// [-79.4512, 43.6568]
function initMap(lng, lat) {
    waitForElm('#map').then((elm) => {
        mapboxgl.accessToken = KEY_mapbox;
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: 13
        });
        map.scrollZoom.disable();
        addUserMarkersToMap(geoJson, map);
    })
}

waitForElm('#OTH').then((elm) => {
    // $('#OTH').attr("src", "../views/img/othNavImg.png")
})

function getUserProps(props) {
    userProps = props;
    return `<span></span>`
}

function getprops(props) {
    postProps = props;
    return `<span></span>`
}

function startCards(props) {
    waitForElm('#cards').then((elm) => {
        $('#cards').html(postCards(props))
    })
}

export function homepageEvent() {
    savePostEventListener();
    cancelBtnEventListener();
    searchPostsByItemNameEventListener();
    startCards(postProps)
    initMap(userProps.coordinates.split(',')[1], userProps.coordinates.split(',')[0]);
    findUsersWithinRange();
    createGeoJsonForMarkers(usersWithin5Miles);
}

function clearModalFields() {
    $('#create-item-name').val("")
    $('#create-description').val("")
    $('#create-photo').val("")
    $('#create-expire-date').val("")
    $('#create-quantity').val("")
}

function searchPostsByItemNameEventListener() {
    $(document).on('click', '#search-by-item-name-submit-btn', function (e) {
        let itemNameToSearch = $('#search-by-item-name-input').val();

        const options = {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'GET'
        }

        if (itemNameToSearch != "") {
            let p = 0
            do {

                if (postProps[p].itemName.toLowerCase().includes(itemNameToSearch.toLowerCase())) {
                    fetch(`http://localhost:8080/api/posts/searchItems/${itemNameToSearch}`, options)
                        .then(res => res.json())
                        .then(data => {
                            startCards(data)
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }
                startCards(postProps)
                p++
            } while (p < postProps.length)
        } else {
            startCards(postProps)
        }

    })
}

function cancelBtnEventListener() {
    $(document).on('click', '#cancel-btn', function (e) {
        clearModalFields();
    })
}

function savePostEventListener() {
    $(document).on('click', '#create-post-btn', function (e) {
        let currentUser = $('#create-post-btn').data('id');
        let itemName = $('#create-item-name').val()
        let description = $('#create-description').val()
        let itemPhoto = $('#create-photo').val()
        let expiryDate = $('#create-expire-date').val()
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
        .then(console.log('this post has been created'))
        .catch(err => console.log(err))
}

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

function createGeoJsonForMarkers(arrayOfUsers) {
    geoJson = {
        type: "FeatureCollection",
        features: []
    };

    for (let i = 0; i < arrayOfUsers.length; i++) {
        let lon = parseFloat(arrayOfUsers[i].coordinates.split(',')[0]);
        let lat = parseFloat(arrayOfUsers[i].coordinates.split(',')[1]);
        let username = arrayOfUsers[i].username;
        geoJson.features.push({
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [lat, lon]
            },
            properties: {
                title: username
            }
        })
    }
    return geoJson;
}

function addUserMarkersToMap(geoJsonData, map) {
    for (const feature of geoJsonData.features) {
// create a HTML element for each feature
        const el = document.createElement('div');
        el.className = 'marker';

// make a marker for each feature and add it to the map
        new mapboxgl.Marker(el)
            .setLngLat(feature.geometry.coordinates)
            .setPopup(
                new mapboxgl.Popup({offset: 25}) // add popups
                    .setHTML(
                        `<h3>${feature.properties.title}</h3>`
                    )
            )
            .addTo(map);
    }
}