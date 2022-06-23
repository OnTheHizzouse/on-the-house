export default function About() {
    console.log("This is the About Page");
    //language=HTML
    return `
        <title>On the house</title>
        </head>
        <body>
            <!-- About US card -->
            <div id="about-me-card" class="row">
                <div class="card mb-3"
                ">
                <img src="images/produce-cropped.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">About Us</h5>
                    <p class="card-text">As a community sharing application we will foster the exchange of goods with
                        the
                        goal
                        of reducing food waste and food insecurity within local communities. We hope to create a
                        comfortable
                        and welcoming environment for all users that will facilitate and encourage community interaction
                        and
                        cooperation.</p>
                </div>
            </div>
        </div>
        
            
        <!-- Team Member Info -->
        <div class="row row-cols-4" id="team-member-cards"
            <div class="row">
                <div class="card" style="width: 18rem;">
                    <img src="images/johnny.jpeg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Johnny</p>
                    </div>
                </div>

                <div class="row">
                    <div class="card" style="width: 18rem;">
                        <img src="images/james.jpeg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">James</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="card" style="width: 18rem;">
                        <img src="images/ryan.jpeg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">Ryan</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="card" style="width: 18rem;">
                        <img src="images/tyreik.jpeg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">Tyreik</p>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="card" style="width: 18rem;">
                        <img src="images/becca.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">Rebecca</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    `;
}