let billValue = 0;
let tipPercentage = 0;
let peopleCount = 1;

const billInput = document.getElementById("bill");
const tipButtons = document.querySelectorAll(".tip-buttons button");
const customTipInput = document.getElementById("tip-custom");
const peopleInput = document.getElementById("people");
const peopleError = document.getElementById("people-error");

const tipAmountDisplay = document.getElementById("amount-1");
const totalAmountDisplay = document.getElementById("amount-2");
const resetButton = document.getElementById("reset");

function calculateTip() {
    if (peopleCount > 0 && billValue >= 0) {
        const tipTotal = billValue * (tipPercentage / 100);
        const tipPerPerson = tipTotal / peopleCount;
        const totalPerPerson = (billValue + tipTotal) / peopleCount;

        tipAmountDisplay.innerText = `$${tipPerPerson.toFixed(2)}`;
        totalAmountDisplay.innerText = `$${totalPerPerson.toFixed(2)}`;
    }
}

billInput.addEventListener("input", (e) => {
    billValue = parseFloat(e.target.value) || 0;
    calculateTip(); 
});

tipButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        document.querySelector(".tip-buttons .active")?.classList.remove("active");
        e.target.classList.add("active");
        tipPercentage = parseInt(e.target.innerText);
        calculateTip(); 
    });
});

customTipInput.addEventListener("input", (e) => {
    document.querySelector(".tip-buttons .active")?.classList.remove("active");
    tipPercentage = parseFloat(e.target.value) || 0;
    calculateTip(); 
});

peopleInput.addEventListener("input", (e) => {
    peopleCount = parseInt(e.target.value) || 0;
    if (peopleCount === 0) {
        peopleError.style.display = "block";
        peopleInput.parentElement.classList.add("error");
    } else {
        peopleError.style.display = "none";
        peopleInput.parentElement.classList.remove("error");
    }
    calculateTip(); 
});

resetButton.addEventListener("click",()=> {
    billValue = 0;
    tipPercentage = 0;
    peopleCount = 1;
    billInput.value = "";
    customTipInput.value = "";
    peopleInput.value = "";
    tipAmountDisplay.innerText = "$0.00";
    totalAmountDisplay.innerText = "$0.00";
    peopleError.style.display = "none";
    peopleInput.parentElement.classList.remove("error");
    document.querySelector(".tip-buttons .active")?.classList.remove("active");
});





