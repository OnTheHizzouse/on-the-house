import {getHeaders} from "../auth.js";
import {myFooter} from "../views/partials/footer.js";
import {myPostCards} from "./partials/postCards.js";
import {editPostModal, editUserProfileModal} from "./partials/modals.js";

let url = `http://localhost:8080`
const postUrl = url + "/api/posts"
const profileEditURL = url + "/api/users"
let postId = "";


export default function Profile(props) {
    console.log("This is the Profile page");
    console.log(props.user.posts)
    // console.log(props)
    // console.log(props.posts)
    profileProps = props;
// language=html
    return `
        <body>
        <div class="d-flex justify-content-center">
            <div style="width: 80%">
                <div class="row">
                    <div class="col-sm-3">
                            <h5 class="mb-0">Username</h5>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        ${profileProps.user.username}
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                        <h5 class="mb-0">Full Name</h5>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <p class="mb-0">${profileProps.user.firstName} ${profileProps.user.lastName}</p>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                        <h5 class="mb-0">Email</h5>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        ${profileProps.user.email}
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                        <h5 class="mb-0">Phone Number</h5>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        ${profileProps.user.phoneNumber}
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                        <h5 class="mb-0">Address</h5>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        ${profileProps.user.address}
                    </div>
                </div>
                <div class="my-3 d-flex justify-content-end">
                    ${editUserProfileModal(profileProps.user)}
                </div>
            </div>
        </div>


    
<!--MY PROFILE POSTCARDS-->
        <div class="row mt-4 justify-content-center" id="profileCards">
            ${myPostCards(props.user)}
            

        </div>
        ${myFooter()}
        </body>
    `;

}

var userContinue = 0;
var profileProps;


export function userPostEvents() {

    $('body').css("background", "none");
    $('body').css("background-color", "#FBFAF2")
    // changeNavbarLanding();
    deletePostListener();
    saveEditsPostListener();
    saveProfileEventListener();

}


//********** EDIT POST FUNCTION *************
function saveEditsPostListener() {
    $(document).on("click", "#save-edit-post-btn", function (e) {
        e.preventDefault();
        console.log("save button has been clicked")

        postId = $(this).data("id");
        showAlert();

        const postTitle = $(`#itemName-${postId}`).val();
        const postDescription = $(`#description-${postId}`).val();
        const postPhoto = $(`#photo-${postId}`).val();
        const postExpiryDate = $(`#expiryDate-${postId}`).val();
        const postQuantity = $(`#quantity-${postId}`).val();


        // let editedPost{
        //
        // }
        // console.log(editedPost);

        const request = {
            method: "PUT",
            headers: getHeaders(),
            body: JSON.stringify({
                id: postId,
                itemName: postTitle,
                description: postDescription,
                itemPhoto: postPhoto,
                expiryDate: postExpiryDate,
                quantity: postQuantity,
            })
        };
        console.log(request);


        fetch(`${postUrl}/${postId}`, request)
            .then(res => {
                // location.reload();
            })
            .catch(err => console.log(err));
    })
}

//********** DELETE POST FUNCTION *************
function deletePostListener() {
    $(document).on('click', '#deleteBtn', function (e) {
        e.preventDefault();
        console.log("delete button clicked");
        confirmAction();
        const id = $(this).data("id");

        if (userContinue === 0) {
            const request = {
                method: "DELETE"
            }

            fetch(`${postUrl}/${id}`, request)
                .then(res => {
                    console.log(res.status);
                }).catch(error => {
                console.log(error);
            }).finally(() => {
                location.reload()
            })
        } else {
            return null;
        }
    })
}

//*******************EDIT POSTS FUNCTION**********************
function saveProfileEventListener() {
    $(document).on("click", "#save-edit-profile-btn", function (e) {
        e.preventDefault();
        console.log("Save Profile Button has been clicked");


        let userId = $(this).data("id");


        const profileUsername = $(`#username-${userId}`).val();
        const profileFirstName = $(`#first-name-${userId}`).val();
        const profileLastName = $(`#last-name-${userId}`).val();
        const profileEmail = $(`#email-${userId}`).val();
        const profilePhoneNumber = $(`#phone-number-${userId}`).val();
        const geoCoderCoordinates = $('#result').text();
        const geoCoderAddress = $('#address').text();
        let coordinates = geoCoderCoordinates.replace('"',"")
        let address = geoCoderAddress.replace('"', "")

        console.log($(this).data("coordinates"));

        if(address === "" || address === null || coordinates === null) {
            address = $(this).data("address");
            coordinates = $(this).data("coordinates");
        }

        console.log(address);

        const reqBody = {
            username: profileUsername,
            firstName: profileFirstName,
            lastName: profileLastName,
            email: profileEmail,
            phoneNumber: profilePhoneNumber,
            address: address,
            coordinates: coordinates
        }

        console.log("REQUEST BODY")
        console.log(reqBody)

        const request = {
            method: "PUT",
            headers: getHeaders(),
            body: JSON.stringify(reqBody)
        }
        console.log("REQUEST HERE")
        console.log(request);

        fetch(`${profileEditURL}/${userId}`, request)
            .then(location.reload)
            .catch(err => console.log(err));
    })
}

function showAlert() {
    alert("You've saved changes!");
}

//confirmation (Y/N)
function confirmAction() {
    let confirmAction = confirm("Would you like to delete this post?");
    if (confirmAction) {
        userContinue = 0;
        alert("Post deleted");
    } else {
        userContinue = 1;
        alert("Canceled");
    }

}

// function changeNavbarLanding() {
//     $('#nav-home').attr('href', '/home');
//     $('#nav-profile').attr('href', '/profile');
//     $('#nav-events').attr('href', '/events');
//     $('#nav-about').html(`<a class="nav-link mr-5" href="/about" id="nav-about" data-link>ABOUT</a>`);
// }


