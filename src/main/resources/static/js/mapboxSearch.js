
    const geocoder = new MapboxGeocoder({
    accessToken: KEY_mapbox,
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
        console.log(e.result)
        let address = e.result.place_name;
        let lat = e.result.center[0]
        let lon = e.result.center[1]
        $('#result').html(lon+", "+lat)
        $('#result').hide()
        $('#address').html(address)
        $('#address').hide()
    });

    // Clear results container when search is cleared.
    geocoder.on('clear', () => {
    results.innerText = '';
});

