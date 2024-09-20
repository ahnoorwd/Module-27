document.getElementById('add-money-button').addEventListener('click',function(event){
    event.preventDefault();
   
    const addmoney=getInputValueById('input-ammuont');
    const InputPin=getInputValueById('input-pin');
    
    if (isNaN(addmoney)){
        alert("It's not A ammount");
        return;
    }

    if(InputPin===1234){
        const balance=getTextValueById('raw-balance');
        const newAmmount=addmoney+balance;
        document.getElementById('raw-balance').innerText=newAmmount;

        const p = document.createElement('p');
        p.innerText=`Added :${addmoney} tk. newbalance: ${newAmmount}`;
        document.getElementById('transaction-container').appendChild(p);
    }
    else{
        alert("faild! try again");
    }
})