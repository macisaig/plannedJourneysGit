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

$('.placeholderColor').on('click','.triplocation',function() {
  $(this).closest('.placeholderColor').find('.placeholderColor--active').removeClass('placeholderColor--active');
  alert('hello');
  $(this).addClass('placeholderColor--active');
}).on('click','.placeholderColor--active',function() {
  $(this).removeClass('placeholderColor--active');
});

var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 15, lng: 0},
    zoom: 2,
    mapTypeId: 'roadmap'
  });

$(function () 
{
  var selectElement = $('select.form-control');

  ifFirstOptionGrey();

  selectElement.on('change', function () 
  {
    ifFirstOptionGrey();
  })
});

function ifFirstOptionGrey() 
{
  if (selectElement[0].selectedIndex === 0) 
  {
    selectElement.addClass('first-option-selected');
  } 
  else 
  {
    selectElement.removeClass('first-option-selected');
  }
}