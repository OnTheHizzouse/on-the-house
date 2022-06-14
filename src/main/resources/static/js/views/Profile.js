export default function Profile(props) {
    console.log("This is the Profile page");
// language=html
    return `
        <body>
        <div class="container">
            <div class="main-body">
                <div class="row gutters-sm">
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center text-center">
                                    <img src="pieguy.png" alt="Admin"
                                         class="rounded-circle" width="150">
                                    <div class="mt-3">
                                        <h4>Pie Guy Jr</h4>
                                        <p class="text-muted font-size-sm">Dallas,Tx</p>
                                        <button class="btn btn-outline-primary">Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mt-3">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 class="mb-0">
                                        Bio:
                                    </h6>
                                    <span id="bio" class="text-secondary">........</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 class="mb-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24"
                                             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                             stroke-linejoin="round"
                                             class="feather feather-twitter mr-2 icon-inline text-info">
                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                        </svg>
                                        Twitter
                                    </h6>
                                    <span class="text-secondary">@PieGuy</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 class="mb-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24"
                                             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                             stroke-linejoin="round"
                                             class="feather feather-instagram mr-2 icon-inline text-danger">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                        </svg>
                                        Instagram
                                    </h6>
                                    <span class="text-secondary">@PieGuy</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 class="mb-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24"
                                             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                             stroke-linejoin="round"
                                             class="feather feather-facebook mr-2 icon-inline text-primary">
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                        </svg>
                                        Facebook
                                    </h6>
                                    <span class="text-secondary">@PieGuy</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Full Name</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        Pie Guy Jr.
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Email</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        Pieguyjr@email.com
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Mobile</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        (757) 803-3233
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Address</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        721 Navarro St #300, Dallas, TX 78111
                                    </div>
                                </div>
                                <hr>
                            </div>
                        </div>


                        <div class="card mb-3" style="max-width: 540px;">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="data:image/jpeg;base64,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" class="img-fluid rounded-start" alt="...">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Yesterday's meal</h5>
                                        <p class="card-text">information about the item</p>
                                        <p class="card-text"><small class="text-muted">TIMER</small></p>
                                        <button id="editBtn" type="button" class="btn btn-primary">Edit</button>
                                        <button id="deleteBtn" type="button" class="btn btn-danger">Delete</button>


                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!--                ********************************************-->
                      
        <footer class="flex-shrink-0 py-4 text-white-50">
            <div class="container text-center">
                <small>Copyright &copy; On The House 2022</small>
            </div>
        </footer>

        </body>
    `;
}

export function postEvents() {

}
editPostListener();

function editPostListener(){
   $(document).on('click', '#editBtn', function (e) {
       e.preventDefault();
       console.log("edit button clicked");
    })
}