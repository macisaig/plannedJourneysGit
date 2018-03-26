$('#hourMark').on('keydown keyup', function(e){
    if ($(this).val() > 23 
        && e.keyCode !== 46 // keycode for delete
        && e.keyCode !== 8 // keycode for backspace
       ) {
       e.preventDefault();
       $(this).val(23);
    }
});

$('#minuteMark').on('keydown keyup', function(e){
    if ($(this).val() > 60 
        && e.keyCode !== 46 // keycode for delete
        && e.keyCode !== 8 // keycode for backspace
       ) {
       e.preventDefault();
       $(this).val(60);
    }
});

$('#dayMark').on('keydown keyup', function(e){
    if ($(this).val() > 999 
        && e.keyCode !== 46 // keycode for delete
        && e.keyCode !== 8 // keycode for backspace
       ) {
       e.preventDefault();
       $(this).val(999);
    }
});

$(function () {
  var selectElement = $('select.form-control');

  function ifFirstOptionGrey() {
    if (selectElement[0].selectedIndex === 0) {
      selectElement.addClass('first-option-selected');
    } else {
      selectElement.removeClass('first-option-selected');
    }
  }

  ifFirstOptionGrey();

  selectElement.on('change', function () {
    ifFirstOptionGrey();
  })
});

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

  var mapToggle = document.getElementById("hideMap");

  // Create the search box and link it to the UI element.
  var input1 = document.getElementById('activityLocation');
  var searchBox1 = new google.maps.places.SearchBox(input1);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox1.setBounds(map.getBounds());
  });

  // Create the search box and link it to the UI element.
  var input2 = document.getElementById('stayLocation');
  var searchBox2 = new google.maps.places.SearchBox(input2);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox2.setBounds(map.getBounds());
  });

  // Create the search box and link it to the UI element.
  var input3 = document.getElementById('reEnterEndLoc');
  var searchBox3 = new google.maps.places.SearchBox(input3);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox3.setBounds(map.getBounds());
  });

  // Create the search box and link it to the UI element.
  var input4 = document.getElementById('reEnterStartLoc');
  var searchBox4 = new google.maps.places.SearchBox(input4);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox4.setBounds(map.getBounds());
  });

  var locationButton = document.getElementById("addLocation");

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox1.addListener('places_changed', function() {
    if (mapToggle.classList.contains("hidden")) 
    {
      mapToggle.classList.remove("hidden");
    } 

    var places = searchBox1.getPlaces();

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

    if (locationButton.classList.contains("hidden")) 
    {
      locationButton.classList.remove("hidden");
    }
  });

  searchBox2.addListener('places_changed', function() {
    if (mapToggle.classList.contains("hidden")) 
    {
      mapToggle.classList.remove("hidden");
    } 

    var places = searchBox2.getPlaces();

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

    if (locationButton.classList.contains("hidden")) 
    {
      locationButton.classList.remove("hidden");
    } 
  });

  searchBox3.addListener('places_changed', function() {
    if (mapToggle.classList.contains("hidden")) 
    {
      mapToggle.classList.remove("hidden");
    } 

    var places = searchBox3.getPlaces();

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

    if (locationButton.classList.contains("hidden")) 
    {
      locationButton.classList.remove("hidden");
    } 
  });

  searchBox4.addListener('places_changed', function() {
    if (mapToggle.classList.contains("hidden")) 
    {
      mapToggle.classList.remove("hidden");
    } 

    var places = searchBox4.getPlaces();

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

    if (locationButton.classList.contains("hidden")) 
    {
      locationButton.classList.remove("hidden");
    } 
  });
}

function addToPlan() {
  var locationButton = document.getElementById("addLocation");
  var minuteValue = document.getElementById('minuteMark');
  var hourValue = document.getElementById('hourMark');
  var dayValue = document.getElementById('dayMark');
  var mapToggle = document.getElementById("hideMap");
  var submitValue = false;
   
  if ((minuteValue.value.length > 0) || (hourValue.value.length > 0) || (dayValue.value.length > 0))
  {
    submitValue = true;
    document.getElementById("errTime").innerHTML = "";
    if (!locationButton.classList.contains("hidden")) 
    {
      locationButton.classList.add("hidden");
    }

    if (!mapToggle.classList.contains("hidden")) 
    {
      mapToggle.classList.add("hidden");
    }
  }
  else
  {
    document.getElementById("errTime").innerHTML = "<span class='smallWarning'><strong>*Please Enter a Length of Time*<strong></span>";
  }

  return submitValue;
}

function showMap() {
  var mapToggle = document.getElementById("hideMap");

  if (mapToggle.classList.contains("hidden")) 
  {
    mapToggle.classList.remove("hidden");
  } 
  else 
  {
    mapToggle.classList.add("hidden");
  }
}