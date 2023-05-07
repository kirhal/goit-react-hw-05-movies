import { useState, useEffect } from 'react';
import { useContexFetch } from '../instruments/fetchContext';
import axios from 'axios';

import { ListItem, MovieLink } from './Home.styled';

export default function Home() {
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { url, key } = useContexFetch();

  useEffect(() => {
    fetchTrending();
  }, []);

  const fetchTrending = async () => {
    const DAY_TREND = 'trending/movie/day?api_key=';
    try {
      setIsLoading(true);
      const response = await axios.get(`${url}${DAY_TREND}${key}`);
      setTrending(response.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1>Tranding today</h1>
      {isLoading && <span>Loading</span>}
      {trending.length > 0 && (
        <ul>
          {trending.map(movie => (
            <ListItem key={movie.id}>
              <MovieLink to={`/movies/${movie.id}`}>{movie.title}</MovieLink>
            </ListItem>
          ))}
        </ul>
      )}
    </>
  );
}
