$('#emailForm').on('submit', function(e){
     // Clears the form fields and shows the modal. 
     // Wasn't sure if I was expected to use PHP to send an email, 
     // or use Ajax to get a 200 success back then display modal or if this was all?
    document.getElementById("emailForm").reset();
    $('#emailSuccessModal').modal('show');
    e.preventDefault();
});
