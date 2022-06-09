export default function Splash(props) {
    console.log("This is the Splash page");
// language=html
    return `
        <!--        header is important do not remove-->
        <header>
            <h1></h1>
        </header>
        <main>
            <form id="box" action="action_page.php" method="post">
                <div class="container">

                    <label for="email"><b>E-mail</b></label>
                    <input type="email" placeholder="Enter E-mail" name="email" id="email" required>
                    
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" id="password" required>

                    <span id="registration-remove-area">
                        <button type="submit" id="login-btn">Login</button>
                    <button type="submit" class="btn btn-danger" id="register-btn">Register</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember"> Remember me
                    </label>

                </div>

                <div id="register-fields"></div>

                <div class="container" style="background-color:#f1f1f1">
                    <button type="button" class="cancelbtn" id="cancel-btn">Cancel</button>
                    <span class="psw">Forgot <a href="#">password?</a></span>
                </div>
                </span>
            </form>
        </main>
    `;
}
export function SplashEvents(){
    RegisterFields();
    RegisterEvent();
    CancelButtonPressed();
    LoginEvent();
}


function collapseRegis(){
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


function CancelButtonPressed() {
    $(document).on('click', '#cancel-btn', function (e) {
      collapseRegis();
    })
}

function RegisterFields() {
    // language=html
    $(document).on('click', '#register-btn', function (e) {
        $('#registration-remove-area').html('');
        $('#register-fields').html(`
            <label for="firstName"><b>First Name</b></label>
            <input type="name" placeholder="Enter first name" name="firstname" id="firstName" required>
            <br>
            <label for="lastName"><b>Last Name</b></label>
            <input type="name" placeholder="Enter last name" name="lastname" id="lastName" required>
            <br>
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" id="username" required>
            <br>
            <label for="address"><b>Address</b></label>
            <input type="address" placeholder="Enter Valid Address" name="address" id="address" required>
            <br>
            <label for="phone"><b>Phone</b></label>
            <input type="phone" placeholder="Enter Phone Number" name="phone" id="phoneNumber" required>

            <button type="submit" class="btn btn-danger" id="register-btn-two">Register</button>

        `)
    })


}

 function RegisterEvent() {
    $(document).on('click', '#register-btn-two', function (e) {
        console.log('clicked');
        let newPassword = $('#password').val();
        if (newPassword.length >= 8) {

            const reqBody = {
                firstName: $('#firstName').val(),
                lastName: $('#lastName').val(),
                username: $('#username').val(),
                email: $('#email').val(),
                password: newPassword,
                phoneNumber: $('#phoneNumber').val(),
                address: $('#address').val()
            }

            const options = {
                headers: {
                    "Content-Type": "application/json"
                },
                method: 'POST',
                body: JSON.stringify(reqBody)
            }

            fetch("http://localhost:8080/api/users/createUser", options)
                .then(res =>{ res.json()
                    console.log(res)
                })
                .then(alert("You have created a user 🌚"))//todo: get rid of this alert
                .catch(err => console.log(err))
                .finally(
                   emptyAllFields()
                )

        } else {
            alert("The pass need to have a min of 8 characters")
        }
    })
}


function  emptyAllFields(){
    collapseRegis();
    var emailClear  = document.querySelector("#email");
    var passwordClear = document.querySelector("#password");
    emailClear.value = "";
    passwordClear.value = "";
}


function LoginEvent(){
    $(document).on('click', '#login-btn', function (e) {
        console.log('clicked');
        const options = {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'GET'
        }
        fetch("http://localhost:8080/api/users", options)
            .then(res => res.json())
            .then(users => {
                let checkPassword = $('#password').val();
                let checkEmail = $('#email').val();
                for (let i = 0; i < users.length; i++) {
                    if (users[i].email == checkEmail && users[i].password == checkPassword) {
                        console.log(users[i]);
                        alert("This user exists!")
                    }
                }
               /* console.log(users)*/
            })
            .catch(err => console.log(err))
    })
}