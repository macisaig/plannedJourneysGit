$(function() {

    var start = moment();
    var end = moment().add(29, 'days');
    var minDate = moment();
    var weekday = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    var startDay;
    var endDay;

    function cb(start, end) {
        startDay = weekday[start.day()];
        endDay = weekday[end.day()];
        $('#datePicker span').html(startDay + " " + start.format('MM/DD') + ' - ' + endDay + " " + end.format('MM/DD'));
    }

    $('#datePicker').daterangepicker({
      startDate: start,
      endDate: end,
      minDate: moment(),
      autoApply: true      
    }, cb);

    cb(start, end);

});

function initialize()
{

  var planStart = document.getElementById('toLocation');
  var planEnd = document.getElementById('fromLocation');
  new google.maps.places.Autocomplete(planStart);
  new google.maps.places.Autocomplete(planEnd);
}

google.maps.event.addDomListener(window, 'load', initialize);