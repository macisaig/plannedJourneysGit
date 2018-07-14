$(function() {

    var start = moment();
    var end = moment().add(29, 'days');
    var minDate = moment();

    function cb(start, end) {
        $('#datePicker span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }

    $('#datePicker').daterangepicker({
      startDate: start,
      endDate: end,
      minDate: moment(),
      autoApply: true
    }, cb);

    cb(start, end);

});