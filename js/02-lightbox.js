import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const imgConteiner = document.querySelector(".gallery");
const imgMarkup = createImgCard(galleryItems);

imgConteiner.insertAdjacentHTML("beforeend", imgMarkup);

function createImgCard(event) {
  return event
    .map(({ preview, original, description }) => {
      return `<li class='gallery__item'>
      <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description} " />
    </a></li>`;
    })
    .join("");
}


    var lightbox = new SimpleLightbox('.gallery a', {
        captionType: 'attr',
        animationSpeed: 250,
        captionsData:'alt',
        fadeSpeed: 250,
    });



