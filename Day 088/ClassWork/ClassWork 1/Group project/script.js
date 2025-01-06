document.addEventListener("DOMContentLoaded", () => {
    const billInput = document.getElementById("bill");
    const tipButtons = document.querySelectorAll(".tip-button");
    const customTipInput = document.getElementById("custom-tip");
    const numberOfPeopleInput = document.getElementById("number-of-people");
    const tipAmountDisplay = document.getElementById("tip-amount");
    const totalDisplay = document.getElementById("total");
    const resetButton = document.getElementById("reset");
  
    let billValue = 0;
    let tipValue = 0;
    let numberOfPeople = 1;
  
    billInput.addEventListener("input", () => {
      billValue = parseFloat(billInput.value);
      calculateTip();
    });
  
    tipButtons.forEach(button => {
      button.addEventListener("click", () => {
        tipButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        if (button === customTipInput) {
          tipValue = parseFloat(customTipInput.value) / 100;
        } else {
          tipValue = parseFloat(button.value) / 100;
        }
        calculateTip();
      });
    });
  
    customTipInput.addEventListener("input", () => {
      tipButtons.forEach(btn => btn.classList.remove("active"));
      tipValue = parseFloat(customTipInput.value) / 100;
      calculateTip();
    });
  
    numberOfPeopleInput.addEventListener("input", () => {
      numberOfPeople = parseFloat(numberOfPeopleInput.value);
      calculateTip();
    });
  
    resetButton.addEventListener("click", () => {
      billInput.value = "";
      customTipInput.value = "";
      numberOfPeopleInput.value = "";
      tipButtons.forEach(btn => btn.classList.remove("active"));
      tipAmountDisplay.textContent = "$0";
      totalDisplay.textContent = "$0";
      billValue = 0;
      tipValue = 0;
      numberOfPeople = 1;
    });
  
    function calculateTip() {
      if (numberOfPeople > 0 && billValue > 0) {
        const tipAmount = (billValue * tipValue) / numberOfPeople;
        const total = (billValue + billValue * tipValue) / numberOfPeople;
        tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
        totalDisplay.textContent = `$${total.toFixed(2)}`;
      } else {
        tipAmountDisplay.textContent = "$0";
        totalDisplay.textContent = "$0";
      }
    }
  });