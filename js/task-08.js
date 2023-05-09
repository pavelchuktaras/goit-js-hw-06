const form = document.querySelector(".login-form");
const inputMail = document.querySelector('input[name="email"]');
const inputPass = document.querySelector('input[name="password"]');

form.addEventListener("submit", onFormSUbmit);

function onFormSUbmit(event) {
  event.preventDefault();
  const errorMail = checkMail();
  const erorPass = checkPass();

  if (errorMail || erorPass) {
    alert(errorMail || erorPass);
    return;
  }

  const formEl = event.currentTarget.elements;
  const mail = formEl.email.value;
  const password = formEl.password.value;

  const formData = { mail, password };
  console.log(formData);

  event.currentTarget.reset();
  // console.log(formData);
  return formData;
}

function checkMail() {
  if (inputMail.value === "") {
    return "Введіть Email";
  }
}

function checkPass() {
  if (inputPass.value === "") {
    return "Введіть пароль";
  }
}
