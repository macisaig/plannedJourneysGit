function initialize()
{
	var planStart = document.getElementById('toLocation');
	new google.maps.places.Autocomplete(planStart);

	var planStart = document.getElementById('fromLocation');
	new google.maps.places.Autocomplete(planStart);
}

google.maps.event.addDomListener(window, 'load', initialize);