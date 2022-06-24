export default function About() {
    console.log("This is the About Page");
    //language=HTML
    return `
        <title>On the house</title>
        <body>

        <div class="card bg-dark text-white">
            <img src="js/views/img/mission.png" class="card-img-mission" alt="...">
        </div>
        <br>

        <div id="photo-cards" class="row justify-content-center g-4">
            <div class="col-6" style="width: 15rem;">
                <img src="js/views/img/johnny.jpeg" class="card-img-top" alt="...">
                <div class="about-me-mini-bios">
                    <p>Juan "Johnny" Martinez</p>
                    <img src="js/views/img/linkedin.png" class="linkedin-btn justify-content-center" href="#">
                    <img src="js/views/img/github.png" class="github-btn justify-content-center" href="#">
                </div>
            </div>

            <div class="col-6" style="width: 15rem;">
                <img src="js/views/img/james.jpeg" class="card-img-top" alt="...">
                <div class="about-me-mini-bios">
                    <p>James Woodward</p>
                    <img src="js/views/img/linkedin.png" class="linkedin-btn justify-content-center" href="#">
                    <img src="js/views/img/github.png" class="github-btn justify-content-center" href="#">
                </div>
            </div>

            <div class="col-4" style="width: 15rem;">
                <img src="js/views/img/ryan.jpeg" class="card-img-top" alt="...">
                <div class="about-me-mini-bios">
                    <p>Ryan Mendoza</p>
                    <img src="js/views/img/linkedin.png" class="linkedin-btn justify-content-center" href="#">
                    <img src="js/views/img/github.png" class="github-btn justify-content-center" href="#">
                </div>
            </div>

            <div class="col-4" style="width: 15rem;">
                <img src="js/views/img/tyreik.jpeg" class="card-img-top" alt="...">
                <div class="about-me-mini-bios">
                    <p>Tyreik Williams</p>
                    <img src="js/views/img/linkedin.png" class="linkedin-btn justify-content-center" href="#">
                    <img src="js/views/img/github.png" class="github-btn justify-content-center" href="#">
                </div>
            </div>

            <div class="col-4" style="width: 15rem;">
                <img src="js/views/img/becca.png" class="card-img-top" alt="...">
                <div class="justify-content-center">
                    <p>Rebecca "Becca" Martinez</p>
                    <img src="js/views/img/linkedin.png" class="linkedin-btn justify-content-center" href="#">
                    <img src="js/views/img/github.png" class="github-btn justify-content-center" href="#">
                </div>
            </div>
        </div>
        <br>


        </div>


        </body>
    `;
}