const smartZones = [
  {
    smartzoneId: 1,
    name: "Tijn ",
    town: "Utrecht",
    location: "Twijnstraat 26",
    long: "5.123620",
    lat: "52.083010",
    function: "Parkeren ",
    time: "07:00 - 17:00",
    size: "1,5 plek",
    utilization: "48%",
    description: "Eerste Smart Zone in Nederland ",
    image:
      "https://raw.githubusercontent.com/DphnZwp/keep-users-in-control-coding-the-curbs/main/assets/Utrecht_01.jpg",
  },
  {
    smartzoneId: 2,
    name: "Sarah",
    town: "Utrecht",
    location: "Twijnstraat 22",
    long: "5.123530",
    lat: "52.083210",
    function: "Laden en lossen",
    time: "07:00 - 13:00",
    size: "1,5 plek",
    utilization: "90%",
    description: "",
    image:
      "https://raw.githubusercontent.com/DphnZwp/keep-users-in-control-coding-the-curbs/main/assets/Utrecht_02.jpg",
  },
  {
    smartzoneId: 3,
    name: "Manon",
    town: "Schiedam",
    location: "Lange Haven 56",
    long: "4.398240",
    lat: "51.914760",
    function: "Laden en lossen",
    time: "07:00 - 13:00",
    size: "1 plek",
    utilization: "32%",
    description: "",
    image:
      "https://github.com/DphnZwp/keep-users-in-control-coding-the-curbs/blob/main/assets/Schiedam_01.jpg?raw=true",
  },
  {
    smartzoneId: 4,
    name: " Ahmed",
    town: "Schiedam",
    location: "Lange Haven 72",
    long: "4.397329800779689",
    lat: "51.91556358676355",
    function: "Laden en lossen Recreatie",
    time: "07:00 - 17:00",
    size: "1 plek",
    utilization: "72%",
    description: "",
    image:
      "https://github.com/DphnZwp/keep-users-in-control-coding-the-curbs/blob/main/assets/Schiedam_02.jpg?raw=true",
  },
  {
    smartzoneId: 5,
    name: "Olivia",
    town: "Amsterdam",
    location: "Overtoom 450",
    long: "4.862475623765938",
    lat: "52.36036439250783",
    function: "Laden en lossen Parkeren Deelmobiliteit",
    time: "06:00 - 24:00",
    size: "2 plek",
    utilization: "60%",
    description: "Voor de Albert Heijn",
    image:
      "https://github.com/DphnZwp/keep-users-in-control-coding-the-curbs/blob/main/assets/Amsterdam_01.jpg?raw=true",
  },
  {
    smartzoneId: 6,
    name: "Karel",
    town: "Amsterdam",
    location: "Kinkerstraat 272",
    long: "4.8644428011353105",
    lat: "52.36553936459726",
    function: "Laden en lossen Parkeren Deelmobiliteit",
    time: "06:00 - 24:00",
    size: "1 plek",
    utilization: "82%",
    description: "Voor de Praxis",
    image:
      "https://github.com/DphnZwp/keep-users-in-control-coding-the-curbs/blob/main/assets/Amsterdam_02.jpg?raw=true",
  },
  {
    smartzoneId: 7,
    name: "Wafa",
    town: "Rotterdam",
    location: "West-kruiskade 93",
    long: "4.465702270092149",
    lat: "51.92089905883038",
    function: "Deelmobiliteit",
    time: "17:00 - 07:00",
    size: "1 plek",
    utilization: "32%",
    description: "Voor Tanoli",
    image:
      "https://github.com/DphnZwp/keep-users-in-control-coding-the-curbs/blob/main/assets/Rotterdam_01.jpg?raw=true",
  },
  {
    smartzoneId: 8,
    name: "Wicher",
    town: "Rotterdam",
    location: "Witte de Withstraat 32",
    long: "4.478072662160107",
    lat: "51.916558069680434",
    function: "Deelmobiliteit",
    time: "17:00 - 07:00",
    size: "1 plek",
    utilization: "45%",
    description: "Aan het einde op de hoek",
    image:
      "https://github.com/DphnZwp/keep-users-in-control-coding-the-curbs/blob/main/assets/Rotterdam_02.jpg?raw=true",
  },
];

const map = L.map("map", {
  center: [52.3376, 4.902],
  zoom: 11,
  zoomControl: false,
});

L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=749cd015-b004-4ad6-aac4-933d15879f92",
  {
    maxZoom: 20,
    minZoom: 8,
    attribution: "© Stadia Maps",
  }
).addTo(map);

const LeafIcon = L.Icon.extend({
  options: {
    iconUrl: "./assets/marker.png",
    shadowUrl: "",
    iconSize: [32.31, 39.65],
    shadowSize: [],
    iconAnchor: [16, 39],
    shadowAnchor: [],
    popupAnchor: [-3, -76],
  },
});

for (let item of smartZones) {
  let lat = item.lat;
  let long = item.long;

  L.marker([lat, long], {
    icon: new LeafIcon(),
  }).addTo(map);
}
