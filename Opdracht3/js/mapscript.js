//Map Met coordinaten
let map = L.map('KineMap').setView([51.2460256, 4.4158764], 17);

//Krediet voor OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Marker op map
let marker = L.marker([51.2460256, 4.4158764], { title: "Kinepolis Antwerpen"}).addTo(map);
marker.bindPopup("<strong>Kinepolis Antwerpen</strong><br>Groenendaallaan 394").openPopup();

