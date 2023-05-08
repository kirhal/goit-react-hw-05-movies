import axios from 'axios';

const KEY = 'api_key=333f62a31a9dde0333a7ccfec8a873a5';
const URL = 'https://api.themoviedb.org/3/';

export async function fetchTrending() {
  const REQ_URL = `${URL}trending/movie/day?${KEY}`;
  const response = await axios.get(REQ_URL);
  return response;
}
