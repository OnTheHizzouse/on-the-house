import fetchData from "./fetchData.js";
import createView from "./createView.js";

/**
 * Adds a login event to allow the user to initially obtain a new OAuth2.0 token
 * On a successful response, sets the tokens into storage and redirects to the root
 */
export default function addLoginEvent() {
    SplashEvents();
    console.log("entered addLoginEvent")
    document.querySelector("#login-btn").addEventListener("click", function () {
        let obj = {
            email: document.querySelector("#email").value,
            password: document.querySelector("#password").value,
            grant_type: 'password'
        }
        console.log("got to login event")
        // TODO: these are the only request params /oauth/token accepts in Spring Security
        // TODO: need to possibly implement a random bit handshake w/ SHA256 on the password before sending
        //      -> Alternatively, encrypt the entire request body
        let request = {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa('on-the-house-client:secret')
            },
            body: `grant_type=${obj.grant_type}&username=${obj.email}&password=${obj.password}&client_id=on-the-house-client`
        };

        fetchData(
            {
                route: `/oauth/token`
            },
            request).then((data) => {
            setTokens(data);
            createView("/home");
        });
    });
}

/**
 * Gets the Authorization header needed for making requests to protected endpoints
 * This function should be used only after the user is logged in
 * @returns {{Authorization: string, "Content-Type": string}|{"Content-Type": string}}
 */
export function getHeaders() {
    const token = localStorage.getItem("access_token");
    console.log("local storage token")
    return token
        ? {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + `${token}`}
        : {'Content-Type': 'application/json'};
}

/**
 * Attempts to set the access and refresh tokens needs to authenticate and authorize the client and user
 * @param responseData
 */
function setTokens(responseData) {
    if (responseData.route['access_token']) {
        localStorage.setItem("access_token", responseData.route['access_token']);
        console.log("Access token set");
    }
    if (responseData.route['refresh_token']) {
        localStorage.setItem("refresh_token", responseData.route['refresh_token']);
        console.log("Refresh token set")
    }
}

function SplashEvents() {
    splashBackground();
    removeNavbarSpace();
    $('body').css("background-color", "none")
    $('body').css("background-image", "url('js/views/partials/pexels-photo-6462424.jpeg')")
    RegisterFields();
    RegisterEvent();
    CancelButtonPressed();
    // LoginEvent();
    $('nav').hide();
    $('#navImg').hide();
}

//function that collapse the Registration form
function collapseRegis() {
    $('#register-fields').html('');
    $('#registration-remove-area').html(`
                    <button type="submit" class="btn btn-danger" id="register-btn">Register</button>
                <div id="register-fields"></div>
        `)
}

//when the cancel button is click it calls the collapseRegis function
function CancelButtonPressed() {
    $(document).on('click', '.cancel-btn', function (e) {
        location.reload()
        // collapseRegis();
    })
}

//When the register button is click it will create the registration field
function RegisterFields() {
    // language=html
    $(document).on('click', '#register-btn', function (e) {
        $('#registration-remove-area').html('');
        $('#register-fields').html(`
            <label for="firstName"><b>First Name</b></label>
            <input class="inputFields" placeholder="Enter first name" name="firstname" id="firstName" required>
            <br>
            <label for="lastName"><b>Last Name</b></label>
            <input class="inputFields" placeholder="Enter last name" name="lastname" id="lastName" required>
            <br>
            <label for="uname"><b>Username</b></label>
            <input class="inputFields" placeholder="Enter Username" name="uname" id="username" required>
            <br>
            <label for="phone"><b>Phone</b></label>
            <input class="inputFields" placeholder="Enter Phone Number" name="phone" id="phoneNumber" required>
            <label for="address"><b>Address</b></label>
            <!--            <input type="address" placeholder="Enter Valid Address" name="address" id="address" required>-->
            <div id="geocoder"></div>
            <div id="result"></div>
            <div id="address"></div>
            <br>
            <button type="submit" class="btn btn-primary" id="register-btn-two">Register</button>

        `)

    })


}

//Allows the visitor to register as a user
function RegisterEvent() {
    $(document).on('click', '#register-btn-two', function (e) {
        let newPassword = $('#password').val();
        let newEmail = $('#email').val();
        let geoCoderCoordinates = $('#result').text();
        let geoCoderAddress = $('#address').text();
        let coordinates = geoCoderCoordinates.replace('"',"")
        let address = geoCoderAddress.replace('"', "")
        address = address.replace('"', "")
        console.log(address);

        const reqBody = {
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            username: $('#username').val(),
            email: newEmail,
            password: newPassword,
            phoneNumber: $('#phoneNumber').val(),
            coordinates: coordinates,
            address: address
        }

        let request = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reqBody)
        }

        // const optionEmailCheck = {
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     method: 'GET'
        // }
        //checks if email is already being used
        // checkIfEmailExists(newEmail, optionEmailCheck, newPassword, coordinates,address)

        fetch("http://localhost:8080/api/users/createUser", request)
            .then(alert("You have created a user "))//todo: get rid of this alert
            .catch(err => console.log(err))
            .finally(
                location.reload()
            )

    })
}

//the fetch request that creates a user and add the user to database


//function that checks if email is already being used
// function checkIfEmailExists(checkEmail, options, newPassword,coordinates ,address) {
//
//     fetch(`http://localhost:8080/api/users/email/${checkEmail}`, options)
//         .then(res => res.json())
//         .then(data => {
//             alert("This Email is already being used plz try a different email")
//         })
//         .catch(err => {
//             //check if newPassword is at least 8 characters long
//             checkPasswordLength(checkEmail, newPassword, coordinates,address)
//         })
// }

//function that checks if newPassword is at least 8 characters long
function checkPasswordLength(newEmail, newPassword, coordinates, address) {
    if (newPassword.length >= 8) {

        const reqBody = {
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            username: $('#username').val(),
            email: newEmail,
            password: newPassword,
            phoneNumber: $('#phoneNumber').val(),
            coordinates: coordinates,
            address: address
        }

        const options = {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST',
            body: JSON.stringify(reqBody)
        }
        //calls function that creates the user and saves it to the database
        createUserFetch(options)

    } else {
        alert("The pass need to have a min of 8 characters")
    }
}

//function that collapses the registration form and clears the email and password fields
function emptyAllFields() {
    collapseRegis();
    var emailClear = document.querySelector("#email");
    var passwordClear = document.querySelector("#password");
    emailClear.value = "";
    passwordClear.value = "";
}


//function that checks if the email and password are correct and provides feed if successful
// function LoginEvent() {
//     $(document).on('click', '#login-btn', function (e) {
//         // const options = {
//         //     headers: {
//         //         "Content-Type": "application/json"
//         //     },
//         //     method: 'GET'
//         // }
//         // let checkPassword = $('#password').val();
//         // let checkEmail = $('#email').val();
//         // console.log(checkPassword)
//         // console.log(checkEmail)
//         // fetch(`http://localhost:8080/api/users/email/${checkEmail}`, options)
//         //     .then(res => res.json())
//         //     .then(users => {
//         //         //todo change refactor to with security when implemented
//         //         if (users.password === checkPassword) {
//         //             window.location.href = "/home"
//         //         }
//         //     })
//         //     .catch(err => {
//         //         console.log(err + " The email is not correct")
//         //     })
//
//         addLoginEvent();
//
//
//     })
// }

function removeNavbarSpace() {
    $('#navbarSpace').css("height", "0px")
}

function splashBackground(){
    $('body').css('background-color', '')
    $('body').css('background-image', '')
}