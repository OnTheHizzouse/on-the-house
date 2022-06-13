// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <link href="https://fonts.googleapis.com/css?family=Inter:400,800,900&display=swap" rel="stylesheet">
//     <link rel="stylesheet" href="caps.css">
//     <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
//     <link href="https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.css" rel="stylesheet">
//     <script src="https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.js"></script>
// <link href="https://cdn.jsdelivr.net/npm/daisyui@2.15.2/dist/full.css" rel="stylesheet" type="text/css"/>
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
//         integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
//         crossorigin="anonymous"></script>
//
//
// <style>
//     body {
//     margin: 0;
//     padding: 0;
// }
//
//     /*#map {*/
//     /*    top: 0;*/
//     /*    bottom: 0;*/
//     /*}*/
//     </style>
//     <title>On the house</title>
//     </head>
//     <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.min.js"></script>
//     <link rel="stylesheet"
//     href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.css"
//     type="text/css">
//     <body>
//     <!-- Header Img -->
//
//     <img id="OTH" src="images/othNavImg.png" alt="">
//
//     <!-- navbar -->
//     <div>
//     <nav id="nav" class="bg-white border-white-200 px-2 sm:px-4 py-2.5 rounded dark:bg-white-800">
//     <div class="container flex flex-wrap justify-between items-center mx-auto">
//     <a href="#" class="flex items-center">
//     <img src="images/recycleLogo.png" class="mr-3 h-6 sm:h-9" alt="OTH Logo">
//     <!--                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">OnTheHouse</span>-->
//     </a>
//     <div class="flex items-center md:order-2">
//     <button type="button"
//     class="flex mr-3 text-sm bg-white-800 rounded-full md:mr-0 focus:ring-4 focus:ring-white-300 dark:focus:ring-white-600"
//     id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
//     <span class="sr-only">Open user menu</span>
//     <img class="w-8 h-8 rounded-full" src="pieguy.png" alt="user photo">
//     </button>
//     <button data-collapse-toggle="mobile-menu-2" type="button"
//     class="inline-flex items-center p-2 ml-1 text-sm text-white-500 rounded-lg md:hidden hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-white-200 dark:text-white-400 dark:hover:bg-white-700 dark:focus:ring-white-600"
//     aria-controls="mobile-menu-2" aria-expanded="false">
//     <span class="sr-only">Open main menu</span>
//     <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//     <path fill-rule="evenodd"
//     d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//     clip-rule="evenodd"></path>
//     </svg>
//     <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
//     xmlns="http://www.w3.org/2000/svg">
//     <path fill-rule="evenodd"
//     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//     clip-rule="evenodd"></path>
//     </svg>
//     </button>
//     </div>
//     <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
//     <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
//     <li>
//     <a href="#"
//     class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white"
//     aria-current="page">Home</a>
//     </li>
//     <li>
//     <a href="#"
//     class="block py-2 pr-4 pl-3 text-white-700 border-b border-white-100 hover:bg-white-50 md:hover:bg-transparent
//                            md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700
//                            dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Profile</a>
//     </li>
//     <li>
//     <a href="#"
//     class="block py-2 pr-4 pl-3 text-white-700 border-b border-white-100 hover:bg-white-50 md:hover:bg-transparent
//                            md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
//     </li>
//     <li>
//     <a href="#"
//     class="block py-2 pr-4 pl-3 text-white-700 border-b border-white-100 hover:bg-white-50 md:hover:bg-transparent
//                            md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700
//                            dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Items</a>
//     </li>
//     <li>
//     <a href="#"
//     class="block py-2 pr-4 pl-3 text-white-700 border-b border-white-100 hover:bg-white-50 md:hover:bg-transparent
//                             md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700
//                             dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Messages</a>
//     </li>
//     </ul>
//     </div>
//     </div>
//     </nav>
//
//
//     <!-- About US card -->
//     <div id="about-me-card" class="row">
//     <div class="card mb-3"
//     ">
//         <img src="images/produce-cropped.jpg" class="card-img-top" alt="...">
//     <div class="card-body">
//     <h5 class="card-title">About Us</h5>
//     <p class="card-text">As a community sharing application we will foster the exchange of goods with the
//     goal
//     of reducing food waste and food insecurity within local communities. We hope to create a comfortable
//     and welcoming environment for all users that will facilitate and encourage community interaction and
//     cooperation.</p>
//     </div>
//     </div>
//     </div>
//     <br>
//     <!-- Member Info -->
//     <div class="row row-cols-5" id="team-member-cards">
//
//     <div class="row">
//     <div class="card" style="width: 18rem;">
//     <img src="images/johnny.jpeg" class="card-img-top" alt="...">
//     <div class="card-body">
//     <p class="card-text">Johnny</p>
//     </div>
//     </div>
//
//     <div class="row">
//     <div class="card" style="width: 18rem;">
//     <img src="images/james.jpeg" class="card-img-top" alt="...">
//     <div class="card-body">
//     <p class="card-text">James</p>
//     </div>
//     </div>
//     </div>
//
//     <div class="row">
//     <div class="card" style="width: 18rem;">
//     <img src="images/ryan.jpeg" class="card-img-top" alt="...">
//     <div class="card-body">
//     <p class="card-text">Ryan</p>
//     </div>
//     </div>
//     </div>
//
//     <div class="row">
//     <div class="card" style="width: 18rem;">
//     <img src="images/tyreik.jpeg" class="card-img-top" alt="...">
//     <div class="card-body">
//     <p class="card-text">Tyreik</p>
//     </div>
//     </div>
//     </div>
//
//
//     <div class="row">
//     <div class="card" style="width: 18rem;">
//     <img src="images/becca.png" class="card-img-top" alt="...">
//     <div class="card-body">
//     <p class="card-text">Rebecca</p>
//     </div>
//     </div>
//     </div>
//     </div>
//
//     <!--    <div id="map">-->
//     <!--        <div id="geocoder" class="geocoder"></div>-->
//     <!--    </div>-->
//
//     <!--    <div id="sidebar">CAT Column</div>-->
//
//     <!--    <div id="food" class="carousel bg-neutral rounded-box">-->
//     <!--        <div class="carousel-item">-->
//     <!--            <img src="https://www.ncagr.gov/agscool/images/pyramid.gif" class="rounded-box" alt=""/>-->
//     <!--        </div>-->
//     <!--        <div class="carousel-item">-->
//     <!--            <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/12/unhealthiest-foods-planet.jpg?quality=82&strip=1"-->
//     <!--                 class="rounded-box"-->
//     <!--                 alt=""/>-->
//     <!--        </div>-->
//     <!--        <div class="carousel-item">-->
//     <!--            <img src="https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1608506169128-S6KYNEV61LEP5MS1UIH4/traditional-food-around-the-world-Travlinmad.jpg"-->
//     <!--                 class="rounded-box"-->
//     <!--                 alt=""/>-->
//     <!--        </div>-->
//     <!--    </div>-->
//
//     <!--    <div id="electronics" class="carousel bg-neutral rounded-box">-->
//     <!--        <div class="carousel-item">-->
//     <!--            <img src="https://files.shoppersdrugmart.ca/food-and-electronics/electronics/Hero%20Electronics.png"-->
//     <!--                 class="rounded-box" alt=""/>-->
//     <!--        </div>-->
//     <!--        <div class="carousel-item">-->
//     <!--            <img src="https://www.recyclestuff.org/resources/material-images/electronic%20components.jpg"-->
//     <!--                 class="rounded-box"-->
//     <!--                 alt=""/>-->
//     <!--        </div>-->
//     <!--        <div class="carousel-item">-->
//     <!--            <img src="https://www.greenbiz.com/sites/default/files/2022-04/varietyofelectronics_shutterstock_DAMRONGRATTANAPONG.jpeg"-->
//     <!--                 class="rounded-box"-->
//     <!--                 alt=""/>-->
//     <!--        </div>-->
//     <!--    </div>-->
//
//     <!--    <div id="misc" class="carousel bg-neutral rounded-box">-->
//     <!--        <div class="carousel-item">-->
//     <!--            <img src="https://www.millcreekgardens.com/wp-content/uploads/2016/07/Gardening-Supplies.jpg"-->
//     <!--                 class="rounded-box" alt=""/>-->
//     <!--        </div>-->
//     <!--        <div class="carousel-item">-->
//     <!--            <img src="https://skynursery.com/wp-content/uploads/2020/07/gs_irrigation_watering_supplies_hose_sprinkler_nozzle_700w_5L9A0724.jpg"-->
//     <!--                 class="rounded-box"-->
//     <!--                 alt=""/>-->
//     <!--        </div>-->
//     <!--        <div class="carousel-item">-->
//     <!--            <img src="https://www.millcreekgardens.com/wp-content/uploads/2018/10/garden-tools.jpg" class="rounded-box"-->
//     <!--                 alt=""/>-->
//     <!--        </div>-->
//     <!--    </div>-->
//
//
//     <!-- Footer -->
//
//     <footer class="footer p-10 bg-neutral text-neutral-content">
//     <div>
//     <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
//     clip-rule="evenodd" class="fill-current">
//     <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
//     </svg>
//     <p>ACME Industries Ltd.<br>Providing reliable tech since 1992</p>
//     </div>
//     <div>
//     <span class="footer-title">Social</span>
//     <div class="grid grid-flow-col gap-4">
//     <a>
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//     class="fill-current">
//     <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
//     </svg>
//     </a>
//     <a>
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//     class="fill-current">
//     <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
//     </svg>
//     </a>
//     <a>
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//     class="fill-current">
//     <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//     </svg>
//     </a>
//     <a>
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//     class="fill-current">
//     <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//     </svg>
//     </a>
//     </div>
//     </div>
//     </footer>
//
//     </div>
//
//
//     <script>
//     // TO MAKE THE MAP APPEAR YOU MUST
//     // ADD YOUR ACCESS TOKEN FROM
//     // https://account.mapbox.com
//     mapboxgl.accessToken = 'pk.eyJ1IjoidHlyZWlrMTQiLCJhIjoiY2w0NzVxdzJsMGY1YjNqbXhmZnhwaDlkbSJ9.-15Z40XQyhrHOu2lnZzzDA';
//     const map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v11',
//     center: [-79.4512, 43.6568],
//     zoom: 13
// });
//
//     // Add the control to the map.
//     const geocoder = new MapboxGeocoder({
//     accessToken: mapboxgl.accessToken,
//     mapboxgl: mapboxgl
// });
//
//     document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
//     </script>
//     <script src="https://cdn.tailwindcss.com"></script>
//     </body>
//     </html>