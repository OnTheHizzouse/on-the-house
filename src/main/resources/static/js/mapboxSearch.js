
    mapboxgl.accessToken = 'pk.eyJ1IjoibWVuZG96YXIiLCJhIjoiY2wwdjB3a3Z4MHRoczNlbnA0ajFiaWttMSJ9.wyy70W2kiLvadQuWo-EBeQ';
    const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    types: 'address'
});


 export   function waitForElm(selector) {
    return new Promise(resolve => {
    if (document.querySelector(selector)) {
    return resolve(document.querySelector(selector));
}

    const observer = new MutationObserver(mutations => {
    if (document.querySelector(selector)) {
    resolve(document.querySelector(selector));
    observer.disconnect();
}
});

    observer.observe(document.body, {
    childList: true,
    subtree: true
});
});
}



    waitForElm('#geocoder').then((elm) => {
    console.log('Element is ready');
    console.log(elm.textContent);
    geocoder.addTo('#geocoder');
});



    // Get the geocoder results container.
    const results = document.getElementById('result');

    // Add geocoder result to container.
    geocoder.on('result', (e) => {
        let address = e.result.place_name;

        $('#result').html(address)
        $('#result').hide()

    });

    // Clear results container when search is cleared.
    geocoder.on('clear', () => {
    results.innerText = '';
});

