
let link = "https://data.gov.au/geoserver/vic-local-government-areas-psma-administrative-boundaries/wfs?request=GetFeature&typeName=ckan_bdf92691_c6fe_42b9_a0e2_a4cd716fa811&outputFormat=json"

let accident_data_api = "http://127.0.0.1:5000/api/v1.0/accident"

let layered_circle = [];

d3.json(accident_data_api).then(function(data) {
    

        for (let i = 0; i < data.length; i++) {
            let dict = data[i]
            let coordinates = dict.coordinates
            

            let color_type = "";
            let color_reference = dict.DEG_urban_name
                if (color_reference == "LARGE_PROVINCIAL_CITIES") {
                    color_type = "red";
                }
                else if (color_reference == "MELB_URBAN") {
                    color_type = "blue";
                }
                else if (color_reference == "MELBOURNE_CBD") {
                    color_type = "green";
                }
                else if (color_reference == "SMALL_CITIES") {
                    color_type = "pink";
                }
                else if (color_reference == "SMALL_TOWNS") {
                    color_type = "orange";
                }
                else if (color_reference == "TOWNS") {
                    color_type = "black";
                }
                else { color_type = "grey"}

            let circle = L.circle([coordinates[0],coordinates[1]], {
                color: color_type,
                fillOpacity: 0.5,
                radius: 10
            });
            circle.bindPopup("<h3><h3>Date: " +dict.date + "<h3><h3>Time: " + dict.time + "<h3><h3>Number of people killed: " + dict.no_persons_killed + "<h3><h3>Accident Type: " + dict.accident_type)
            let test2 = L.layerGroup(circle);
            
            
        }
        
        let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });
        
        let baseMaps = {
            Street: street,
            
        };
        
        let overlayMaps = {
            Crash: test2
        };
        
        let myMap = L.map("map", {
            center: [-37.760198,145.297943],
            zoom: 7,
            layers: [street, test2]
        });
        
        let mapStyle = {
            color: "black",
            fillColor: "pink",
            fillOpacity: 0.1,
            weight: 1
        };
        d3.json(link).then(function(data) {
            L.geoJson(data, {style: mapStyle}).addTo(myMap);
        });
        
        L.control.layers(baseMaps, overlayMaps, {
            collapsed: false
        }).addTo(myMap);

});
console.log(layered_circle)
// let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// });

// let baseMaps = {
//     Street: street,
    
// };

// let overlayMaps = {
//     Crash: layered_circle
// };

// let myMap = L.map("map", {
//     center: [-37.760198,145.297943],
//     zoom: 7,
//     layers: [street, layered_circle]
// });

// let mapStyle = {
//     color: "black",
//     fillColor: "pink",
//     fillOpacity: 0.1,
//     weight: 1
// };
// d3.json(link).then(function(data) {
//     L.geoJson(data, {style: mapStyle}).addTo(myMap);
// });

// L.control.layers(baseMaps, overlayMaps, {
//     collapsed: false
// }).addTo(myMap);

