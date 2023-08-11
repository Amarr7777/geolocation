function GetMap() {
    var map = new Microsoft.Maps.Map('#myMap', {
        credentials: 'AoWWoZvUXuRUzlsaINaeX87LCE5etJotaFA8p-bmoJYyly-FDGujIDprtPVbmGUR'
    });

    //Request the user's location
    navigator.geolocation.getCurrentPosition(function (position) {
        var loc = new Microsoft.Maps.Location(
            position.coords.latitude,
            position.coords.longitude);

        //Add a pushpin at the user's location.
        var pin = new Microsoft.Maps.Pushpin(loc);
        map.entities.push(pin);

        //Center the map on the user's location.
        map.setView({ center: loc, zoom: 15 });
    });
}


var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(100, 0, 200, 200);
grd.addColorStop(0, "#fddcfb");
grd.addColorStop(1, "#fcfcfb");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 1500, 800);