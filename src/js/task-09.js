function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  bodyEl: document.querySelector("body"),
  btnEl: document.querySelector("button"),
  spanEl: document.querySelector(".color"),
};

refs.btnEl.addEventListener("click", randomColor);

function randomColor() {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.spanEl.textContent = getRandomHexColor();
}
