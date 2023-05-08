const form = document.querySelector(".login-form");
const inputMail = document.querySelector('input[name="email"]');
const inputPass = document.querySelector('input[name="password"]');

form.addEventListener("submit", onFormSUbmit);

function onFormSUbmit(event) {
  event.preventDefault();
  checkMail();
  checkPass();

  const formEl = event.currentTarget.elements;
  const mail = formEl.email.value;
  const password = formEl.password.value;

  const formData = { mail, password };
  console.log(formData);

  event.currentTarget.reset();
  return;
}

function checkMail() {
  if (inputMail.value === "") {
    return alert("Введіть Email");
  }
}

function checkPass() {
  if (inputPass.value === "") {
    return alert("Введіть пароль");
  }
}
