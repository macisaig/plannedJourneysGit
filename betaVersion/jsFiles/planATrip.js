$(function() {

    var start = moment();
    var end = moment().add(29, 'days');
    var minDate = moment();
    var weekday = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    var startDay;
    var endDay;

    function cb(start, end) 
    {
        startDay = weekday[start.day()];
        endDay = weekday[end.day()];
        $('#datePicker span').html(startDay + " " + start.format('MM/DD') + ' - ' + endDay + " " + end.format('MM/DD'));
    }

    $('#datePicker').daterangepicker(
    {
      startDate: start,
      endDate: end,
      minDate: moment(),
      autoApply: true      
    }, cb);

    cb(start, end);

});

$('.placeholderColor').on('click','.triplocation',function() {
  $(this).closest('.placeholderColor').find('.placeholderColor--active').removeClass('placeholderColor--active');
  alert('hello');
  $(this).addClass('placeholderColor--active');
}).on('click','.placeholderColor--active',function() {
  $(this).removeClass('placeholderColor--active');
});

$(function()
{
  var $day = $("#dayMark");
  for(i=1;i<=20;i++)
  {
    $day.append($('<option></option>').val(i).html(i-1 + ' Days'))
  }
  $day.append($('<option></option>').val(i).html('20+'));
  var $hour = $("#hourMark");
  for(i=1;i<25;i++)
  {
    $hour.append($('<option></option>').val(i).html(i-1 + ' Hrs'))
  }
  var $minute = $("#minuteMark");
  for(i=1;i<=5;i++)
  {
    x = (i-1)*15;
    $minute.append($('<option></option>').val(i).html(x + ' Min'))
  }
});

// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
var map, infoWindow, result, numPlace;
var markers = [];
var hostnameRegexp = new RegExp('^https?://.+?/');
var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
var tableCount = 0;

function initAutocomplete() {
  var activeLoc = document.getElementById('activityLocation');
  var planStart = document.getElementById('toLocation');
  var planEnd = document.getElementById('fromLocation');
  var i;

   if ($(window).width() < 767)
  {
    infoWindow = new google.maps.InfoWindow(
    {
      content: document.getElementById('info-content'),
      maxWidth: 200
    });
  }
  else
  {
    infoWindow = new google.maps.InfoWindow(
    {
      content: document.getElementById('info-content')
    });
  }

  map = new google.maps.Map(document.getElementById('map'), 
  {
    center: {lat: 15, lng: 0},
    zoom: 2,
    mapTypeId: 'roadmap'
  });

  // Create the search box and link it to the UI element.
  var searchBox1 = new google.maps.places.SearchBox(activeLoc);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox1.setBounds(map.getBounds());
  });

  // Create the search box and link it to the UI element.
  var searchBox2 = new google.maps.places.SearchBox(planEnd);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox2.setBounds(map.getBounds());
  });

  // Create the search box and link it to the UI element.
  var searchBox3 = new google.maps.places.SearchBox(planStart);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox3.setBounds(map.getBounds());
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
    // Clear out the old markers.

    placesChanged(places);
  });

  searchBox3.addListener('places_changed', function() {
    places=searchBox3.getPlaces();
    // Clear out the old markers.

    placesChanged(places);
  });
}

function searchMap()
{
  places=searchBox1.getPlaces();
    // Clear out the old markers.

  placesChanged(places);

  return false;
}

function placesChanged(places)
{
  var i=0
  var addValue = document.getElementById("addressValue");
  var inputVal = document.getElementById("inputValue");

  markers.forEach(function(marker) {
    marker.setMap(null);
  });
  markers = [];
  clearResults(); 

  if (places.length == 0)
  {
    return;
  }

  numPlace = places.length;

  // For each place, get the icon, name and location.
  var bounds = new google.maps.LatLngBounds();

  places.forEach(function(place) 
  {
    if (!place.geometry) 
    {
      console.log("Returned place contains no geometry");
      return;
    }
    var icon = 
    {
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };

    var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
    var markerIcon = MARKER_PATH + markerLetter + '.png';
    // Create a marker for each place.
    markers[i] = new google.maps.Marker(
    {
      map: map,
      icon: markerIcon,
      title: place.name,
      position: place.geometry.location
    });
    markers[i].placeResult = place;

    if (place.geometry.viewport) 
    {
      // Only geocodes have viewport.
      bounds.union(place.geometry.viewport);
    } 
    else 
    {
      bounds.extend(place.geometry.location);
    }

    google.maps.event.addListener(markers[i], 'click', showInfoWindow);
    addResult(place, markers[i], i);

    if(places.length == 1)
    {
      if (place.url == "")
      {
        addValue.value = place.vicinity;  
      }
      else
      {
        var additionalAdd = place.vicinity;
        var combineAdd = place.name + ", " + place.vicinity;
        addValue.value = combineAdd;
      }
    }
    i++;
  });

  if (inputVal.classList.contains("hidden")) 
  {
    inputVal.classList.remove("hidden");
  } 

  map.fitBounds(bounds);
}

