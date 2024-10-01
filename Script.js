const map = L.map('map').setView([39.833333, -98.583333], 4); // Centro de EE. UU.

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Lista de ciudades con crecimiento de temperaturas
const ciudades = [
    { nombre: 'Phoenix, AZ', coords: [33.4484, -112.074] },
    { nombre: 'Las Vegas, NV', coords: [36.1699, -115.1739] },
    { nombre: 'Austin, TX', coords: [30.2672, -97.7431] },
    { nombre: 'Miami, FL', coords: [25.7617, -80.1918] },
    { nombre: 'Orlando, FL', coords: [28.5383, -81.3792] },
    { nombre: 'San Antonio, TX', coords: [29.4241, -98.4936] },
    { nombre: 'Tucson, AZ', coords: [32.2226, -110.9747] }
];

// Añadir marcadores para cada ciudad
ciudades.forEach(ciudad => {
    L.marker(ciudad.coords)
        .addTo(map)
        .bindPopup(`<h3>${ciudad.nombre}</h3>`);
});

