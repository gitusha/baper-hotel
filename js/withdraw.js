// add evenet handelr with withdraw button
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawFieldAmountString = withdrawField.value;

    const newWithdrawAmount = parseFloat(newWithDrawFieldAmountString);
    withdrawField.value = '';
    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid number');
        return;
    }

    // withdraw balance add


    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalStrinng = withdrawTotalElement.innerText;
    const previousWithdrawTotoal = parseFloat(previousWithdrawTotalStrinng);
//   


const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

if(newWithdrawAmount > previousBalanceTotal){
    alert('Baap er Bank e Tk nai');
    return;
}
const currentWithdrawTotal = previousWithdrawTotoal + newWithdrawAmount;
   withdrawTotalElement.innerText = currentWithdrawTotal;

//  new balance total
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceTotalElement.innerText = newBalanceTotal;



withdrawField.value = '';

// console.log(previousBalanceTotal);















    



})