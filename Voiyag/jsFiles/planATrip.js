// Used for stating whether to add start / end dates or not
var rowCount = 0;
// Global used for the start date of the trip
var startTripDate;
// Global used for the end date of the trip
var endTripDate;

// Datepicker function that autopopulates the calendars for choosing the dates
$(function() {

    // Sets the very minimum date (today) and adds an auto end-date in 29 days; Sets the weekday names
    var start = moment();
    var end = moment().add(5, 'days');
    var minDate = moment();
    var weekday = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    var startDay;
    var endDay;

    // Sets start and end date visible in correct format
    function cb(start, end) 
    {
      startDay = weekday[start.day()];
      endDay = weekday[end.day()];
      // Dates used for filling out the start / end dates in the plan per 'Update Trip'
      startTripDate = (startDay + " " + start.format('MM/DD/YYYY'));
      endTripDate = (endDay + " " + end.format('MM/DD/YYYY'));
      $('#datePicker span').html(startDay + " " + start.format('MM/DD') + ' - ' + endDay + " " + end.format('MM/DD'));
    }

    // Datepicker options filled in
    $('#datePicker').daterangepicker(
    {
      startDate: start,
      endDate: end,
      minDate: moment(),
      autoApply: true      
    }, cb);

    cb(start, end);
});

// Adds the coloring for the datepicker for the active dates & inbetween
$('.placeholderColor').on('click','.triplocation',function() 
{
  $(this).closest('.placeholderColor').find('.placeholderColor--active').removeClass('placeholderColor--active');
  $(this).addClass('placeholderColor--active');
})
$('.placeholderColor').on('click','.placeholderColor--active',function() 
{
  $(this).removeClass('placeholderColor--active');
});

// Fills in the selection options for days, hours, and minutes
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
  for(i=1;i<=4;i++)
  {
    x = (i-1)*15;
    $minute.append($('<option></option>').val(i).html(x + ' Min'))
  }
});

function initialize()
{
  var planStart = document.getElementById('toLocation');
  new google.maps.places.Autocomplete(planStart);

  var planEnd = document.getElementById('fromLocation');
  new google.maps.places.Autocomplete(planEnd);
}

google.maps.event.addDomListener(window, 'load', initialize);

$(window).resize(function(){ 
  var window_width = window.innerWidth;
  var popularMain = document.getElementById("popularMain"); 
  var aboutMain = document.getElementById("aboutMain");
  var contactMain = document.getElementById("contactMain");
  var popularSec = document.getElementById("popularSec"); 
  var aboutSec = document.getElementById("aboutSec");
  var contactSec = document.getElementById("contactSec");
  var more = document.getElementById("more");
  var headerInfo = document.getElementById("headerInfo");

  if(window_width < 800)
  {
    if(!contactMain.classList.contains("d-none"))
    {
      contactMain.classList.add("d-none")
    }
    if(more.classList.contains("d-none"))
    {
      more.classList.remove("d-none")
    }
    if(contactSec.classList.contains("d-none"))
    {
      contactSec.classList.remove("d-none")
    }
  }
  if(window_width < 740)
  {
    if(!aboutMain.classList.contains("d-none"))
    {
      aboutMain.classList.add("d-none")
    }
    if(aboutSec.classList.contains("d-none"))
    {
      aboutSec.classList.remove("d-none")
    }
  }
  if(window_width < 680)
  {
    if(!popularMain.classList.contains("d-none"))
    {
      popularMain.classList.add("d-none")
    }
    if(popularSec.classList.contains("d-none"))
    {
      popularSec.classList.remove("d-none")
    }
  }
  if(window_width >= 800)
  {
    if(contactMain.classList.contains("d-none"))
    {
      contactMain.classList.remove("d-none")
    }
    if(!more.classList.contains("d-none"))
    {
      more.classList.add("d-none")
    }
    if(!contactSec.classList.contains("d-none"))
    {
      contactSec.classList.add("d-none")
    }
  }
  if(window_width >= 740)
  {
    if(aboutMain.classList.contains("d-none"))
    {
      aboutMain.classList.remove("d-none")
    }
    if(!aboutSec.classList.contains("d-none"))
    {
      aboutSec.classList.add("d-none")
    }
  }
  if(window_width >= 680)
  {
    if(popularMain.classList.contains("d-none"))
    {
      popularMain.classList.remove("d-none")
    }
    if(!popularSec.classList.contains("d-none"))
    {
      popularSec.classList.add("d-none")
    }
  }
});

$(document).ready(function(){
  var window_width = window.innerWidth;
  var popularMain = document.getElementById("popularMain"); 
  var aboutMain = document.getElementById("aboutMain");
  var contactMain = document.getElementById("contactMain");
  var popularSec = document.getElementById("popularSec"); 
  var aboutSec = document.getElementById("aboutSec");
  var contactSec = document.getElementById("contactSec");
  var more = document.getElementById("more");
  var headerInfo = document.getElementById("headerInfo");

  if(window_width < 800)
  {
    if(!contactMain.classList.contains("d-none"))
    {
      contactMain.classList.add("d-none")
    }
    if(more.classList.contains("d-none"))
    {
      more.classList.remove("d-none")
    }
    if(contactSec.classList.contains("d-none"))
    {
      contactSec.classList.remove("d-none")
    }
  }
  if(window_width < 740)
  {
    if(!aboutMain.classList.contains("d-none"))
    {
      aboutMain.classList.add("d-none")
    }
    if(aboutSec.classList.contains("d-none"))
    {
      aboutSec.classList.remove("d-none")
    }
  }
  if(window_width < 680)
  {
    if(!popularMain.classList.contains("d-none"))
    {
      popularMain.classList.add("d-none")
    }
    if(popularSec.classList.contains("d-none"))
    {
      popularSec.classList.remove("d-none")
    }
  }
  if(window_width >= 800)
  {
    if(contactMain.classList.contains("d-none"))
    {
      contactMain.classList.remove("d-none")
    }
    if(!more.classList.contains("d-none"))
    {
      more.classList.add("d-none")
    }
    if(!contactSec.classList.contains("d-none"))
    {
      contactSec.classList.add("d-none")
    }
  }
  if(window_width >= 740)
  {
    if(aboutMain.classList.contains("d-none"))
    {
      aboutMain.classList.remove("d-none")
    }
    if(!aboutSec.classList.contains("d-none"))
    {
      aboutSec.classList.add("d-none")
    }
  }
  if(window_width >= 680)
  {
    if(popularMain.classList.contains("d-none"))
    {
      popularMain.classList.remove("d-none")
    }
    if(!popularSec.classList.contains("d-none"))
    {
      popularSec.classList.add("d-none")
    }
  }
});