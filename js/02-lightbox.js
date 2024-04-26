import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ulGalleryEl = document.querySelector(".gallery");

function makeLiEl({ preview, original, description }) {
  return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
}

const galleryList = galleryItems.map(makeLiEl).join("");

ulGalleryEl.insertAdjacentHTML("beforeend", galleryList);

new SimpleLightbox(".gallery a", {
  captions: true,
  captionsDelay: 250,
  captionsData: "alt",
});
//lightbox.on("show.simplelightbox", makeLiEl);
