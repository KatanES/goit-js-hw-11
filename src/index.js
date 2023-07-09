const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38005308-94b85d06f84497fefd0aa075c';

import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.headers.common['x-api-key'] = API_KEY;

const form = document.getElementById('search-form');
const input = document.querySelector('.js-input');
const gallery = document.querySelector('.js-gallery');
const loadBtn = document.querySelector('.load-js');

let page = 1;
let perPage = 40;
let totalHits = 0;

form.addEventListener('submit', handleSubmit);
loadBtn.addEventListener('click', handleLoadMore);

function handleSubmit(e) {
  e.preventDefault();
  page = 1; // Reset the page to 1 for a new search
  const value = input.value;
  fetchImages(value);
}

function handleLoadMore() {
  const value = input.value;
  fetchImages(value);
}

function fetchImages(value) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.hits.length === 0) {
        showError();
      } else {
        showImages(data.hits);
        totalHits = data.totalHits;
        if (page * perPage < totalHits) {
          loadBtn.hidden = false;
        } else {
          loadBtn.hidden = true;
          showEndMessage();
        }
      }
      page++;
    })
    .catch(showError);
}

function showImages(images) {
  images.forEach(image => {
    const { tags, webformatURL, likes, views, comments, downloads } = image;
    const markup = `
      <div class="photo-card">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" class="img"/>
        <div class="info">
          <p class="info-item">
            <b>Likes ${likes}</b>
          </p>
          <p class="info-item">
            <b>Views ${views}</b>
          </p>
          <p class="info-item">
            <b>Comments ${comments}</b>
          </p>
          <p class="info-item">
            <b>Downloads ${downloads}</b>
          </p>
        </div>
      </div>`;
    gallery.insertAdjacentHTML('beforeend', markup);
  });
}

function showError() {
  Notiflix.Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}

function showEndMessage() {
  Notiflix.Notify.info(
    "We're sorry, but you've reached the end of search results."
  );
}
