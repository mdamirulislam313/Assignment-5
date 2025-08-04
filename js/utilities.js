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
function showSection (id){
    document.getElementById('main-section').classList.add('hidden')
    document.getElementById('history-section').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')
}
