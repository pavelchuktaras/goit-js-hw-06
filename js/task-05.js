const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};
// console.log(refs.output);

refs.input.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    refs.output.textContent = "Anonymous";
  } else refs.output.textContent = event.currentTarget.value;
});
