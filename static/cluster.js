
url = "http://127.0.0.1:5000/api/v1.0/accidents"

let myMap = L.map("map", {
  center: [-37.8136, 144.9631],
  zoom: 7
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


d3.json(url).then(function(data) {

  let markers = L.markerClusterGroup();

  for (let i = 0; i < data.length; i++) {

    let array = Object.values(data[i])[0]
    let lat = array[0];
    console.log(lat)
    let long = array[1]
    let accident_id = Object.keys(data[i])[0]
    if (location) {

      markers.addLayer(L.marker([lat,long])
        .bindPopup(accident_id));
    }

  }
  myMap.addLayer(markers);

});