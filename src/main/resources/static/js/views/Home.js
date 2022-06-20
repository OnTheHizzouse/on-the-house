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


// 32.778732986171384, -96.80576824306469
function initMap(lng, lat) {
    waitForElm('#map').then((elm) => {
        console.log('hello')
        mapboxgl.accessToken = KEY_mapbox;
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: 13
        });
        map.scrollZoom.disable();
    })
}

waitForElm('#OTH').then((elm) => {
    // $('#OTH').attr("src", "../views/img/othNavImg.png")
})



//Returns a List<User> that exist within 5 miles of the active user
// TODO: Check the Latitude/Longitude of Users. It's stored backwards coming from the registration page compared to seeder

waitForElm('#map').then((elm) => {
    findUsersWithinRange();
    getPostsOfUsersWithin5Miles(findUsersWithinRange());
})

function findUsersWithinRange() {
    let usersWithin5Miles = [];
    let users = [];
    let currentUserLng = userProps.coordinates.split(',')[1];
    let currentUserLat = userProps.coordinates.split(',')[0];
    console.log("User Props Below");
    console.log(userProps);
    console.log("Current User Lat: " + currentUserLat);
    console.log("Current User Lng: " + currentUserLng);
    console.log("************");
    console.log(postProps);
    for (let i = 0; i < postProps.length; i++) {
        if (userProps.id !== postProps[i].user.id) {
            users.push(postProps[i].user);
        }
    }
    let filteredArrayOfUsers = removeDuplicates(users, 'id');
    console.log("Users");
    console.log(users);
    console.log("Filtered Users");
    console.log(filteredArrayOfUsers);
    for (let i = 0; i < filteredArrayOfUsers.length; i++) {
        console.log("User ID: " + filteredArrayOfUsers[i].id);
        console.log("Latitude: " + filteredArrayOfUsers[i].coordinates.split(',')[0]);
        console.log("Longitude: " + filteredArrayOfUsers[i].coordinates.split(',')[1]);
        let distance = distanceInMiBetweenEarthCoordinates(currentUserLat, currentUserLng, filteredArrayOfUsers[i].coordinates.split(',')[0], filteredArrayOfUsers[i].coordinates.split(',')[1]);
        console.log("Distance in miles from current user: " + distance);
        if (distance <= 5) {
            usersWithin5Miles.push(filteredArrayOfUsers[i]);
        }
    }
    console.log(usersWithin5Miles);
    return usersWithin5Miles
}

function removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject  = {};

    for(var i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for(i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
    return newArray;
}

function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}

function distanceInMiBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
    var earthRadiusMi = 3958.75;

    var dLat = degreesToRadians(lat2-lat1);
    var dLon = degreesToRadians(lon2-lon1);

    lat1 = degreesToRadians(lat1);
    lat2 = degreesToRadians(lat2);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return earthRadiusMi * c;
}

function getPostsOfUsersWithin5Miles(arrayOfUsers) {
    let postsOfUsersWithin5Miles = [];
    const options = {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'GET'
    }

    for (let i = 0; i < arrayOfUsers.length; i++) {
        let id = arrayOfUsers[i].id;
        fetch(`http://localhost:8080/api/posts/searchItemsByUserId/${id}`, options)
            .then(res =>res.json())
            .then(data => {
                console.log(data)
                for (let j = 0; j < data.length; j++) {
                    postsOfUsersWithin5Miles.push(data[j]);
                }
            })
            .catch(err => console.log(err))
    }
    console.log(postsOfUsersWithin5Miles);
    console.log(postsOfUsersWithin5Miles.length);
    return postsOfUsersWithin5Miles;
}

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
    initMap(-96.80576824306469, 32.778732986171384);
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

                if (users[p].itemName.toLowerCase().includes(itemNameToSearch.toLowerCase())) {
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