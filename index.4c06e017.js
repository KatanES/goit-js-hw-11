const e=document.getElementById("search-form"),o=document.querySelector(".js-input"),t=document.querySelector(".js-gallery");document.querySelector(".js-btn"),e.addEventListener("submit",function(e){let t=o.value;fetch(`https://pixabay.com/api/?key=38005308-94b85d06f84497fefd0aa075c&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>e.json()).then(e=>console.log(e.hits)).catch(e=>console.log("Error!",e))}),console.log(function({tags:e,webformatURL:o,likes:n,views:s,comments:c,downloads:i}){let a=`<div class="photo-card">
  <img src="${o}" alt="${e}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>${n}</b>
    </p>
    <p class="info-item">
      <b>${s}</b>
    </p>
    <p class="info-item">
      <b>${c}</b>
    </p>
    <p class="info-item">
      <b>${i}</b>
    </p>
  </div>
</div>`;console.log(t),t.insertAdjacentHTML("beforeend",a)}());
//# sourceMappingURL=index.4c06e017.js.map
