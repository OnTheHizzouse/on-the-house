export default function Home(props) {
    console.log("The frontend did it. HER FAULT");
// language=html
    return `
        <header>
            <h1>OTH</h1>
        </header>
        <main>
            <form id="box" action="action_page.php" method="post">
                <div class="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" id="username" required>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" id="password" required>

                    <span id="registration-remove-area">
                        <button type="submit">Login</button>
                    <button type="submit" class="btn btn-danger" id="register-btn">Register</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember"> Remember me
                    </label>

                </div>

                <div id="register-fields"></div>

                <div class="container" style="background-color:#f1f1f1">
                    <button type="button" class="cancelbtn">Cancel</button>
                    <span class="psw">Forgot <a href="#">password?</a></span>
                </div>
                </span>
            </form>
        </main>
    `;
}

RegisterFields()

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
            <label for="email"><b>E-mail</b></label>
            <input type="email" placeholder="Enter E-mail" name="email" id="email" required>
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

RegisterEvent()

export function RegisterEvent() {
    $(document).on('click', '#register-btn-two', function (e) {
        console.log('clicked');
        const reqBody = {
            firstName: $('#firstName').val(),
            lastName:$('#lastName').val(),
            username: $('#username').val(),
            email: $('#email').val(),
            password: $('#password').val(),
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
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))

    })
}