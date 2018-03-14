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
