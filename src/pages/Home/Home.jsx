import { useState, useEffect, lazy, Suspense } from 'react';
import * as API from '../../instruments/fetchAPI';

import { Title} from './Home.styled';

const MoviesList = lazy(() => import('../../components/Movie/MoviesList'));

export default function Home() {
  const [trending, setTrending] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await API.fetchTrending();
        setTrending(response.data.results);
      } catch (error) {
        setError(error);
      }
    };

    fetch();
  }, []);

  return (
    <>
      <Title>Tranding today</Title>
      {error && <h2>{error}</h2>}
      {trending.length > 0 && (
        <Suspense fallback={<div>Loading...</div>}>
          <MoviesList movies={trending} />
        </Suspense>
      )}
    </>
  );
}
