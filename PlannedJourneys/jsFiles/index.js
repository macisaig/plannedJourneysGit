$(function () {
    var dateNow = new Date();

    $('#toDate').datetimepicker({
      minDate:dateNow,
      stepping: 15
    });
    $('#fromDate').datetimepicker({
      useCurrent: false, //Important! See issue #1075
      minDate:dateNow,
      stepping: 15
    });
    $("#toDate").on("dp.change", function (e) {
        $('#fromDate').data("DateTimePicker").minDate(e.date);
    });
    $("#fromDate").on("dp.change", function (e) {
        $('#toDate').data("DateTimePicker").maxDate(e.date);
    });
});

function checkDates()
 {
	 var toDate = document.getElementById('toDateValue');
	 var fromDate = document.getElementById('fromDateValue');
	 var submitValue = false;
	 
	if ((toDate.value.length > 0) || (fromDate.value.length > 0))
	{
		submitValue = true;
		document.getElementById("errDate").innerHTML = "";
	}
	else
	{
		document.getElementById("errDate").innerHTML = "<span class='smallWarning'><strong>*Please Enter a Start or End Date*<strong></span>";
	}
	
	return submitValue;
 }
 
function initialize() {
	var inputStart = document.getElementById('enterStartLoc');
	var inputEnd = document.getElementById('enterEndLoc');
	new google.maps.places.Autocomplete(inputStart);
	new google.maps.places.Autocomplete(inputEnd);
}

google.maps.event.addDomListener(window, 'load', initialize);