function showInfoWindow() 
{
  var marker = this;

  if (addressValue.classList.contains("hidden"))
  {
    addValue.classList.remove("hidden");
  }

  result.getDetails({placeId: marker.placeResult.place_id},
    function(place, status) 
    {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        return;
    }
    infoWindow.open(map, marker);
    var additionalAdd = place.vicinity;
    var combineAdd = place.name + ", " + place.vicinity;
    document.getElementById("addressValue").value = combineAdd;
    buildIWContent(place);
  });
}

function addResult(place, marker, i) 
{
  var results = document.getElementById('results');
  var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
  var markerIcon = MARKER_PATH + markerLetter + '.png';
  var table = document.getElementById('listing');

  if (table.classList.contains('hidden'))
  {
    table.classList.remove('hidden');
  }

  var tr = document.createElement('tr');
  tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
  tr.onclick = function() 
  {
    google.maps.event.trigger(marker, 'click');
  };

  var iconTd = document.createElement('td');
  var nameTd = document.createElement('td');
  var ratingTd = document.createElement('td');
  var icon = document.createElement('img');
  icon.src = markerIcon;
  icon.setAttribute('class', 'placeIcon');
  icon.setAttribute('className', 'placeIcon');
  var name = document.createTextNode(place.name);
  var rating = document.createTextNode('Rating: ' + place.rating);
  iconTd.appendChild(icon);
  nameTd.appendChild(name);
  ratingTd.appendChild(rating);
  tr.appendChild(iconTd);
  tr.appendChild(nameTd);
  tr.appendChild(ratingTd);
  results.appendChild(tr);
}

function clearResults() 
{
  var results = document.getElementById('results');
  while (results.childNodes[0]) 
  {
    results.removeChild(results.childNodes[0]);
  }
}

// Load the place information into the HTML elements used by the info window.
function buildIWContent(place) 
{
  document.getElementById('iw-icon').innerHTML = '<img class="hotelIcon" ' +
      'src="' + place.icon + '"/>';
  document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
      '">' + place.name + '</a></b>';
  document.getElementById('iw-address').textContent = place.vicinity;

  if (place.formatted_phone_number) 
  {
    document.getElementById('iw-phone-row').style.display = '';
    document.getElementById('iw-phone').textContent =
        place.formatted_phone_number;
  } 
  else 
  {
    document.getElementById('iw-phone-row').style.display = 'none';
  }

  // Assign a five-star rating to the hotel, using a black star ('&#10029;')
  // to indicate the rating the hotel has earned, and a white star ('&#10025;')
  // for the rating points not achieved.
  if (place.rating) 
  {
    var ratingHtml = '';
    for (var i = 0; i < 5; i++) 
    {
      if (place.rating < (i + 0.5)) 
      {
        ratingHtml += '&#10025;';
      } 
      else 
      {
        ratingHtml += '&#10029;';
      }
    document.getElementById('iw-rating-row').style.display = '';
    document.getElementById('iw-rating').innerHTML = ratingHtml;
    }
  } 
  else 
  {
    document.getElementById('iw-rating-row').style.display = 'none';
  }

  // The regexp isolates the first part of the URL (domain plus subdomain)
  // to give a short URL for displaying in the info window.
  if (place.website != 0) 
  {
    var fullUrl = place.website;
    var website = hostnameRegexp.exec(place.website);
    if (website === null) 
    {
      website = 'http://' + place.website + '/';
      fullUrl = website;
    }
    document.getElementById('iw-website-row').style.display = '';
    document.getElementById('iw-website').textContent = website;
  } 
  else 
  {
    document.getElementById('iw-website-row').style.display = 'none';
  }
}

