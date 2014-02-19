$(function() {
  
$('.datepicker.active').fdatepicker()
  
//Click calendar icon to focus on input and show datepicker

$('.postfix').on('click', function() {

$(this).parent().parent().find('.datepicker').focus();
       
});
  
//Financial year end date - calculate automatically //
  
$('.datepicker.start_date').fdatepicker().on('changeDate', function(ev) {

var newDate = new Date(ev.date)

var end_date = newDate.setDate(newDate.getDate() + 364);
var date = new Date(end_date);
var day = date.getDate();
var month = date.getMonth() + 1;
if (month < 10) {
month = '0' + month
};
if (day < 10) {
day = '0' + day
};
var year = date.getFullYear();
var end_date = day + '/' + month + '/' + year;
$('.end_date').val(end_date);

});

});