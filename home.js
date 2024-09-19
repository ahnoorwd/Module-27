document.getElementById('add-money-button').addEventListener('click',function(event){
    event.preventDefault();
    const inputNumber=document.getElementById('input-ammuont').value;
    // console.log(inputNumber);

    const inputPin=document.getElementById('input-pin').value;
    // console.log(inputPin);

    if (inputPin==='1234'){
        console.log('add money completely');
        const balance=document.getElementById('raw-balance').innerText;
        // console.log(balance);
        const userMoney=parseFloat(inputNumber);
        const oldMoney=parseFloat(balance);
        const updatedMoney=userMoney+oldMoney;
        // console.log(userMoney);
        // const updatedValance=balance+inputNumber;
         console.log(updatedMoney);
         document.getElementById('raw-balance').innerText=updatedMoney;
    }
    else{
        alert('failed to add money.try again');
    }
})