document.getElementById('button-login')
   .addEventListener('click', function(event){
    event.preventDefault();
    console.log('login click')

    // get phone number or pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);

    // bad way to validate
    if(phoneNumber === '10' && pinNumber === '1234'){
        console.log('you are logged in')
    }
    else{
        alert('wrong phone number or pin')
    }
   })
