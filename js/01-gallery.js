import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

// 1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

function galleryRender(arrayOfImages) {
    const arrayOfImg = [];
    galleryItems.map(({ preview, original, description }) => {
        arrayOfImg.push(`<div class="gallery__item">
                            <a class="gallery__link" href="large-image.jpg">
                                <img
                                    class="gallery__image"
                                    src="${preview}"
                                    data-source="${original}"
                                    alt="${description}"
                                />
                            </a>
                        </div>`);
    });
    galleryRef.insertAdjacentHTML('beforeend', arrayOfImg.join(''));
}

galleryRender(galleryItems);
// 2. Реализация делегирования на div.gallery и получение url большого изображения.
galleryRef.addEventListener('click', openOriginalImage)

function openOriginalImage(event) {
    event.preventDefault();

    if (event.target.classList.contains('gallery__image')) {
        const instance = basicLightbox.create(
            `<img src="${event.target.dataset.source}" width="800" height="600">`
        );
        instance.show();

        // 3. Закрытие с клавиатуры
        document.addEventListener('keydown', onEscClick);
        function onEscClick(event) {
            if (event.code === 'Escape') {
                instance.close()
            }
        }
    }
}
