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

        <!--TODO: MOVE INPUT FIELD/SEARCHBAR TO WHERE IT NEEDS TO BE-->

        <h4>Hello, ${props.user.username}</h4>
        <div class="d-flex justify-content-center mb-3">
            <div id="map"></div>
        </div>
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

// [-79.4512, 43.6568]
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
    initMap(-79.4512, 43.6568);
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