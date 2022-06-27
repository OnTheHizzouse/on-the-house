export default function Navbar(props) {
    //language=HTML
    //todo: change navbar
    return `
        <nav class="navbar navbar-expand-lg fixed-top" style="background-color: #FBFAF2" id="completeNavbar">
            <div class="container-fluid d-flex flex-column mx-auto align-items-center text-center">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav d-flex align-items-center">
                        <div id="navImg">
                            <img id="OTH" src="js/views/img/OTHLogo(final).png" alt="Oth logo">
                            <br>
                        </div>
                        <a class="nav-link mx-5" href="/home" id="nav-home" data-link>HOME</a>
                        <p class="nav-dividers">|</p>
                        <a class="nav-link mx-5" href="/profile" id="nav-profile" data-link>PROFILE</a>
                        <p class="nav-dividers">|</p>
                        <a class="nav-link mx-5" href="/events" id="nav-events" data-link>EVENTS</a>
                        <p class="nav-dividers">|</p>
                        <a class="nav-link mx-5" href="/about" id="nav-about" data-link>ABOUT</a>
                    </div>
                </div>
            </div>
        </nav>
        <div id="navbarSpace"></div>
    `;

}

