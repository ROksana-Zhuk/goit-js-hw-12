import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const simpleLightboxInstance = new SimpleLightbox('.gallery-link', {
  captionDelay: 250,
  captionsData: 'alt',
});

const galleryListEl = document.querySelector('.gallery');
const inputEl = document.querySelector('input[name = search-text]');
const loaderEl = document.querySelector('.visually-hidden');
const moreButton = document.querySelector('.more-button');

export function addLoader() {
  loaderEl.classList.remove('visually-hidden');
}

export function clearGallery() {
  galleryListEl.innerHTML = '';
}

export function hideButton() {
  moreButton.style.display = 'none';
}

export function removeLoader() {
  loaderEl.classList.add('visually-hidden');
}

export function showButton() {
  moreButton.style.display = 'block';
}

export function addImagesMarkup(imagesHits) {
  const markup = imagesHits
    .map(hit => {
      return `<li class="gallery-item">
          <a class="gallery-link" href="${hit.largeImageURL}">
            <img src="${hit.webformatURL}" alt="${hit.tags}" title=""/>
          </a>
          <table>
            <thead>
              <tr>
                <th>Likes</th>
                <th>Views</th>
                <th>Comments</th>
                <th>Downloads</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${hit.likes}</td>
                <td>${hit.views}</td>
                <td>${hit.comments}</td>
                <td>${hit.downloads}</td>
              </tr>
            </tbody>
          </table>

        </li>`;
    })
    .join('');

  galleryListEl.insertAdjacentHTML('beforeend', markup);
  simpleLightboxInstance.refresh();
  inputEl.value = '';
}
