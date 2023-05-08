const decrementBtn = document.querySelector(
  "#counter button[data-action='decrement']"
);
// console.log(decrementBtn);

const incrementBtn = document.querySelector(
  "#counter button[data-action='increment']"
);
// console.log(incrementBtn);

const initialNumber = document.querySelector("#value");
// console.log(initialNumber);

let counterValue = 0;

decrementBtn.addEventListener("click", handleBtnMinusClick);

function handleBtnMinusClick() {
  counterValue -= 1;
  initialNumber.textContent = counterValue;
}

incrementBtn.addEventListener("click", handleBtnPlusClick);

function handleBtnPlusClick() {
  counterValue += 1;
  initialNumber.textContent = counterValue;
}
