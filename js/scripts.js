
$(document).ready(function() {
  $("form#beverage").submit(function(event) {
  var beverage = $("input#beverage").val();
  event.preventDefault();
});

$("form.radio").submit(function(event) {
  var flavor = $("input:radio[name=flavor]:checked").val();
  event.preventDefault();
});
});
