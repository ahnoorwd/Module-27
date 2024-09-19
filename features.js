document.getElementById('cashout-button').addEventListener('click',function(){
    document.getElementById('cashout-form').classList.remove('hidden');
    document.getElementById('admoney-form').classList.add('hidden');
});

document.getElementById('addmoney-button').addEventListener('click',function(){
    document.getElementById('admoney-form').classList.remove('hidden');
    document.getElementById('cashout-form').classList.add('hidden');
    
});