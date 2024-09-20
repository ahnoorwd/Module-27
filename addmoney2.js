document.getElementById('add-money-button').addEventListener('click',function(event){
    event.preventDefault();
   
    const addmoney=getInputValueById('input-ammuont');
    const InputPin=getInputValueById('input-pin');

    if(InputPin===1234){
        const balance=getTextValueById('raw-balance');
        const newAmmount=addmoney+balance;
        document.getElementById('raw-balance').innerText=newAmmount;
    }
    else{
        alert("faild! try again");
    }
})