document.getElementById('cashout-money-button').addEventListener('click',function(event){
   event.preventDefault();
   
    const cashoutmoney=getInputValueById('input-cash-out');
    const cashoutpin=getInputValueById('input-cashout-pin');

    if (isNaN(cashoutmoney)){
        alert("It's not A ammount");
        return;
    }

    if(cashoutpin===12345){
        const balance=getTextValueById('raw-balance');
        if(cashoutmoney>balance){
            alert("Insufficient Balance");
            return;
        }
        const newAmmount=balance-cashoutmoney;
        document.getElementById('raw-balance').innerText=newAmmount;

      const div = document.createElement('div');
      div.classList.add('bg-yellow-300');
      div.innerHTML=`
      
      <h4 class="text-2xl font-bold">cashout</h4>
      <p>${cashoutmoney} withdraw .New balance ${newAmmount}</p>

      `
      document.getElementById('transaction-container').appendChild(div);

        }
    else{
        alert("faild! cashout please try again with correct Pin")
    }

})