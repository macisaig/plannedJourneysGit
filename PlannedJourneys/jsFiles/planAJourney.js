function tableFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
}

// validates text only
function validateName(txt) 
{
   txt.value = txt.value.replace(/[^0-9-'\n\r.]+/g, '');
}

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

$(function(){
  var $day = $(".dayPick");
  for(i=0;i<=100;i++){
    $day.append($('<option></option>').val(i).html(i))
  }
  var $hour = $(".hourPick");
  for(i=0;i<24;i++){
    $hour.append($('<option></option>').val(i).html(i))
  }
  var $minute = $(".minutePick");
  for(i=0;i<=4;i++){
    x = i*15;
    $minute.append($('<option></option>').val(i).html(x))
  }
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
var map, infoWindow, result;
var markers = [];
var hostnameRegexp = new RegExp('^https?://.+?/');
var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';

function initAutocomplete() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 15, lng: 0},
    zoom: 2,
    mapTypeId: 'roadmap'
  });

  infoWindow = new google.maps.InfoWindow({
    content: document.getElementById('info-content')
  });

  // Create the search box and link it to the UI element.
  var input1 = document.getElementById('destinationLocation');
  var searchBox1 = new google.maps.places.SearchBox(input1);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox1.setBounds(map.getBounds());
  });

  // Create the search box and link it to the UI element.
  var input2 = document.getElementById('activityLocation');
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

  // Create the search box and link it to the UI element.
  var input5 = document.getElementById('foodLocation');
  var searchBox5 = new google.maps.places.SearchBox(input5);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox5.setBounds(map.getBounds());
  });

  markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  result = new google.maps.places.PlacesService(map);

  searchBox1.addListener('places_changed', function() {
    places=searchBox1.getPlaces();
    // Clear out the old markers.

    placesChanged(places);
  });

  searchBox2.addListener('places_changed', function() {
    places=searchBox2.getPlaces();

    placesChanged(places);
  });

  searchBox3.addListener('places_changed', function() {
    places=searchBox3.getPlaces();

    placesChanged(places);
  });

  searchBox4.addListener('places_changed', function() {
    places=searchBox4.getPlaces();

    placesChanged(places);
  });

  searchBox5.addListener('places_changed', function() {
    places=searchBox5.getPlaces();

    placesChanged(places);
  });
}

function placesChanged(places)
{
  var locationButton = document.getElementById("addLocation");
  var mapToggle = document.getElementById("hideMap");
  var i = 0;

  markers.forEach(function(marker) {
    marker.setMap(null);
  });
  markers = [];

  if (mapToggle.classList.contains("hidden")) 
  {
    mapToggle.classList.remove("hidden");
  } 

  if (places.length == 0) {
    return;
  }

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

    var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
    var markerIcon = MARKER_PATH + markerLetter + '.png';
    // Create a marker for each place.
    markers[i] = new google.maps.Marker({
      map: map,
      icon: markerIcon,
      title: place.name,
      position: place.geometry.location
    });
    markers[i].placeResult = place;

    if (place.geometry.viewport) {
      // Only geocodes have viewport.
      bounds.union(place.geometry.viewport);
    } else {
      bounds.extend(place.geometry.location);
    }
    google.maps.event.addListener(markers[i], 'click', showInfoWindow(i, place));
    addResult(place, markers[i], i);
    i++;
  });
  map.fitBounds(bounds);

  if (locationButton.classList.contains("hidden")) 
  {
    locationButton.classList.remove("hidden");
  } 
}

function showInfoWindow(i, place) {
  var marker = markers[i];

  result.getDetails({placeId: marker.placeResult.place_id},
    function(place, status) {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        return;
      }
      infoWindow.open(map, marker);
      buildIWContent(place);
    });
}

function addResult(place, marker, i) {
  var results = document.getElementById('results');
  var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
  var markerIcon = MARKER_PATH + markerLetter + '.png';

  var tr = document.createElement('tr');
  tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
  tr.onclick = function() {
    google.maps.event.trigger(marker, 'click');
  };

  var iconTd = document.createElement('td');
  var nameTd = document.createElement('td');
  var icon = document.createElement('img');
  icon.src = markerIcon;
  icon.setAttribute('class', 'placeIcon');
  icon.setAttribute('className', 'placeIcon');
  var name = document.createTextNode(place.name);
  iconTd.appendChild(icon);
  nameTd.appendChild(name);
  tr.appendChild(iconTd);
  tr.appendChild(nameTd);
  results.appendChild(tr);
}

function clearResults() {
  var results = document.getElementById('results');
  while (results.childNodes[0]) {
    results.removeChild(results.childNodes[0]);
  }
}

