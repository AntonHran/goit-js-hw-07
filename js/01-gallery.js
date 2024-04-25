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

function selectPicture(event) {
  event.preventDefault();
  const currentPicture = event.target;
  if (currentPicture.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${currentPicture.dataset.source}">
`);
  instance.show();
  if (instance.show()) {
    document.addEventListener("keydown", (event) => {
      if (event.code !== "Escape") {
        return;
      }
      console.log(event.code);
      instance.close();
      document.removeEventListener("keydown", escapeKeyPressed);
    });
  }
}

ulGalleryEl.addEventListener("click", selectPicture);

function escapeKeyPressed(event) {
  if (event.code !== "Escape") {
    return;
  }
  console.log(event.code);
  document.removeEventListener("keydown", escapeKeyPressed);
}
