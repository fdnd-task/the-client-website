var map = L.map("map", {
  center: [52.3376, 4.902],
  zoom: 11,
  zoomControl: false,
});

L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
  {
    maxZoom: 20,
    minZoom: 8,
    attribution: "© Stadia Maps",
  }
).addTo(map);
