function getInputValueById(id){
    const inputValue=document.getElementById(id).value;
    const converter=parseFloat(inputValue);
    return converter;
}
function getTextValueById(id){
    const TextValue=document.getElementById(id).innerText;
    const converterText=parseFloat(TextValue);
    return converterText;
}

function showTheSectionById(id){
    document.getElementById('admoney-form').classList.add('hidden');
    document.getElementById('cashout-form').classList.add('hidden');
    document.getElementById('transaction-form').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}