// Load the place information into the HTML elements used by the info window.
function buildIWContent(place) {
  document.getElementById('iw-icon').innerHTML = '<img class="hotelIcon" ' +
      'src="' + place.icon + '"/>';
  document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
      '">' + place.name + '</a></b>';
  document.getElementById('iw-address').textContent = place.vicinity;

  if (place.formatted_phone_number) {
    document.getElementById('iw-phone-row').style.display = '';
    document.getElementById('iw-phone').textContent =
        place.formatted_phone_number;
  } else {
    document.getElementById('iw-phone-row').style.display = 'none';
  }

  // Assign a five-star rating to the hotel, using a black star ('&#10029;')
  // to indicate the rating the hotel has earned, and a white star ('&#10025;')
  // for the rating points not achieved.
  if (place.rating) {
    var ratingHtml = '';
    for (var i = 0; i < 5; i++) {
      if (place.rating < (i + 0.5)) {
        ratingHtml += '&#10025;';
      } else {
        ratingHtml += '&#10029;';
      }
    document.getElementById('iw-rating-row').style.display = '';
    document.getElementById('iw-rating').innerHTML = ratingHtml;
    }
  } else {
    document.getElementById('iw-rating-row').style.display = 'none';
  }

  // The regexp isolates the first part of the URL (domain plus subdomain)
  // to give a short URL for displaying in the info window.
  if (place.website != 0) {
    var fullUrl = place.website;
    var website = hostnameRegexp.exec(place.website);
    if (website === null) {
      website = 'http://' + place.website + '/';
      fullUrl = website;
    }
    document.getElementById('iw-website-row').style.display = '';
    document.getElementById('iw-website').textContent = website;
  } else {
    document.getElementById('iw-website-row').style.display = 'none';
  }
}

function addToPlan() {
  var locationButton = document.getElementById("addLocation");
  var minuteValue = document.getElementById('minuteMark');
  var hourValue = document.getElementById('hourMark');
  var dayValue = document.getElementById('dayMark');
  var mapToggle = document.getElementById("hideMap");
  var activityVal = document.getElementById("enterActivity").value;
  var submitValue = false;
  
  if (activityVal == "Stay the Night")
  {
  }
   
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

function displayDestination() {
  var picture = document.getElementById("pictureToggle");
  var destination = document.getElementById("destinationToggle");
  var activity = document.getElementById("activityToggle");
  var food = document.getElementById("foodToggle");
  var back = document.getElementById("backToggle");
  var time = document.getElementById("timeToggle");

  if (!picture.classList.contains("hidden")) 
  {
    picture.classList.add("hidden");
  }
  if (!activity.classList.contains("hidden")) 
  {
    activity.classList.add("hidden");
  }
  if (!food.classList.contains("hidden")) 
  {
    food.classList.add("hidden");
  }
  if (destination.classList.contains("hidden")) 
  {
    destination.classList.remove("hidden");
  } 
  if (back.classList.contains("hidden")) 
  {
    back.classList.remove("hidden");
  }
  if (time.classList.contains("hidden")) 
  {
    time.classList.remove("hidden");
  }
}

function displayActivity() {
  var picture = document.getElementById("pictureToggle");
  var destination = document.getElementById("destinationToggle");
  var activity = document.getElementById("activityToggle");
  var food = document.getElementById("foodToggle");
  var back = document.getElementById("backToggle");
  var time = document.getElementById("timeToggle");

  if (!picture.classList.contains("hidden")) 
  {
    picture.classList.add("hidden");
  }
  if (!destination.classList.contains("hidden")) 
  {
    destination.classList.add("hidden");
  }
  if (!food.classList.contains("hidden")) 
  {
    food.classList.add("hidden");
  }
  if (activity.classList.contains("hidden")) 
  {
    activity.classList.remove("hidden");
  } 
  if (back.classList.contains("hidden")) 
  {
    back.classList.remove("hidden");
  }
  if (time.classList.contains("hidden")) 
  {
    time.classList.remove("hidden");
  }
}

function displayFood() {
  var picture = document.getElementById("pictureToggle");
  var destination = document.getElementById("destinationToggle");
  var activity = document.getElementById("activityToggle");
  var food = document.getElementById("foodToggle");
  var back = document.getElementById("backToggle");
  var time = document.getElementById("timeToggle");

  if (!picture.classList.contains("hidden")) 
  {
    picture.classList.add("hidden");
  }
  if (!activity.classList.contains("hidden")) 
  {
    activity.classList.add("hidden");
  }
  if (!destination.classList.contains("hidden")) 
  {
    destination.classList.add("hidden");
  }
  if (food.classList.contains("hidden")) 
  {
    food.classList.remove("hidden");
  } 
  if (back.classList.contains("hidden")) 
  {
    back.classList.remove("hidden");
  }
  if (time.classList.contains("hidden")) 
  {
    time.classList.remove("hidden");
  }
}

function displayPicture() {
  var picture = document.getElementById("pictureToggle");
  var destination = document.getElementById("destinationToggle");
  var activity = document.getElementById("activityToggle");
  var food = document.getElementById("foodToggle");
  var back = document.getElementById("backToggle");
  var location = document.getElementById("addLocation");
  var time = document.getElementById("timeToggle");

  if (picture.classList.contains("hidden")) 
  {
    picture.classList.remove("hidden");
  }
  if (!activity.classList.contains("hidden")) 
  {
    activity.classList.add("hidden");
  }
  if (!destination.classList.contains("hidden")) 
  {
    destination.classList.add("hidden");
  }
  if (!food.classList.contains("hidden")) 
  {
    food.classList.add("hidden");
  } 
  if (!back.classList.contains("hidden")) 
  {
    back.classList.add("hidden");
  }
  if (!location.classList.contains("hidden")) 
  {
    location.classList.add("hidden");
  }
  if (!time.classList.contains("hidden")) 
  {
    time.classList.add("hidden");
  }
}