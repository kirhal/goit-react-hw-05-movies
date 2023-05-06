import { useState, useEffect } from 'react';
import { fetchTrendingDay } from '../instruments/fetchAPI';
import { ListItem, MovieLink } from './Home.styled';

export default function Home() {
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      setIsLoading(true);
      const data = await fetchTrendingDay();
      setTrending(data);
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
          {trending.map(film => (
            <ListItem key={film.id}>
              <MovieLink to="/">{film.title}</MovieLink>
            </ListItem>
          ))}
        </ul>
      )}
    </>
  );
}
