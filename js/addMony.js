document.getElementById('donate-button')
.addEventListener('click',function(event){
    event.preventDefault();
    const addMoney = getInputFieldById('input-box');
    const amountMoney= getTextFieldById('Amount-content')
    if (!isNaN(addMoney) && addMoney > 0){
            const newBalance = addMoney + amountMoney;
            document.getElementById('Amount-content').innerText = newBalance;
            document.getElementById('input-box').value = '';
    alert("✅ Donation Confirmed! Thank you ❤️");
        
    }
    else{
        alert('no donation! please add your money')
    }
    
})

document.getElementById('donate-button-2')
.addEventListener('click',function(event){
    event.preventDefault();
    const addMoney = getInputFieldById('input-box-2');
    const amountMoney= getTextFieldById('Amount-content-2')
    if (!isNaN(addMoney) && addMoney > 0){
            const newBalance = addMoney + amountMoney;
            document.getElementById('Amount-content-2').innerText = newBalance;
            document.getElementById('input-box-2').value = '';
    alert("✅ Donation Confirmed! Thank you ❤️");
        
    }
    else{
        alert('no donation! please add your money')
    }
    
})

document.getElementById('donate-button-3')
.addEventListener('click',function(event){
    event.preventDefault();
    const addMoney = getInputFieldById('input-box-3');
    const amountMoney= getTextFieldById('Amount-content-3')
    if (!isNaN(addMoney) && addMoney > 0){
            const newBalance = addMoney + amountMoney;
            document.getElementById('Amount-content-3').innerText = newBalance;
        document.getElementById('input-box-3').value = '';    
    alert("✅ Donation Confirmed! Thank you ❤️");
        
    }
    else{
        alert('no donation! please add your money')
    }
    
})