$(function () {
    var dateNow = new Date();

    $('#reToDate').datetimepicker({
      minDate:dateNow,
      stepping: 15
    });
    $('#reFromDate').datetimepicker({
      useCurrent: false, //Important! See issue #1075
      minDate:dateNow,
      stepping: 15
    });
    $("#reToDate").on("dp.change", function (e) {
        $('#reFromDate').data("DateTimePicker").minDate(e.date);
    });
    $("#reFromDate").on("dp.change", function (e) {
        $('#reToDate').data("DateTimePicker").maxDate(e.date);
    });
});

function checkDates()
 {
   var toDate = document.getElementById('reToDateValue');
   var fromDate = document.getElementById('reFromDateValue');
   var submitValue = false;
   
  if ((toDate.value.length > 0) || (fromDate.value.length > 0))
  {
    submitValue = true;
    document.getElementById("reErrDate").innerHTML = "";
  }
  else
  {
    document.getElementById("reErrDate").innerHTML = "<span class='smallWarning'><strong>*Please Enter a Start or End Date*<strong></span>";
  }
  
  return submitValue;
 }

function initialize() {
  var inputStart = document.getElementById('reEnterStartLoc');
  var inputEnd = document.getElementById('reEnterEndLoc');
  var inputActivity = document.getElementById('activityLocation');
  var inputLocation = document.getElementById('stayLocation');
  new google.maps.places.Autocomplete(inputStart);
  new google.maps.places.Autocomplete(inputEnd);
  new google.maps.places.Autocomplete(inputActivity);
  new google.maps.places.Autocomplete(inputLocation);
}

// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.7608, lng: -111.8910},
    zoom: 9,
    mapTypeId: 'roadmap'
  });

  google.maps.event.addDomListener(window, 'load', initialize);

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}

