export default function About() {
    console.log("This is the About Page");
    //language=HTML
    return `
        <title>On the house</title>
        <body>
        
        <div id="about-me-card" class="row justify-content-center">
                <img src="js/views/img/produce-cropped.jpg" class="card-img-produce justify-content-center" alt="...">
                <div class="card-body">
                    <h5 class="card-title">What are we all about?</h5>
                    <p class="card-text">As a community sharing application we will foster the
                        exchange of goods with the goal
                        of reducing food waste and food insecurity within local communities. We hope to create a
                        comfortable
                        and welcoming environment for all users that will facilitate and encourage community interaction
                        and
                        cooperation.</p>
                </div>
        </div>

        <div id="photo-cards" class="row justify-content-center g-4">
            <div class="card col-6" style="width: 15rem;">
                <img src="js/views/img/johnny.jpeg" class="card-img-top" alt="...">
                <p>Juan "Johnny" Martinez</p>
            </div>

            <div class="card col-6" style="width: 15rem;">
                <img src="js/views/img/james.jpeg" class="card-img-top" alt="...">
                <p>James Woodward</p>
            </div>

            <div class="card col-4" style="width: 15rem;">
                <img src="js/views/img/ryan.jpeg" class="card-img-top" alt="...">
                <p>Ryan Mendoza</p>
            </div>

            <div class="card col-4" style="width: 15rem;">
                <img src="js/views/img/tyreik.jpeg" class="card-img-top" alt="...">
                <p>Tyreik Williams</p>
            </div>

            <div class="card col-4" style="width: 15rem;">
                <img src="js/views/img/becca.png" class="card-img-top" alt="...">
                <p>Rebecca Martinez</p>
            </div>
        </div>
        </body>
    `;
}