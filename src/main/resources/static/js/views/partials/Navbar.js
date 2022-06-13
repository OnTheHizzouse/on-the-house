export default function Navbar(props) {
    //language=HTML
    return `

        <nav id="nav" class="bg-white border-white-200 px-2 sm:px-4 py-2.5 rounded dark:bg-white-800">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <a href="#" class="flex items-center">
                    <img src="images/recycleLogo.png" class="mr-3 h-6 sm:h-9" alt="OTH Logo">
                    <!--                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">OnTheHouse</span>-->
                </a>
                <div class="flex items-center md:order-2">
                    <button type="button"
                            class="flex mr-3 text-sm bg-white-800 rounded-full md:mr-0 focus:ring-4 focus:ring-white-300 dark:focus:ring-white-600"
                            id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
                        <span class="sr-only">Open user menu</span>
                        <img class="w-8 h-8 rounded-full" src="pieguy.png" alt="user photo">
                    </button>
                    <button data-collapse-toggle="mobile-menu-2" type="button"
                            class="inline-flex items-center p-2 ml-1 text-sm text-white-500 rounded-lg md:hidden hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-white-200 dark:text-white-400 dark:hover:bg-white-700 dark:focus:ring-white-600"
                            aria-controls="mobile-menu-2" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clip-rule="evenodd"></path>
                        </svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <a href="#"
                               class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white"
                               aria-current="page">Home</a>
                        </li>
                        <li>
<!--                            <a href="#"-->
<!--                               class="block py-2 pr-4 pl-3 text-white-700 border-b border-white-100 hover:bg-white-50 md:hover:bg-transparent-->
<!--                           md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700-->
<!--                           dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Profile</a>-->
                            
                            <a class="block py-2 pr-4 pl-3 text-white-700 border-b border-white-100 hover:bg-white-50 md:hover:bg-transparent
                           md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700
                           dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 nav-link" href="/profile" data-link>Profile</a>

                        </li>
                        <li>
                            <a href="#"
                               class="block py-2 pr-4 pl-3 text-white-700 border-b border-white-100 hover:bg-white-50 md:hover:bg-transparent
                           md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                        </li>
                        <li>
                            <a href="#"
                               class="block py-2 pr-4 pl-3 text-white-700 border-b border-white-100 hover:bg-white-50 md:hover:bg-transparent
                           md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700
                           dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Items</a>
                        </li>
                        <li>
                            <a href="#"
                               class="block py-2 pr-4 pl-3 text-white-700 border-b border-white-100 hover:bg-white-50 md:hover:bg-transparent
                            md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700
                            dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Messages</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

<!--        <script src="https://cdn.tailwindcss.com"></script>-->

    `;
}
