import axios from 'axios';

const KEY = '333f62a31a9dde0333a7ccfec8a873a5';
const REQ_URL = 'https://api.themoviedb.org/3/';
const DAY_TREND = 'trending/movie/day?api_key=';

export const fetchTrendingDay = async () => {
  const response = await axios.get(`${REQ_URL}${DAY_TREND}${KEY}`);
  return response.data.results;
};

// V3 333f62a31a9dde0333a7ccfec8a873a5

// https://api.themoviedb.org/3/movie/550?api_key=333f62a31a9dde0333a7ccfec8a873a5

// V4 eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzNmNjJhMzFhOWRkZTAzMzNhN2NjZmVjOGE4NzNhNSIsInN1YiI6IjY0NTUxNDRmZDhmNDRlMGRiMzI0NWM5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rHmcl8z5jxoWxqL-Dd0nwvSpER_Z8iedmGGCwvTKNyE

// https://api.themoviedb.org/3/movie/550?api_key=333f62a31a9dde0333a7ccfec8a873a5
