function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat: 57.7089, lng: 11.9746 }, // Gothenburg
  });

  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Example locations in Gothenburg
  const locations = [
    { lat: 57.7089, lng: 11.9746 }, // Central Gothenburg
    { lat: 57.7065, lng: 11.9670 }, // Haga
    { lat: 57.7209, lng: 11.9896 }, // Ullevi
    { lat: 57.6950, lng: 11.9916 }, // Liseberg
  ];

  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
      map: map,
    });
  });

  new markerClusterer.MarkerClusterer({
    map,
    markers,
  });
}
