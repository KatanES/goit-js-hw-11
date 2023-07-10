import axios from 'axios';
import { nameImages, currentPage } from './index';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38105470-652721ced6ff5551f65b62ae6';

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
    console.log(error);
  }
}
export { getImages };
