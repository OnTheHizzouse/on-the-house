export default function Navbar(props) {
    //language=HTML
    //todo: change navbar
    return `
<div style="background-color: #ddfcee">
  
<img id="OTH" src="js/views/img/othNavImg.png" alt="Oth logo">
</div>
        <nav class="navbar navbar-expand-lg" style="background-color: #64AE8B">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link" href="/home" data-link>Home</a>
                        <a class="nav-link" href="#">Features</a>
                        <a class="nav-link" href="/events"data-link>Events</a>
                        <a class="nav-link" href="/profile" data-link>Profile</a>
                    </div>
                </div>
            </div>
        </nav>
    `;
}
