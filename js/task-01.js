const categoriesAllEl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesAllEl.length}`);

categoriesAllEl.forEach((category) => {
  const allTitle = category.firstElementChild.textContent;
  const lengthElement = category.querySelectorAll("li").length;
  console.log(`Category: ${allTitle},Elements: ${lengthElement}`);
});
