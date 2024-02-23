import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '42513996-0756a444c45ee3c8d6e086c5f';

async function fetchImages({ searchQuery, page }) {
  return await axios.get(URL, {
    params: {
      key: API_KEY,
      q: `${searchQuery}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: `${page}`,
      per_page: 40,
    },
  });
}

export { fetchImages };
