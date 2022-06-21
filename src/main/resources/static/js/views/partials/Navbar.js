export default function Navbar(props) {
    //language=HTML
    //todo: change navbar
    return `

<div>
  <div id="navImg">
  <img id="OTH" src="js/views/img/othNavImg.png" alt="Oth logo">
</div>
        <nav class="navbar navbar-expand-lg" style="background-color: #64AE8B">
            <div class="container-fluid d-flex flex-column mx-auto align-items-center text-center">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link" href="/home" data-link>HOME</a>
                        <a class="nav-link" href="/profile" data-link>PROFILE</a>
                        <a class="nav-link" href="/events"data-link>EVENTS</a>
                        <a class="nav-link" href="#">ABOUT</a>
                    </div>
                </div>
            </div>
        </nav>
    `;
}
