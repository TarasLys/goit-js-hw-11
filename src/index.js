import { fetchImages } from './cat-api.js';
import Notiflix from 'notiflix';
//import SlimSelect from 'slim-select'

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.getElementById('search-form');
const input = form.elements.searchQuery;

const gallery = document.querySelector('.gallery');
const loadMore = document.querySelector(".js-load")
const total = document.querySelector(".total")
let currentPage = 1;

loadMore.style.display = 'none';

function createCard(images) {

const markup = images.map((image) => `<div class="photo-card">
  <img src="${image.largeImageURL}" alt="${image.tags}" loading="lazy" width = "350px"/>
  <div class="info">
    <p class="info-item">
      <b>Likes</b>${image.likes}
    </p>
    <p class="info-item">
      <b>Views</b>${image.views}
    </p>
    <p class="info-item">
      <b>Comments</b>${image.comments}
    </p>
    <p class="info-item">
      <b>Downloads</b>${image.downloads}
    </p>
  </div></div>`);
  gallery.insertAdjacentHTML("beforeend", markup.join(""));  

if (images.length > 20) {
    loadMore.style.display = 'none';
  } else {
    loadMore.style.display = 'block';
  }


new SimpleLightbox('.photo-card a', {
  captions: true,
  captionDelay: 250,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt'
});
}

loadMore.addEventListener("click", onLoad)

function onLoad() {
return  currentPage += 1;
}


form.addEventListener('submit', async (event) => {
  event.preventDefault();
  gallery.innerHTML = '';

  try {
    if (input.value.length === 0) { 
      Notiflix.Notify.failure('You must enter a request.');
    return;
    }
    const result = await fetchImages(input.value, currentPage);
    
    total.textContent = `Hooray! We found totalHits images - ${result.total} pcs`;
    createCard(result.images)

    input.focus();
    
    } catch (error) {  
      Notiflix.Notify.failure('An error occurred while fetching images. Please try again.');
    }
});
























// import { fetchImages } from './cat-api.js';
// import Notiflix from 'notiflix';
// //import SlimSelect from 'slim-select'



// // const target = document.querySelector(".js-guard")
// // let options = {
// //   root: null,
// //   rootMargin: "200px",
// //   threshold: 1.0,
// // };

// // let observer = new IntersectionObserver(onLoad, options);

// // function onLoad(entries, observer) {
// //   entries.forEach((entry) => {
// //     if (entry.isIntersecting){
// //       console.log(entries);
// //     }
// //   })
  
// // }




// // Отримання елементів форми
// const form = document.getElementById('search-form');
// const input = form.elements.searchQuery;

// // Отримання елемента галереї
// const gallery = document.querySelector('.gallery');
// const loadMore = document.querySelector(".js-load")
// let currentPage = 1;

// loadMore.style.display = 'none';

// // Функція для створення картки зображення
// function createCard(images) {

// const markup = images.map((image) => `<div class="photo-card">
//   <img src="${image.largeImageURL}" alt="${image.tags}" loading="lazy" width = "350px"/>
//   <div class="info">
//     <p class="info-item">
//       <b>Likes</b>${image.likes}
//     </p>
//     <p class="info-item">
//       <b>Views</b>${image.views}
//     </p>
//     <p class="info-item">
//       <b>Comments</b>${image.comments}
//     </p>
//     <p class="info-item">
//       <b>Downloads</b>${image.downloads}
//     </p>
//   </div></div>`);
//   gallery.insertAdjacentHTML("beforeend", markup.join(""));  
  
// }

// //loadMore.style.display = 'none';
// loadMore.addEventListener("click", onLoad)

// function onLoad() {
  
//   return currentPage += 1;
  
  
// }







// // Обробник події сабміту форми
// form.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   // Очищення галереї
//   gallery.innerHTML = '';

//   try {
    
//     // Виконання HTTP-запиту
//     if (input.value.length === 0) { 
//       Notiflix.Notify.failure('You must enter a request.');
//     return;
//     }

   

//   //   if (json.hits !== json.totalHits)
//   // { 
//   //   loadMore.style.display = 'display';
//   // }
  
//     const images = await fetchImages(input.value, currentPage);

//     createCard(images)
//     //observer.observe(target);
   


//     // Очищення поля вводу
//     ///input.value = '';
    
//     // Переміщення фокусу на поле вводу
//     input.focus();
//     //return images;


    
//     } catch (error) {
//       //console.error(error);
//       Notiflix.Notify.failure('An error occurred while fetching images. Please try again.');
//     }
// });



// // let counter = 0;
// // document.addEventListener("scroll", onScroll)

// // function onScroll() {
// //   counter += 1
// //   console.log(counter)
// // }








// import { fetchImages } from './cat-api.js';
// //import Notiflix from 'notiflix';
// //import SlimSelect from 'slim-select'


// // Отримання елементів форми
// const form = document.getElementById('search-form');
// const input = form.elements.searchQuery;

// // Отримання елемента галереї
// const gallery = document.querySelector('.gallery');
// const loadMore = document.querySelector(".js-load")
// let currentPage = 1;

// // Функція для створення картки зображення
// function createCard(images) {

// const markup = images.map((image) => `<div class="photo-card">
//   <img src="${image.largeImageURL}" alt="${image.tags}" loading="lazy" width = "400px"/>
//   <div class="info">
//     <p class="info-item">
//       <b>Likes</b>${image.likes}
//     </p>
//     <p class="info-item">
//       <b>Views</b>${image.views}
//     </p>
//     <p class="info-item">
//       <b>Comments</b>${image.comments}
//     </p>
//     <p class="info-item">
//       <b>Downloads</b>${image.downloads}
//     </p>
//   </div></div>`).join("");
// gallery.insertAdjacentHTML("beforeend", markup.join(""));  
// }


// loadMore.addEventListener("click", onLoad)

// function onLoad() {
//   currentPage += 1;
//   fetchImages(currentPage)
//   // try {
//   //   // Виконання HTTP-запиту
//   //   const images = await fetchImages(input.value);
//   //   createCard(images)
    
//   // }
//   // catch (error) {
//   //     console.error(error);
//   //     Notiflix.Notify.Failure('An error occurred while fetching images. Please try again.');
//   //   }
// }


// // Обробник події сабміту форми
// form.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   // Очищення галереї
//   gallery.innerHTML = '';



//   try {
//     // Виконання HTTP-запиту
//     const images = await fetchImages(input.value);
//     createCard(images)
    
//     // Очищення поля вводу
//     // input.value = '';
    
//     // Переміщення фокусу на поле вводу
//     input.focus();
//     //return images;
    
//     } catch (error) {
//       console.error(error);
//       Notiflix.Notify.Failure('An error occurred while fetching images. Please try again.');
//     }
// });

// // fetchImages(input.value)
// //   .then((data) => gallery.insertAdjacentHTML("beforeend", markup))
// //   .catch((err) => console.log(err));
