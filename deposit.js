// Step-1 Add event listener to deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2 get the deposit amount from the deposit field
    const depositField = document.getElementById('deposit-field');
    // for input field, use .value to get the value inside the input field 
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);


    // step-3: get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    // for non-input(element other than input, textarea) use innerText to get the text
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    // Step-4: Add number to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // ste the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: Calculate current balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // ste the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // Step-7: Clear the deposit field
    depositField.value = '';

})
