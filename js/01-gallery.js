import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imgConteiner = document.querySelector(".gallery");
const imgMarkup = createImgCard(galleryItems);

imgConteiner.insertAdjacentHTML("beforeend", imgMarkup);
imgConteiner.addEventListener("click", clickOnImg);

function createImgCard(event) {
  return event
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function clickOnImg({ target }) {
  event.preventDefault();
  console.log(event.target.dataset.source);
  if (target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
      <img src="${target.dataset.source}" width="800" height="600">
  `);

  instance.show();

  imgConteiner.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
}
