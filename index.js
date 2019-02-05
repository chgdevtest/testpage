var checkForm = function(first, last, phone, email, comments){

    console.log(first, last, phone, email, comments);

    if(!first || !last){
        alert('Please enter a valid first and last name');
        return;
    }
    if(!phone){
        alert('Please enter a valid Phone number');
        return;
    }
    if(!email){
        alert('Please enter a valid Email');
        return;
    }
    alert('Thank you!')

}

var formatPhone = function(input){
    input = input.replace(/\D/g,'');
    input = input.substring(0,10);
    var size = input.length;
    if(size == 0){
        input = input;
    }else if(size < 4){
        input = '('+input;
    }else if(size < 7){
        input = '('+input.substring(0,3)+') '+input.substring(3,6);
    }else{
        input = '('+input.substring(0,3)+') '+input.substring(3,6)+' - '+input.substring(6,10);
    }
    document.getElementById('phone-input').value = input;
  }