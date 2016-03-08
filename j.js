var geocoder = new google.maps.Geocoder();
var citymap = {
  chicago: {
    loc: "Chicago, IL",
    center: {
      lat: 40,
      lng: -70
    },
    shootings: 140000

  },
  newyork: {
    loc: "New York, NY",
    center: {
      lat: 40,
      lng: -80
    },
    shootings: 80000
  },
  losangeles: {
    loc: "Los Angeles, CA",
    center: {
      lat: 40,
      lng: -100
    },
    shootings: 40000
  },

};
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 39.14,
      lng: -98.1
    },
    zoom: 3
  });

  for (var city in citymap) {
    createCircleFromGeocode(city);
  }
}

function createCircleFromGeocode(city) {
  geocoder.geocode({
    'address': citymap[city].loc
  }, function(results, status) {
    citymap[city].center = {
      lat: results[0].geometry.location.lat(),
      lng: results[0].geometry.location.lng()
    }

    // Add the circle for this city to the map.
    var cityCircle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.5,
      map: map,
      center: citymap[city].center,
      radius: citymap[city].shootings
    });

  });

}

google.maps.event.addDomListener(window, 'load', initMap);

