import axios from 'axios';
import { nameImages, currentPage } from './index';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38119446-41822b71524f1b118d79216dc';

async function getImages() {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: nameImages,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 40,
        page: currentPage,
      },
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}
export { getImages };
