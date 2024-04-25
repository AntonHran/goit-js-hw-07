import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

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
console.log(galleryList);

ulGalleryEl.insertAdjacentHTML("beforeend", galleryList);

function makeModalWindow(src) {
  const instance = basicLightbox.create(`
<img src="${src}">
`);
  return instance;
}

function selectPicture(event) {
  event.preventDefault();
  const currentPicture = event.target;
  if (currentPicture.nodeName !== "IMG") {
    return;
  }
  const instance = makeModalWindow(currentPicture.dataset.source);
  instance.show();
  instance.close();
}

ulGalleryEl.addEventListener("click", selectPicture);

function addListenerToOpenWindow(inst) {
  if (inst.show()) {
    document.addEventListener("keydown", escapeKeyPressed());
  }
}

function escapeKeyPressed(event, inst) {
  if (event.code !== "Escape") {
    return;
  }
  //console.log(event.code);
}
