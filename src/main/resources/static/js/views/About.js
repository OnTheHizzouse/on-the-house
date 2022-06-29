import {myFooter} from "../views/partials/footer.js";

export default function About() {
    console.log("This is the About Page");
    //language=HTML
    return `
        <title>On the house</title>
        <body>

        <!--        <div class="card text-center justify-content-center" id="missionBio">-->
        <!--            <div class="card-body">-->
        <!--                <h3 class="card-title" id="meet-the-team">What were about.</h3>-->
        <!--                <p class="card-text">As a community sharing application we foster the exchange of goods with the goal of-->
        <!--                    reducing food waste and food insecurity within local communities. We strive to create a-->
        <!--                    comfortable and welcoming environment for all users to facilitate and encourage community interaction-->
        <!--                    and cooperation. Join us in our mission and also donate to your local food bank and food pantry to help-->
        <!--                    further.-->
        <!--                    -On The House</p>-->
        <!--                -->
        <!--            </div>-->
        <!--        </div>-->


        <div class="card bg-dark text-white">
            <img src="js/views/img/mission.png" class="card-img-mission" alt="..." height="400">
        </div>

        <!--        -About Cards- -->
        <div id="photo-cards" class="row justify-content-center g-4">
            <h3 class="meet-the-team text-center">Meet our Team</h3>
            <div class="col-6" style="width: 15rem;">
                <img src="js/views/img/johnny.jpeg" class="card-img-top" alt="..." id="about-me-pics">
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
                <img src="js/views/img/james.jpeg" class="card-img-top" alt="..." id="about-me-pics">
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
                <img src="js/views/img/ryan.jpeg" class="card-img-top" alt="..." id="about-me-pics">
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
                <img src="js/views/img/tyreik.jpeg" class="card-img-top" alt="..." id="about-me-pics">
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
                <img src="js/views/img/becca.png" class="card-img-top" alt="..." id="about-me-pics">
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
        <div id="photo-cards" class="row justify-content-center g-4" id="instructor-bios">
            <br>
            <h3 class="the-great-assist text-center">The Great Assistance</h3>
            <p class="text-center">"A special thank you to our wonderful instructors, your sacrifice and assistance is
                greatly appreciated.
                <br>Thank you for all you do and continue to do. #FortranForever" - Team On The House</p>
            <div class="col-6" style="width: 15rem;">
                <img src="js/views/img/casey.jpeg" class="card-img-top" alt="..." id="about-me-pics">
                <br>
                <div class="about-bios text-center">
                    <p>Casey Edwards</p>
                    <p>Code wizard. Bennie extraordinaire, and hater of pop-up modals.</p>
                    <br>
                    <a href="https://www.linkedin.com/in/casey-edwards-639289145/">
                        <img alt="..." src="js/views/img/linkedin.png"
                             width=35" height="35">
                    </a>
                    <a href="https://github.com/vegetasrevenge">
                        <img alt="..." src="js/views/img/github.png"
                             width=35" height="35">
                    </a>
                </div>
            </div>

            <div class="col-6" style="width: 15rem;">
                <img src="js/views/img/ry.jpeg" class="card-img-top" alt="..." id="about-me-pics">
                <br>
                <div class="about-bios text-center">
                    <p>Ry Sutton</p>
                    <p>Tallest man in the world. Father of a menace in training. </p>
                    <br>
                    <a href="https://www.linkedin.com/in/ryancesutton/">
                        <img alt="..." src="js/views/img/linkedin.png"
                             width=35" height="35">
                    </a>
                    <a href="https://github.com/ryancesutton">
                        <img alt="..." src="js/views/img/github.png"
                             width=35" height="35">
                    </a>
                </div>
            </div>
            <div class="col-4" style="width: 15rem;">
                <img src="js/views/img/jordy.png" class="card-img-top" alt="..." id="about-me-pics">
                <br>
                <div class="about-bios text-center">
                    <p>Jordy Muniz</p>
                    <p>Boy Genius, the sickest hair in the game. </p>
                    <br>
                    <a href="https://www.linkedin.com/in/jordy-muniz/">
                        <img alt="..." src="js/views/img/linkedin.png"
                             width=35" height="35">
                        <a href="https://github.com/jordysolis96">
                            <img alt="..." src="js/views/img/github.png"
                                 width=35" height="35">
                        </a>
                </div>
            </div>
        </div>
        <br>
        <br>
        <br>
        <!--        <div class="card bg-dark text-white">-->
        <!--            <img src="js/views/img/ThankYou.png" class="card-img-mission" alt="..." height="200">-->
        <!--        </div>-->


        </div>
        ${myFooter()}
        </body>
    `;
}


