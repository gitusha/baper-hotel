// step-1
document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
const newDepositAmount = parseFloat(newDepositAmountString);

  

// step-2
const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString);

// step-03 add numbers deposit total

const currentDeposittatal = previousDepositTotal + newDepositAmount;

depositTotalElement.innerText = currentDeposittatal;

//             step-4 add number of toatl balance
const balanceTotalElement = document.getElementById('balance-total');
const previouBalanceToatlString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previouBalanceToatlString);

// step-5 calculate current Balnce tatal
const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
// set the balance total
balanceTotalElement.innerText  = currentBalanceTotal;






depositField.value = '';


})