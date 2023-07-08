const url = 'https://pixabay.com/api/';
const API_KEY = '38005308-94b85d06f84497fefd0aa075c';

import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.headers.common['x-api-key'] = API_KEY;

// Список параметрів рядка запиту, які тобі обов'язково необхідно вказати:

// key - твій унікальний ключ доступу до API.
// q - термін для пошуку. Те, що буде вводити користувач.
// image_type - тип зображення. На потрібні тільки фотографії, тому постав значення photo.
// orientation - орієнтація фотографії. Постав значення horizontal.
// safesearch - фільтр за віком. Постав значення true.

// https://pixabay.com/api/?key=38005308-94b85d06f84497fefd0aa075c&q&image_type=photo&orientation=horizontal&safesearch=true

// `{url}?{API_KEY}=38005308-94b85d06f84497fefd0aa075c&q&image_type=photo&orientation=horizontal&safesearch=true`;

const form = document.getElementById('search-form');
const input = document.querySelector('.js-input');
const gallery = document.querySelector('.js-gallery');
const btn = document.querySelector('.js-btn');
form.addEventListener('submit', item);

function item(e) {
  e.preventDefault();
  const value = input.value;
  axios
    .get(
      `https://pixabay.com/api/?key=38005308-94b85d06f84497fefd0aa075c&q=${value}&image_type=photo&orientation=horizontal&safesearch=true`
    )
    .then(response => response.data)
    .then(data => mee(data.hits))
    .catch(error => console.log('Error!', error));
}

function createGall({ tags, webformatURL, likes, views, comments, downloads }) {
  const markUp = `<div class="photo-card">
    <img src="${webformatURL}" alt="${tags}" loading="lazy" />
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
  console.log(gallery);
  gallery.insertAdjacentHTML('beforeend', markUp);
}

function mee(arr) {
  arr.forEach(createGall);
}

//   У відповіді буде масив зображень, що задовольнили критерії параметрів запиту. Кожне зображення описується об'єктом, з якого тобі цікаві тільки наступні властивості:

// webformatURL - посилання на маленьке зображення для списку карток.
// largeImageURL - посилання на велике зображення.
// tags - рядок з описом зображення. Підійде для атрибуту alt.
// likes - кількість лайків.
// views - кількість переглядів.
// comments - кількість коментарів.
// downloads - кількість завантажень.
