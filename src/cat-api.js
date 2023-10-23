import axios from "axios";
import Notiflix from 'notiflix';

axios.defaults.headers.common["x-api-key"] = "40175066-fc06551b58f265feccdc9509e";
axios.defaults.baseURL = "https://pixabay.com/api/"


// export async function getPicture(arr) {
//     const resps = arr.map(async item => { 
//         const resp = await fetch(`https://pixabay.com/api/?key=40175066-fc06551b58f265feccdc9509e&q=${item}&image_type=photo&orientation=horizontal&safesearch=true`)
//         if (!resp.ok) { 
//             throw new Error()
//         }
//         return resp.json()
//     })
//     const data = await Promise.allSettled(resps)
//     const pictureObj = data.filter(({ status }) => status === "fulfilled").map(({ value }) => value);
//     console.log(pictureObj);
//     return pictureObj;
// }


// Функція для виконання HTTP-запиту
export async function fetchImages(query, page = 1) {
  const response = await fetch(`https://pixabay.com/api/?key=40175066-fc06551b58f265feccdc9509e&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}`);
  

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
const json = await response.json();
  
  if (json.hits.length === 0) {
    Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
    return;
  }
  

  return json.hits;
}



// https://pixabay.com/api/?key=40175066-fc06551b58f265feccdc9509e&q=${query}&image_type=photo&orientation=horizontal&safesearch=true


