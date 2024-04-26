import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

let instance;

const ulGalleryEl = document.querySelector(".gallery");

function makeLiEl({ preview, original, description }) {
  return `<li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`;
}

const galleryList = galleryItems.map(makeLiEl).join("");

ulGalleryEl.insertAdjacentHTML("beforeend", galleryList);

function makeModalWindow(src) {
  instance = basicLightbox.create(`
<img src="${src}">
`);
  instance.show();
}

function addListenerToOpenWindow(inst) {
  if (inst.show()) {
    window.addEventListener("keydown", escapeKeyPressed);
  }
}

function escapeKeyPressed(event) {
  if (event.code !== "Escape") {
    return;
  }
  console.log(event.code);
  instance.close();
  window.removeEventListener("keydown", escapeKeyPressed);
}

function selectPicture(event) {
  event.preventDefault();
  const currentPicture = event.target;
  if (currentPicture.nodeName !== "IMG") {
    return;
  }
  makeModalWindow(currentPicture.dataset.source);

  addListenerToOpenWindow(instance);
}

ulGalleryEl.addEventListener("click", selectPicture);
