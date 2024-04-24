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
