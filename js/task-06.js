const form = document.querySelector("#validation-input");
const onRequiredAmount = parseInt(form.getAttribute("data-length"));

const blurFormCheck = form.addEventListener("blur", inputBlur);

function inputBlur() {
  const actualLength = form.value.length;

  if (onRequiredAmount === actualLength) {
    form.classList.add("valid");
    form.classList.remove("invalid");
  } else {
    form.classList.add("invalid");
    form.classList.remove("valid");
  }
}
