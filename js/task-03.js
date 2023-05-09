const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector("ul.gallery");

galleryList.style.display = "flex";
galleryList.style.gap = "25px";

const urlList = images.map(
  (img) =>
    `<li style = "list-style: none;"><img src="${img.url}"
     alt="${img.alt}" width="500" height = "300"></li>`
);

galleryList.insertAdjacentHTML("beforeend", urlList);
