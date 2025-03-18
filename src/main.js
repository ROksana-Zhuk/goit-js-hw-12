import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesPromise } from './js/pixabay-api';
import { addLoader } from './js/render-functions';
import {
  removeLoader,
  showButton,
  hideButton,
  clearGallery,
} from './js/render-functions';
import { addImagesMarkup } from './js/render-functions';

const perPage = 15;

const formEl = document.querySelector('.form');
const inputEl = document.querySelector('input[name = search-text]');

const moreButton = document.querySelector('.more-button');

let userInput = '';

let pageNumber = 1;

formEl.addEventListener('submit', async event => {
  event.preventDefault();
  userInput = inputEl.value.trim();
  if (userInput === '') {
    return;
  }
  clearGallery();
  addLoader();

  try {
    pageNumber = 1;
    const response = await getImagesPromise(userInput, pageNumber, perPage);

    if (response.data.hits.length === 0) {
      iziToast.error({
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      addImagesMarkup(response.data.hits);
      showButton();
    }
  } catch (error) {
    console.log(error);
  }

  removeLoader();
});

moreButton.addEventListener('click', async event => {
  hideButton();
  pageNumber += 1;
  const images = await getImagesPromise(userInput, pageNumber, perPage);

  addLoader();

  addImagesMarkup(images.data.hits);

  const galleryItem = document.querySelector('.gallery-item');
  const domRect = galleryItem.getBoundingClientRect();
  const galleryItemHeight = domRect.height;
  window.scrollBy({
    top: galleryItemHeight * 2,
    behavior: 'smooth',
  });
  removeLoader();

  let numberOfImagesDisplayed = pageNumber * perPage;

  if (numberOfImagesDisplayed >= images.data.totalHits) {
    iziToast.error({
      position: 'topRight',
      message: "We're sorry, but you've reached the end of search results.",
    });
  } else {
    showButton();
  }
});

//const cardHeight = images.getBoundingClientRect().height;
//window.scrollBy({
//top: cardHeight * 2,
//behavior: 'smooth',
//});
