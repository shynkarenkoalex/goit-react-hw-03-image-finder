import Axios from 'axios';

const fetchGalleryWithQuery = (query, page = 1) => {
  return Axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=15810105-9185c632070137508165f7ee5&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => ({
    images: response.data.hits,
    totalImages: response.data.total,
  }));
};

export default {
  fetchGalleryWithQuery,
};
