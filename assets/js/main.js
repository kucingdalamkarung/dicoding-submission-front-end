const currentBalanceInfo = document.querySelector("#current-balance");
const expensesInfo = document.querySelector("#expenses");

let balance = 0;
let expenses = 0;

function saveData(event) {
    event.preventDefault();

    let amount = event.target["amount"].value.split(";")[1];
    let operator = event.target["amount"].value.split(";")[0];
    let note = event.target["note"].value;

    if (operator == "+") {
        balance = parseInt(currentBalanceInfo.innerHTML) + parseInt(amount);
        expenses += 0;
    } else if (operator == "-") {
        balance = parseInt(currentBalanceInfo.innerHTML) - parseInt(amount);
        expenses += parseInt(amount);
    }

    currentBalanceInfo.innerHTML = balance;
    expensesInfo.innerHTML = expenses;

    event.target["amount"].value = "";
    event.target["note"].value = "";

    document.getElementById("history").innerHTML += `<article class="card history-content"><p>${note}</p><p>${amount}</p></article>`
}
