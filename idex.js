function GetFun() {
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const percentage = parseFloat(document.getElementById("percentage").value);
    const errorMessage = document.getElementById("errorMessage");
    const tipAmountInput = document.getElementById("tipAmount");
    const totalamountInput = document.getElementById("totalAmount");

    console.log(billAmount);
    console.log(percentage);

    if (isNaN(billAmount) || isNaN(percentage) || billAmount < 0 || percentage < 0) {
        errorMessage.textContent = "Please enter valid numbers";
        tipAmountInput.value = "";
        totalamountInput.value = "";
        return;
    }

    const tip = (billAmount * percentage) / 100;
    const total = billAmount + tip;
    tipAmountInput.value = tip.toFixed(2);
    totalamountInput.value = total.toFixed(2);
    errorMessage.textContent = "";
}
