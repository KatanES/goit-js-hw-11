const url = 'https://pixabay.com/api/';
const API_KEY = '38005308-94b85d06f84497fefd0aa075c';

// import axios from 'axios';
// import Notiflix from 'notiflix';

// axios.defaults.headers.common['x-api-key'] = API_KEY;

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
  //   e.preventDefault();
  const value = input.value;
  fetch(
    `https://pixabay.com/api/?key=38005308-94b85d06f84497fefd0aa075c&q=${value}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(responce => responce.json())
    .then(data => console.log(data.hits))
    .catch(error => console.log('Error!', error));
}

function createGall({ tags, webformatURL, likes, views, comments, downloads }) {
  const markUp = `<div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>${likes}</b>
    </p>
    <p class="info-item">
      <b>${views}</b>
    </p>
    <p class="info-item">
      <b>${comments}</b>
    </p>
    <p class="info-item">
      <b>${downloads}</b>
    </p>
  </div>
</div>`;
  console.log(gallery);
  gallery.insertAdjacentHTML('beforeend', markUp);
}
console.log(createGall());

// function mee(arr) {
//   arr.forEach(e => {
//     return createGall(e);
//   });
// }

//   У відповіді буде масив зображень, що задовольнили критерії параметрів запиту. Кожне зображення описується об'єктом, з якого тобі цікаві тільки наступні властивості:

// webformatURL - посилання на маленьке зображення для списку карток.
// largeImageURL - посилання на велике зображення.
// tags - рядок з описом зображення. Підійде для атрибуту alt.
// likes - кількість лайків.
// views - кількість переглядів.
// comments - кількість коментарів.
// downloads - кількість завантажень.

// fetch(`https://api.github.com/search/users?q=${}&client_id=67684cabc84f94f0938e&client_secret=782ea639550c1b5d986bdd8129813652ed04c92c`)
// const form = document.getElementById("form");
// const input = document.getElementById("input");
// const item = document.querySelector(".item");
// form.addEventListener("submit", foo);
// let page = 1;
// const loadBtn = document.querySelector(".load-js");
// loadBtn.addEventListener("click", foo);

// function foo(e) {
//   e.preventDefault();
//   const value = input.value;
//   fetch(
//     `https://api.github.com/search/users?q=${value}&client_id=67684cabc84f94f0938e&client_secret=782ea639550c1b5d986bdd8129813652ed04c92c&page=${page}`
//   )
//     .then((responce) => responce.json())
//     .then((data) => mee(data.items))
//     .then(() => page++)
//     .catch((error) => console.log("Error!", error));
// }

// function boo({ html_url, avatar_url, login }) {
//   const markUp = `<img src="${avatar_url}" alt="Тут должна быть Катя!">
// <a href="${html_url}">LINK</a>
// <h1>${login}</h1>`;
//   item.insertAdjacentHTML("beforeend", markUp);
// }
// function mee(arr) {
//   arr.forEach((e) => {
//     return boo(e);
//   });
// }
