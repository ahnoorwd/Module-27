document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    // console.log('login button is clicked');

    const phoneNumber=document.getElementById('phone-number').value;
    console.log(phoneNumber);
    const passWord=document.getElementById('pin-number').value;
    console.log(passWord);
})