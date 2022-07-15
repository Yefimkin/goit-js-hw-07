import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

// 1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

function galleryRender(arrayOfImages) {
    const arrayOfImg = [];
    galleryItems.map(({ preview, original, description }) => {
        arrayOfImg.push(`<a class="gallery__item" href="${original}">
                            <img class="gallery__image" 
                            src="${preview}" 
                            alt="${description}" />
                        </a>`);
    });
    galleryRef.insertAdjacentHTML('beforeend', arrayOfImg.join(''));
}
galleryRender(galleryItems);



let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    overlayOpacity: 0.9,
    loop: true,
});