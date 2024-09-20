document.getElementById('cashout-money-button').addEventListener('click',function(event){
   event.preventDefault();
   
   const cashoutmoney=getInputValueById('input-cash-out');
    const cashoutpin=getInputValueById('input-cashout-pin');

    if(cashoutpin===12345){
        const balance=getTextValueById('raw-balance');
        const newAmmount=balance-cashoutmoney;
        document.getElementById('raw-balance').innerText=newAmmount;
    }
    else{
        alert("faild! cashout please try again with correct Pin")
    }

})