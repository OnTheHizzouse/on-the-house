import {getHeaders} from "../auth.js";
import {myPostCards, postCards} from "./partials/postCards.js";

const postUrl = "http://localhost:8080/api/posts"
let postId = "";


export default function Profile(props) {
    console.log("This is the Profile page");
    console.log(props)
    console.log(props.posts)
    profileProps = props;
// language=html
    return `
        <body>
        <div class="d-flex justify-content-center">
            <div style="width: 80%">
                <div class="row">
                    <div class="col-sm-3">
                        <h5 class="mb-0">Full Name</h5>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <p>${profileProps.user.firstName} ${profileProps.user.lastName}</p>
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
            </div>
        </div>

        <div id="profileCards" class="row mt-4 justify-content-center">
            ${myPostCards(profileProps.posts)}
        </div>

        </body>
    `;

}

export function userPostEvents() {
    $('body').css("background", "none");
    $('body').css("background-color", "#FBFAF2")
    deletePostListener();
    saveEditsPostListener();
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
                quantity: postQuantity

            })
        };
        console.log(request);


        fetch(`${postUrl}/${postId}`, request)
            .then(res => {
                // location.reload();
                $('#profileCards').html('');
                // myPostCards(profileProps.posts);
            })
            .then(res => {
                $('#profileCards').html(`${myPostCards(profileProps.posts)}`);
            })
            .catch(err => console.log(err));
    })
}

var userContinue = 0;
var profileProps;

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
        //CAUSING ERRORS WHEN UNCOMMENTED...FOR NOW JUST IMPLEMENTING PAGE RELOAD
        //     .finally(() => {
        //     createView("/profile")
        // })
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


