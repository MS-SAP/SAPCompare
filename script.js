var map;

function initOsm(selector, latitude, longitude, zoom) {
    var td = $(selector);
    
    map = L.map(td[0]);
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    var target = L.latLng(latitude, longitude);
    map.setView(target, zoom);
    
    console.log(map.getZoom());
}

initOsm("#map", 49.29367, 8.63918, 17);