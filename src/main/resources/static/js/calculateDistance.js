"use strict";

//Using Haversine formula for distance calculation between two points

let lat1 = 29.982148518858097;
let lng1 = -90.15586853027344;
let lat2 = 30.003408890618065;
let lng2 = -90.10076522827148;

console.log(distanceInMiBetweenEarthCoordinates(lat1, lng1, lat2, lng2));

function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}

function distanceInMiBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
    var earthRadiusMi = 3958.75;

    var dLat = degreesToRadians(lat2-lat1);
    var dLon = degreesToRadians(lon2-lon1);

    lat1 = degreesToRadians(lat1);
    lat2 = degreesToRadians(lat2);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return earthRadiusMi * c;
}