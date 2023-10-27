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
  let images = json.hits
  let total = json.totalHits
  return { images, total  };
}






