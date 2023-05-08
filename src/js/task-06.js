const form = document.querySelector("#validation-input");
const onRequiredAmount = form.getAttribute("data-length");

const blurFormCheck = form.addEventListener("blur", inputBlur);

function inputBlur() {
  const actualLength = form.value.length;

  if (actualLength >= onRequiredAmount) {
    form.classList.add("valid");
    form.classList.remove("invalid");
  } else {
    form.classList.add("invalid");
    form.classList.remove("valid");
  }
}
