
function myMap() {
   var mapProp = {
      center: new google.maps.LatLng(50.45092634174021, 30.526647562208154),
      zoom: 10,
   };
   var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
