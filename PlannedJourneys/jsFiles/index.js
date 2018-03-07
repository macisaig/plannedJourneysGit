
$(function() {
  $("#fromperiod").datepicker({
    minDate: +0,
    defaultDate: "+1w",
    changeMonth: true,
    changeYear: true,
    numberOfMonths: 1,
    onClose: function(selectedDate) {
      $("#toperiod").datepicker("option", "minDate", selectedDate);
    }
  });
  $("#toperiod").datepicker({
    minDate: +0,
    defaultDate: "+1w",
    changeMonth: true,
    changeYear: true,
    numberOfMonths: 1,
    onClose: function(selectedDate) {
      $("#fromperiod").datepicker("option", "maxDate", selectedDate);
    }
  });
});

