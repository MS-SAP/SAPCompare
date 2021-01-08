var maps = [];

function initOsm(selector, latitude, longitude, zoom) {
    var td = $(selector);
    
    var map = L.map(td[0]);
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    var target = L.latLng(latitude, longitude);
    map.setView(target, zoom);
    
    map.on("zoom", onZoom);
    
    maps.push(map);
}

initOsm("#map1", 52.52509, 13.36952, 16); // Berlin
initOsm("#map2", 49.29394, 8.63730, 16); // SAP Walldorf

$("#toggleMap").click(function() {
    if ($(this).text() == "Back") {
        $(".front").removeClass("fullOpacity");
        $("#map1").removeClass("front hidden");
        $("#map1").addClass("back");
        $("#map2").removeClass("back hidden");
        $("#map2").addClass("front");
        $(this).text("Front");
        $("#showFront").prop("checked", "true");
        $("#showBack").prop("checked", "true");
    } else {
        $(".front").removeClass("fullOpacity");
        $("#map1").removeClass("back hidden");
        $("#map1").addClass("front");
        $("#map2").removeClass("front hidden");
        $("#map2").addClass("back");
        $(this).text("Back");
        $("#showFront").prop("checked", "true");
        $("#showBack").prop("checked", "true");
    }
});

function onZoom(event) {
    for (var i = 0; i < maps.length; i++) {
        maps[i].setZoom(event.target._zoom);
    }
}

$("#showFront").change(function() {
    if ($(this).prop("checked")) {
        $(".front").removeClass("hidden");
    } else {
        $(".front").addClass("hidden");
    }
});

$("#showBack").change(function() {
    if ($(this).prop("checked")) {
        $(".back").removeClass("hidden");
        $(".front").removeClass("fullOpacity");
    } else {
        $(".back").addClass("hidden");
        $(".front").addClass("fullOpacity");
    }
});