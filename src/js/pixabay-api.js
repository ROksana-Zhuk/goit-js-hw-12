import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';
const myApiKey = '49271250-6e2a7e536995fb461bd1f8f83';

export async function getImagesList(userInput, pageNumber, perPage) {
  return axios.get('/api/', {
    params: {
      key: myApiKey,
      q: userInput,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: perPage,
      page: pageNumber,
    },
  });
}
