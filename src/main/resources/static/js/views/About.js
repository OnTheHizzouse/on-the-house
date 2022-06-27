export default function About() {
    console.log("This is the About Page");
    //language=HTML
    return `
        <title>On the house</title>
        <body>

        <div class="card bg-dark text-white">
            <img src="js/views/img/mission.png" class="card-img-mission" alt="..." height="400">
        </div>
        <br>

        <!--        -About Cards- -->
        <div id="photo-cards" class="row justify-content-center g-4">
            <h3 class="meet-the-team text-center">Meet our Team</h3>
            <div class="col-6" style="width: 15rem;">
                <img src="js/views/img/johnny.jpeg" class="card-img-top" alt="...">
                <br>
                <div class="about-bios text-center">
                    <p>Juan "Johnny" Martinez</p>
                    <br>
                    <a href="https://www.linkedin.com/in/juan-johnny-martinez/">
                        <img alt="..." src="js/views/img/linkedin.png"
                             width=35" height="35">
                    </a>

                    <a href="https://github.com/xJohnnyMartinezx">
                        <img alt="juan-github" src="js/views/img/github.png"
                             width=35" height="35">
                    </a>
                </div>
            </div>

            <div class="col-6" style="width: 15rem;">
                <img src="js/views/img/james.jpeg" class="card-img-top" alt="...">
                <br>
                <div class="about-bios text-center">
                    <p>James Woodward</p>
                    <br>
                    <a href="https://www.linkedin.com/in/james-woodward86/">
                        <img alt="..." src="js/views/img/linkedin.png"
                             width=35" height="35">
                    </a>
                    <a href="https://github.com/JamesRW-git">
                        <img alt="james-github" src="js/views/img/github.png"
                             width=35" height="35">
                    </a>
                </div>
            </div>

            <div class="col-4" style="width: 15rem;">
                <img src="js/views/img/ryan.jpeg" class="card-img-top" alt="...">
                <br>
                <div class="about-bios text-center">
                    <p>Ryan Mendoza</p>
                    <br>
                    <a href="https://www.linkedin.com/in/ryan-mendoza-00b776231/">
                        <img alt="..." src="js/views/img/linkedin.png" 
                             width=35" height="35">

                        <a href="https://github.com/MendozaR9">
                            <img alt="ryan-github" src="js/views/img/github.png"
                                 width=35" height="35">
                        </a>
                </div>
            </div>

            <div class="col-4" style="width: 15rem;">
                <img src="js/views/img/tyreik.jpeg" class="card-img-top" alt="...">
                <br>
                <div class="about-bios text-center">
                    <p>Tyreik Williams</p>
                    <br>
                    <a href="https://www.linkedin.com/in/tyreik-williams-b0563a1a4/">
                        <img alt="..." src="js/views/img/linkedin.png"
                             width=35" height="35">

                        <a href="https://github.com/TWilliams2022">
                            <img alt="ty-github" src="js/views/img/github.png"
                                 width=35" height="35">
                        </a>
                </div>
            </div>

            <div class="col-4" style="width: 15rem;">
                <img src="js/views/img/becca.png" class="card-img-top" alt="...">
                <br>
                <div class="about-bios text-center">
                    <p>Rebecca "Becca" Martinez</p>
                    <br>
                    <a href="https://www.linkedin.com/in/rebecca-martinez30/">
                        <img alt="..." src="js/views/img/linkedin.png"
                             width=35" height="35">

                        <a href="https://github.com/rebecca3093">
                            <img alt="becca-github" src="js/views/img/github.png"
                                 width=35" height="35">
                        </a>
                </div>
            </div>
        </div>
        <br>
        <!-- The Instructor Bios -->
        <div id="photo-cards" class="row justify-content-center g-4">
            <h3 class="the-great-assist text-center">The Great Assistance (Our Instructors)</h3>
            <br>
            <div class="col-6" style="width: 15rem;">
                <img src="js/views/img/casey.jpeg" class="card-img-top" alt="...">
                <br>
                <div class="about-bios text-center">
                    <p>Casey Edwards</p>
                    <p>Code wizzard.</p>
                    <br>
                    <a href="https://www.linkedin.com/in/juan-johnny-martinez/">
                        <img alt="..." src="js/views/img/linkedin.png"
                             width=35" height="35">
                    </a>
                    <a href="https://github.com/xJohnnyMartinezx">
                        <img alt="..." src="js/views/img/github.png"
                             width=35" height="35">
                    </a>
                </div>
            </div>

            <div class="col-6" style="width: 15rem;">
                <img src="js/views/img/ry.jpeg" class="card-img-top" alt="...">
                <br>
                <div class="about-bios text-center">
                    <p>Ry Sutton</p>
                    <p>Tallest man in the world.</p>
                    <br>
                    <a href="https://www.linkedin.com/in/james-woodward86/">
                        <img alt="..." src="js/views/img/linkedin.png"
                             width=35" height="35">
                    </a>
                    <a href="https://github.com/JamesRW-git">
                        <img alt="..." src="js/views/img/github.png"
                             width=35" height="35">
                    </a>
                </div>
            </div>


            <div class="col-4" style="width: 15rem;">
                <img src="js/views/img/jordy.png" class="card-img-top" alt="...">
                <br>
                <div class="about-bios text-center">
                    <p>Jordy Muniz</p>
                    <p>baby genuis.</p>
                    <br>
                    <a href="https://www.linkedin.com/in/rebecca-martinez30/">
                        <img alt="..." src="js/views/img/linkedin.png"
                             width=35" height="35">

                        <a href="https://github.com/rebecca3093">
                            <img alt="..." src="js/views/img/github.png"
                                 width=35" height="35">
                        </a>
                </div>
            </div>
        </div>
        <br>


        </div>


        </body>
    `;
}