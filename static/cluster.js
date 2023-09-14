
const url = "http://127.0.0.1:5000/api/v1.0/accident"

let myMap = L.map("map", {
  center: [-37.8136, 144.9631],
  zoom: 7
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// var crashIcon = L.icon({
//   iconUrl: 'leaf-green.png',
//   iconSize:     [38, 95], // size of the icon
//   iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//   popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });

d3.json(url).then(function(data) {
  let markers = L.markerClusterGroup();
  for (let i = 0; i < data.length; i++) {
    let dict =data[i]
    let coordinates = dict.coordinates
    let speed = dict.speed_zone
    if (dict.speed_zone==777){
      speed = 'Other speed limit';
    }
    if (dict.speed_zone==888){
      speed = 'Camping grounds, off road';
    }
    if (dict.speed_zone==999){
      speed = 'Not known';
    }
   
    markers.addLayer(L.marker([coordinates[0],coordinates[1]])
        .bindPopup("<h3>Date: " + dict.date + "<h3><h3>Time: " + dict.time + "<h3><h3>Surface Condition: " + dict.surface_cond + 
        "<h3><h3>Type: " + dict.accident_type + "<h3><h3>Fatalities: " + dict.no_persons_killed 
        + "<h3><h3>Light Condition: " + dict.light_cond + "<h3><h3>Atmospheric Condition: " + dict.atmosph_cond
        + "<h3><h3>Speed Zone: " + speed + "<h3></h3>"));

  }
  myMap.addLayer(markers);

});