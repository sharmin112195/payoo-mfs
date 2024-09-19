// document.getElementById('id').addEventListener('click', function(){})

// step-1: set event handler
document.getElementById('button-login').addEventListener('click', function(event){
    // step-2: prevent default behaver (prevent reloading browser)
    event.preventDefault();
    console.log('login button click');

    // step-3:get the phone number and pin number
    const phoneNumber = document.getElementById ('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber)

    // step-4: validate phone and pin
    // This is temporary. You should do like this
    if(phoneNumber ==='95' && pinNumber ==='1234'){
        console.log('you are logged in')
        // step-5:allow user to use the website
    }
    else{
        alert('wrong phone number or pin')
    }


})