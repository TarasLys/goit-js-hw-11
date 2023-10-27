import axios from "axios";
import Notiflix from 'notiflix';

const API_KEY = '40175066-fc06551b58f265feccdc9509e';
const BASE_URL = 'https://pixabay.com/api/';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});

export async function fetchImages(query, page = 1) {
  try {
    const response = await api.get('', {
      params: {
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 40,
        safesearch: true,
        page: page,
      },
    });

    const json = response.data;

    if (json.hits.length === 0) {
      Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
      return;
    }

    let images = json.hits
    let total = json.totalHits
    return { images, total };
    
  } catch (error) {
    throw new Error(`HTTP error! status: ${error.response.status}`);
  }
}

