import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const imgConteiner = document.querySelector(".gallery");
const imgMarkup = createImgCard(galleryItems);

imgConteiner.insertAdjacentHTML("beforeend", imgMarkup);
imgConteiner.addEventListener("click", clickOnImg);
imgConteiner.addEventListener("click", onImgConteinerClick);

function createImgCard(event) {
  return event
    .map(({ preview, original, description }) => {
      return `<a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description} " />
    </a>`;
    })
    .join("");
}


function clickOnImg({ target }) {
    event.preventDefault();
    console.log(event.target.dataset.source);
    if (target.nodeName !== "IMG") {
      return;
    }};

    function onImgConteinerClick (e) {
        e.target.alt;

    }

    var lightbox = new SimpleLightbox('.gallery a', {
        captionType: 'attr',
        animationSpeed: 250,
        captionsData:'alt',
    });
    lightbox.on(show.SimpleLightbox);



