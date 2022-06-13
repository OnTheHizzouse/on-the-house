export default function Splash(props) {
    console.log("This is the Splash page");

// language=HTML
    return `
        <!--        header is important do not remove-->
        <html lang="eng">
        <header>
            <h1></h1>
        </header>
        <main>
            <form id="box" action="action_page.php" method="post">
                <div class="container">

                    <style>
                        #geocoder {
                            z-index: 1;
                            margin: 20px;
                        }

                        .mapboxgl-ctrl-geocoder {
                            min-width: 100%;
                        }
                    </style>

                    <label for="email"><b>E-mail</b></label>
                    <input class="inputFields" placeholder="Enter E-mail" name="email" id="email" required>
                    <br>
                    <label for="psw"><b>Password</b></label>
                    <input class="inputFields" placeholder="Enter Password" name="psw" id="password" required>

                    <span id="registration-remove-area">
                        <button type="submit" id="login-btn">Login</button>
                    <button type="submit" class="btn btn-danger" id="register-btn">Register</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember"> Remember me
                    </label>

                </div>

                <div id="register-fields"></div>

                <div class="container" style="background-color:#f1f1f1">
                    <button type="button" class="cancel-btn">Cancel</button>
                    <span class="psw">Forgot <a href="#">password?</a></span>
                </div>
                </span>
            </form>
        </main>



    `;
}

//Event listener
export function SplashEvents() {
    RegisterFields();
    RegisterEvent();
    CancelButtonPressed();
    LoginEvent();
    $('nav').hide()
}

//function that collapse the Registration form
function collapseRegis() {
    $('#register-fields').html('');
    $('#registration-remove-area').html(`
        <button type="submit">Login</button>
                    <button type="submit" class="btn btn-danger" id="register-btn">Register</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember"> Remember me
                    </label>

                </div>

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
            <button type="submit" class="btn btn-danger" id="register-btn-two">Register</button>

            <script src="js/mapboxSearch.js"></script>
        `)

    })


}

//Allows the visitor to register as a user
function RegisterEvent() {
    $(document).on('click', '#register-btn-two', function (e) {
        let newPassword = $('#password').val();
        let newEmail = $('#email').val();
        let geoCoderAddress = $('#result').text();
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
        checkIfEmailExists(newEmail, optionEmailCheck, newPassword, address)

    })
}

//the fetch request that creates a user and add the user to database
function createUserFetch(options) {
    fetch("http://localhost:8080/api/users/createUser", options)
        .then(res => {
            res.json()
            console.log(res)
        })
        .then(alert("You have created a user 🌚"))//todo: get rid of this alert
        .catch(err => console.log(err))
        .finally(
            emptyAllFields()
        )
}

//function that checks if email is already being used
function checkIfEmailExists(checkEmail, options, newPassword, address) {

    fetch(`http://localhost:8080/api/users/${checkEmail}`, options)
        .then(res => res.json())
        .then(data => {
            alert("This Email is already being used plz try a different email")
        })
        .catch(err => {
            //check if newPassword is at least 8 characters long
            checkPasswordLength(checkEmail, newPassword, address)
        })
}

//function that checks if newPassword is at least 8 characters long
function checkPasswordLength(newEmail, newPassword, address) {
    if (newPassword.length >= 8) {

        const reqBody = {
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            username: $('#username').val(),
            email: newEmail,
            password: newPassword,
            phoneNumber: $('#phoneNumber').val(),
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
        console.log('clicked login');
        const options = {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'GET'
        }
        let checkPassword = $('#password').val();
        let checkEmail = $('#email').val();
        fetch(`http://localhost:8080/api/users/${checkEmail}`, options)
            .then(res => res.json())
            .then(users => {
                //todo change refactor to with security when implemented
                if (users.password == checkPassword) {
                    window.location.href = "/home"
                }
            })
            .catch(err => {
                console.log(err + " The email is not correct")
            })
    })
}