document.getElementById('cashout-money-button').addEventListener('click',function(event){
    event.preventDefault();
    
    const cashoutAmmount=document.getElementById('input-cash-out').value;
    const cashoutPinNumber=document.getElementById('input-cashout-pin').value;
    
    if(cashoutPinNumber==='1234'){
        console.log('successfully done cashout');
    }
    else{
        alert('faild cashout try again');
    }

    const ownerAmmount=document.getElementById('raw-balance').innerText;
    
    const convertOwnerAmmount=parseFloat(ownerAmmount);
    const convertInputAmmount=parseFloat(cashoutAmmount);
    const remainingAmmount=convertOwnerAmmount-convertInputAmmount;
    document.getElementById('raw-balance').innerText=remainingAmmount;

})