export default function Profile(props) {
    console.log("This is the Profile page");
// language=html
    return `
        <script src="https://cdn.tailwindcss.com"></script>
        
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

                        <!--                ********************************************-->
                        <div class="row gutters-sm">
                            <div class="col-sm-6 mb-6">
                                <div class="card-body">
                                    <div class="slider">
                                        <div class="slides">
                                            <div id="slide-1">
                                                <div class="col-sm-12">
                                                    <a id="edit1" class="btn btn-info " target="__blank"
                                                       href="">Edit</a>
                                                </div>
                                            </div>
                                            <div id="slide-2">
                                                <div class="col-sm-12">
                                                    <a id="edit2" class="btn btn-info " target="__blank"
                                                       href="">Edit</a>
                                                </div>
                                            </div>
                                            <div id="slide-3">
                                                <div class="col-sm-12">
                                                    <a id="edit3" class="btn btn-info " target="__blank"
                                                       href="">Edit</a>
                                                </div>
                                            </div>
                                            <div id="slide-4">
                                                <div class="col-sm-12">
                                                    <a id="edit4" class="btn btn-info " target="__blank"
                                                       href="">Edit</a>
                                                </div>
                                            </div>
                                            <div id="slide-5">
                                                <div class="col-sm-12">
                                                    <a id="edit5" class="btn btn-info " target="__blank"
                                                       href="">Edit</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 mb-6">
                                <div class="card-body">
                                    <div class="slider">
                                        <div class="slides">
                                            <div id="slide-6">
                                                <div class="col-sm-12">
                                                    <a id="edit6" class="btn btn-info " target="__blank"
                                                       href="">Edit</a>
                                                </div>
                                            </div>
                                            <div id="slide-7">
                                                <div class="col-sm-12">
                                                    <a id="edit7" class="btn btn-info " target="__blank"
                                                       href="">Edit</a>
                                                </div>
                                            </div>
                                            <div id="slide-8">
                                                <div class="col-sm-12">
                                                    <a id="edit8" class="btn btn-info " target="__blank"
                                                       href="">Edit</a>
                                                </div>
                                            </div>
                                            <div id="slide-9">
                                                <div class="col-sm-12">
                                                    <a id="edit9" class="btn btn-info " target="__blank"
                                                       href="">Edit</a>
                                                </div>
                                            </div>
                                            <div id="slide-10">
                                                <div class="col-sm-12">
                                                    <a id="edit10" class="btn btn-info " target="__blank"
                                                       href="">Edit</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="flex-shrink-0 py-4 text-white-50">
            <div class="container text-center">
                <small>Copyright &copy; On The House 2022</small>
            </div>
        </footer>
        </body>
    `;
}


<!--        <nav id="nav" class="bg-white border-white-200 px-2 sm:px-4 py-2.5 rounded dark:bg-white-800">-->
<!--            <div class="container flex flex-wrap justify-between items-center mx-auto">-->
<!--                <a href="#" class="flex items-center">-->
<!--                    <img src="android-chrome-512x512.png" class="mr-3 h-6 sm:h-9" alt="OTH Logo">-->
// <!--                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">OnTheHouse</span>-->
// <!--                </a>-->
// <!--                <div class="flex items-center md:order-2"> -->
<!--                    <button type="button"-->
<!--                            class="flex mr-3 text-sm bg-white-800 rounded-full md:mr-0 focus:ring-4 focus:ring-white-300 dark:focus:ring-white-600"-->
<!--                            id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">-->
// <!--                        <span class="sr-only">Open user menu</span>-->
// <!--                        <img class="w-8 h-8 rounded-full" src="pieguy.png" alt="user photo">-->
// <!--                    </button>-->
<!--                    <button data-collapse-toggle="mobile-menu-2" type="button"-->
<!--                            class="inline-flex items-center p-2 ml-1 text-sm text-white-500 rounded-lg md:hidden hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-white-200 dark:text-white-400 dark:hover:bg-white-700 dark:focus:ring-white-600"-->
<!--                            aria-controls="mobile-menu-2" aria-expanded="false">-->
// <!--                        <span class="sr-only">Open main menu</span>-->
// <!--                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path fill-rule="evenodd"-->
<!--                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"-->
// <!--                                  clip-rule="evenodd"></path>-->
// <!--                        </svg>-->
// <!--                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"-->
// <!--                             xmlns="http://www.w3.org/2000/svg">-->
// <!--                            <path fill-rule="evenodd"-->
// <!--                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"-->
// <!--                                  clip-rule="evenodd"></path>-->
// <!--                        </svg>-->
// <!--                    </button>-->
// <!--                </div>-->
// <!--                <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">-->
// <!--                    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">-->
// <!--                        <li>-->
// <!--                            <a href="#"-->
// <!--                               class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white"-->
// <!--                               aria-current="page">Home</a>-->
// <!--                        </li>-->
// <!--                        <li>-->
// <!--                            <a href="#"-->
// <!--                               class="block py-2 pr-4 pl-3 text-white-700 border-b border-white-100 hover:bg-white-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Profile</a>-->
// <!--                        </li>-->
// <!--                        <li>-->
// <!--                            <a href="#"-->
// <!--                               class="block py-2 pr-4 pl-3 text-white-700 border-b border-white-100 hover:bg-white-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>-->
// <!--                        </li>-->
// <!--                        <li>-->
// <!--                            <a href="#"-->
// <!--                               class="block py-2 pr-4 pl-3 text-white-700 border-b border-white-100 hover:bg-white-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Items</a>-->
// <!--                        </li>-->
// <!--                        <li>-->
// <!--                            <a href="#"-->
// <!--                               class="block py-2 pr-4 pl-3 text-white-700 border-b border-white-100 hover:bg-white-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Messages</a>-->
// <!--                        </li>-->
// <!--                    </ul>-->
// <!--                </div>-->
// <!--            </div>-->
// <!--        </nav>-->