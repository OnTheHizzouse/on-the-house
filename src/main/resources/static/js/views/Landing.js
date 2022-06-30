import {waitForElm} from "../mapboxSearch.js";
import {landingCards} from "./partials/postCards.js";
import {myFooter} from "../views/partials/footer.js";
import {getHeaders} from "../auth.js";

let url = `http://localhost:8080`

export default function Landing(props) {
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
        
        ${getUsersProps(props.users)}
        ${getPostsProps(props.posts)}
        
        <div class="d-flex justify-content-center">
            <p class="mb-0">This is an example of what you might see in your neighborhood!</p>
        </div>
        <div class="d-flex justify-content-center">
            <p class="mt-2">Click a <img src="js/views/img/postmarker.png" id="postmarker"> on the map to see what people are sharing!</p>
        </div>
        <div class="d-flex justify-content-center mb-5">
            <div id="map"></div>
        </div>
        <div class="d-flex justify-content-center mb-4">
            <div class="my-auto mx-5">
                <input style="width: 120%" class="inputFields" placeholder="Search items..." name="search-by-item-name"
                       id="search-by-item-name-input" required>
            </div>
        </div>
        <!--      todo  this add some white space on the right problem is the margin-->

        <p class="text-center">Below are some examples of what is currently being offered to share!</p>
        <div id="cards" class="row justify-content-center g-2">
        </div>

        </div>
        ${myFooter()}
        </body>
    `
}

var usersProp;
var postsProps;
var geoJson;
var newArrayOfUsers = [];

export function LandingEvents() {
    $('body').css("background", "none");
    $('body').css("background-color", "#FBFAF2")
    emptyTheArray();
    changeNavbarLanding();
    console.log("Users")
    console.log(usersProp)
    console.log("Posts")
    console.log(postsProps)
    createNewArrayOfUsers(usersProp);
    createGeoJsonForMarkers(newArrayOfUsers);
    initMap(-96.80432438850403, 32.780694491314726);
    getAllPostsForLanding(postsProps);
    searchPostsByItemNameEventListener();
}

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
        // addActiveUserMarkersToMap(currentUserGeoJson, map);
        $(".marker").click(function () {
            getAllUserPost(this.id)
        })
    })
}

function getUsersProps(props) {
    usersProp = props;
    return `<span></span>`
}

function createNewArrayOfUsers(props) {
    for (let i = 0; i < props.length; i++) {
         newArrayOfUsers.push(props[i]);
    }
    return newArrayOfUsers;
}

function getPostsProps(props) {
    postsProps = props;
    return `<span></span>`
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

function addUserMarkersToMap(geoJsonData, map) {
    console.log(geoJsonData)
    for (const feature of geoJsonData.features) {
// create a HTML element for each feature
        const el = document.createElement('div');
        el.setAttribute("id", `${feature.properties.id}`)
        el.className = 'marker';
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

function startCards(props) {
    waitForElm('#cards').then((elm) => {
        $('#cards').html(landingCards(props))
    })
}

function getAllPostsForLanding(arrayOfPosts) {
    console.log("Array of Posts")
    console.log(arrayOfPosts)
    const options = {
        headers: getHeaders(),
        method: 'GET'
    }

    for (let i = 0; i < arrayOfPosts.length; i++) {
        let id = arrayOfPosts[i].id;
        fetch(url + `/api/posts/${id}`, options)
            .then(res => res.json())
            .then(data => startCards(arrayOfPosts))
    }
}

function emptyTheArray() {
    newArrayOfUsers = [];
}

function changeNavbarLanding() {
    $('#nav-home').attr('href', '/');
    $('#nav-profile').attr('href', '/login');
    $('#nav-events').attr('href', '/login');
    $('#nav-about').html(`<a class="nav-link mr-5" href="/login" id="nav-about" data-link>LOGIN/REGISTER</a>`);
}

function searchPostsByItemNameEventListener() {
    $('#search-by-item-name-input').keyup(function (e) {
        let itemNameToSearch = $('#search-by-item-name-input').val();
        console.log(itemNameToSearch)
        const options = {
            headers: getHeaders(),
            method: 'GET'
        }

        if (itemNameToSearch != "") {
            let p = 0
            do {

                if (postsProps[p].itemName.toLowerCase().includes(itemNameToSearch.toLowerCase())) {
                    fetch(url + `/api/posts/searchItems/${itemNameToSearch}`, options)
                        .then(res => res.json())
                        .then(data => {
                            startCards(data)
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }
                startCards(postsProps)
                p++
            } while (p < postsProps.length)
        } else {
            startCards(postsProps)
        }

    })
}

function getAllUserPost(userId) {
    const options = {
        headers: getHeaders(),
        method: 'GET'
    }
    fetch(url + `/api/users/${userId}`, options)
        .then(res => res.json())
        .then(data => {
            startCards(data.posts)
        })
        .catch(err => {
            console.log(err)
        })
}