$(function() {
  
$('.spacer-box').delay(0).show(0);
$('.title').delay(400).show(0);
$('.form_box').delay(400).show(0);
$('div.panel.callout').delay(400).show(0);
$('.graph_box').delay(400).animate({
 
opacity: 1,
 
},400);

  
$(document).scroll(function() {
                   
var scrollHeight = $(this).scrollTop();
 
var documentHeight = $(this).height();

var windowHeight = $(window).height();

var percent = 100 - (((documentHeight - windowHeight - scrollHeight) / (documentHeight - windowHeight)) * 100)

var percent_round = percent.toFixed(0)

$('#progress_meter').css("width", percent + "%");

if (percent_round > 6) {

$('#progress_meter').html(percent_round + "%").css("padding-right", 10 + "px");;

}

else {

$('#progress_meter').html("").css("padding-right", 0 + "px");

}

});
  
$("input[name='vehicle'], #totalMiles").change(function() {

var id = $("input[name='vehicle']:checked").val();
if (id == "car" || id == "van") {
var beforeRate = 45;
var afterRate = 25;
}
else if (id == "motor cycle") {
var beforeRate = 25;
var afterRate = 25;
}
else {
var beforeRate = 0;
var afterRate = 0;
}
var mileage = $("#totalMiles").val();
if (mileage < 10001) {
var expense = mileage * (beforeRate/100);
}
else {
var expense = ((mileage - 10000) * (afterRate/100)) + (10000 * (beforeRate/100));
}
                                  $('#beforeRate').val(beforeRate);
                                  $('#afterRate').val(afterRate);
                                  $('#totalVehicle').val(expense);
});
  
});