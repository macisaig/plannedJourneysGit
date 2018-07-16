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