function initialize()
{
	var planStart = document.getElementById('destinationLocation');
	new google.maps.places.Autocomplete(planStart);
}

google.maps.event.addDomListener(window, 'load', initialize);