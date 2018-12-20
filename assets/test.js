$( document ).ready(function() {
    console.log( "ready!" );
});
$('form#sidebar-form').submit( function(event) {
  if (1 === 1) {
    alert('try again!');
  } else {
    alert('submitted!');
    event.preventDefault();
  }
})
