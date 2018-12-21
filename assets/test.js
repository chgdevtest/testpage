$( document ).ready(function() {
    console.log( "ready!" );
});
$('form#sidebar-form').submit( function(event) {
  event.preventDefault();
  var fieldOne = $('#field-1').val().trim();
  var fieldTwo = $('#field-2').val().trim();
  var fieldThree = $('#field-3').val().trim();
  var fieldFour = $('#field-4').val().trim();
  console.log(fieldOne);
  if ((fieldOne === "") || (fieldTwo === "") || (fieldThree === "") || (fieldFour === "")) {
    alert('Please fill out every form field.');
  } else {
    $('#form-submitted').modal();
  }
})
