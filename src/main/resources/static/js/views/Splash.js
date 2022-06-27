export default function Splash(props) {
// language=HTML
    return `
        <!--        header is important do not remove-->
        <html lang="eng">
        <header>
            <h1></h1>
        </header>
        <main>

            <style>
                #geocoder {
                    z-index: 1;
                }

                .mapboxgl-ctrl-geocoder {
                    min-width: 90%;
                }
            </style>


            <form id="box">
                <div class="container row-2 align-content-center ">
                    <div class="container m-2 ">
                        <div><img id="OTH" src="js/views/img/OTHLogo.png" alt="Oth logo"></div>
                        <div>
                            <h1>Join Us!</h1>
                            <p>As a community sharing application we foster the exchange of goods with the goal of
                                reducing
                                food waste and food insecurity within local communities. We strive to create a
                                comfortable and
                                welcoming environment for all users to facilitate and encourage community interaction
                                and cooperation.</p>
                        </div>
                    </div>
                    
                    <div class="container m-2">
                        <label for="email"><b>E-mail</b></label>
                        <input class="inputFields" placeholder="Enter E-mail" name="email" id="email" required>
                        <label for="psw"><b>Password</b></label>
                        <input class="inputFields" placeholder="Enter Password" name="psw" id="password" type="password"
                               required>
                        <span id="registration-remove-area">
                        <button type="submit" id="login-btn">Login</button>
                    <button type="submit" class="btn btn-primary" id="register-btn">Register</button>
                    </div>
                    <div id="register-fields" class="container m-2"></div>

                    <div class="container m-2 pb-3">
                        <button type="button" class="cancel-btn">Cancel</button>
                    </div>
                </div>
            </form>
        </main>
    `;
}

//Event listener
export function SplashEvents() {
    splashBackground();
    removeNavbarSpace();
    $('body').css("background-color", "none")
    $('body').css("background-image", "url('js/views/partials/pexels-photo-6462424.jpeg')")
    RegisterFields();
    RegisterEvent();
    CancelButtonPressed();
    LoginEvent();
    $('nav').hide();
    $('#navImg').hide();
}

//function that collapse the Registration form
function collapseRegis() {
    $('#register-fields').html('');
    $('#registration-remove-area').html(`
        <button type="submit">Login</button>
                    <button type="submit" class="btn btn-danger" id="register-btn">Register</button>
                <div id="register-fields"></div>
        `)
}

//when the cancel button is click it calls the collapseRegis function
function CancelButtonPressed() {
    $(document).on('click', '.cancel-btn', function (e) {
        location.reload()
        collapseRegis();
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

        const optionEmailCheck = {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'GET'
        }
        //checks if email is already being used
        checkIfEmailExists(newEmail, optionEmailCheck, newPassword, coordinates,address)

    })
}

//the fetch request that creates a user and add the user to database
function createUserFetch(options) {
    fetch("http://localhost:8080/api/users/createUser", options)
        .then(alert("You have created a user 🌚"))//todo: get rid of this alert
        .catch(err => console.log(err))
        .finally(
            location.reload()
        )
}

//function that checks if email is already being used
function checkIfEmailExists(checkEmail, options, newPassword,coordinates ,address) {

    fetch(`http://localhost:8080/api/users/email/${checkEmail}`, options)
        .then(res => res.json())
        .then(data => {
            alert("This Email is already being used plz try a different email")
        })
        .catch(err => {
            //check if newPassword is at least 8 characters long
            checkPasswordLength(checkEmail, newPassword, coordinates,address)
        })
}

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
function LoginEvent() {
    $(document).on('click', '#login-btn', function (e) {
        const options = {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'GET'
        }
        let checkPassword = $('#password').val();
        let checkEmail = $('#email').val();
        console.log(checkPassword)
        console.log(checkEmail)
        fetch(`http://localhost:8080/api/users/email/${checkEmail}`, options)
            .then(res => res.json())
            .then(users => {
                //todo change refactor to with security when implemented
                if (users.password === checkPassword) {
                    window.location.href = "/home"
                }
            })
            .catch(err => {
                console.log(err + " The email is not correct")
            })
    })
}

function removeNavbarSpace() {
    $('#navbarSpace').css("height", "0px")
}

function splashBackground(){
    $('body').css('background-color', '')
    $('body').css('background-image', '')
}