var count = "1";

function addToPlan() {
  var locationButton = document.getElementById("addLButton");
  var minuteValue = document.getElementById('minuteMark');
  var hourValue = document.getElementById('hourMark');
  var dayValue = document.getElementById('dayMark');
  var addValue = document.getElementById("addressValue");
  var table = document.getElementById("myTable");
  var activityValue = document.getElementById("selectActivity");
  var description = document.getElementById("descriptVal");
  var itin = document.getElementById("itinerary");
  var inValue = document.getElementById("inputValue");
  var overallTime = "";
  var submitValue = false;
  var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var descript = document.getElementById("descriptVal");
   

  if ((minuteValue.options[0].selected === true)  && (hourValue.options[0].selected === true) && (dayValue.options[0].selected === true))
  {
    document.getElementById("errTime").innerHTML = "<span class='smallWarning'><strong>*Please Enter a Length of Time*<strong></span>";
    return submitValue;
  }
  else if (activityValue.options[0].selected === true)
  {
    document.getElementById("errActivity").innerHTML = "<span class='smallWarning'><strong>*Please Select an Activity Type*<strong></span>";
    document.getElementById("errTime").innerHTML = "";
    return submitValue;
  }
  else if (addValue.value === "")
  {
    document.getElementById("errAdd").innerHTML = "<span class='smallWarning'><strong>*Please Enter a Location*</strong></span>";
    document.getElementById("errTime").innerHTML = "";
    document.getElementById("errActivity").innerHTML = "";
    return submitValue;
  }
  else
  {
    submitValue = true;
    document.getElementById("errTime").innerHTML = "";
    document.getElementById("errActivity").innerHTML = "";
    document.getElementById("errAdd").innerHTML = "";
  }

  if (itin.classList.contains("hidden"))
  {
    itin.classList.remove("hidden");
  }
  if (!inValue.classList.contains("hidden"))
  {
    inValue.classList.add("hidden");
  }

  tableCount++;

  var tr = document.createElement('tr');
  var locationTd = document.createElement('td');
  var activityTd = document.createElement('td');
  var timeTd = document.createElement('td');
  var descriptTd = document.createElement('td');
  var deleteTd = document.createElement('td');
  tr.style.backgroundColor = (tableCount % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
  var name = document.createTextNode(addValue.value);
  var selectTd = document.createElement('td');
  var selectList = document.createElement("select");
  if (activityValue.value != "")
  {
    var actVal = document.createTextNode(activityValue.options[activityValue.selectedIndex].innerHTML);
  }
  
  if (dayValue.value > 0)
  {
    overallTime = overallTime + dayValue.value + " Days ";
  }
  if (hourValue.value > 0)
  {
    overallTime = overallTime + hourValue.value + " Hours ";
  }
  if (minuteValue.value > 0)
  {
    overallTime = overallTime + minuteValue.value*15 + " Minutes";
  }
  var timeSpent = document.createTextNode(overallTime);

  for (var k = 0; k < numArray.length; k++)
  {
    var numOption = document.createElement("option");
    numOption.value = numArray[k];
    numOption.text = numArray[k];
    selectList.appendChild(numOption);
  }
  
  var descriptText = document.createTextNode(descript.value);

  minuteValue.value = 1;
  hourValue.value = 1;
  dayValue.value = 1;
  addValue.value = "";
  descript.value = "";

  var strHtml5 = "<INPUT TYPE=\"Button\" CLASS=\"Button\" onClick=\"delRow(this)\" VALUE=\"Delete\">";
  deleteTd.innerHTML = strHtml5.replace(/!count!/g,count);
  count = parseInt(count) + 1;

  locationTd.appendChild(name);
  activityTd.appendChild(actVal);
  timeTd.appendChild(timeSpent);
  descriptTd.appendChild(descriptText);
  selectTd.appendChild(selectList);
  tr.appendChild(locationTd);
  tr.appendChild(activityTd);
  tr.appendChild(timeTd);
  tr.appendChild(selectTd);
  tr.appendChild(descriptTd);
  tr.appendChild(deleteTd);
  table.appendChild(tr);

  return submitValue;
}

function delRow(rowItem)
{
  var parent = rowItem.parentNode.parentNode;
  parent.parentNode.removeChild(parent);
}