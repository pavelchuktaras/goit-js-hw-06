const fontSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = fontSize.value + "px";

const sizeFontText = fontSize.addEventListener("input", inputSize);

function inputSize() {
  text.style.fontSize = fontSize.value + "px";
}
