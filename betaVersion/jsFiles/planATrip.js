$(function() {

    var start = moment();
    var end = moment().add(29, 'days');
    var minDate = moment();

    function cb(start, end) {
        $('#datePicker span').html(start.format('MM/DD/YYYY') + ' - ' + end.format('MM/DD/YYYY'));
    }

    $('#datePicker').daterangepicker({
      startDate: start,
      endDate: end,
      minDate: moment(),
      autoApply: true      
    }, cb);

    cb(start, end);

});