function getInputFieldById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat ( inputValue);
    if (isNaN(inputNumber)){
        return 0;
    }
    return inputNumber;
}
function getTextFieldById (id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat (textValue)
    if (isNaN(textNumber)){
        return 0;
    }
    return textNumber;
}
