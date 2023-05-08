import { useState, useEffect } from 'react';
import { useContexFetch } from '../instruments/fetchContext';
import { yearTransform } from '../instruments/dateTransform';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import { ListItem, MovieLink } from './Home.styled';

export default function Home() {
  const [trending, setTrending] = useState([]);  
  const { url, key } = useContexFetch();

  const location = useLocation();

  // const IMAGE_URL = 'https://image.tmdb.org/t/p/w200';

  useEffect(() => {
    fetchTrending();
  }, []);

  const fetchTrending = async () => {
    const DAY_TREND = 'trending/movie/day?';
    try {      
      const response = await axios.get(`${url}${DAY_TREND}${key}`);
      setTrending(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Tranding today</h1>      
      {trending.length > 0 && (
        <ul>
          {trending.map(movie => (
            <ListItem key={movie.id}>
              <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {/* <img src={IMAGE_URL + movie.poster_path} /> */}
                {movie.title} {`(${yearTransform(movie.release_date)})`}
              </MovieLink>
            </ListItem>
          ))}
        </ul>
      )}
    </>
  );
}
