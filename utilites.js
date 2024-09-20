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