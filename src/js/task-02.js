const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const mainList = document.querySelector("ul#ingredients");

const ingredientEl = ingredients.map((ingredient) => {
  const listEl = document.createElement("li");
  listEl.classList.add("item");
  listEl.textContent = ingredient;
  return listEl;
});

mainList.append(...ingredientEl);

console.log(mainList);
