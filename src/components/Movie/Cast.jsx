import { useState, useEffect, lazy } from 'react';
import { useContexFetch } from '../../instruments/useContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Title } from './Cast.styled';

const CastData = lazy(() => import('./CastData'));

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState('');
  const { movieId } = useParams();
  const { url, key } = useContexFetch();

  useEffect(() => {
    const fetchCast = async movieId => {
      try {
        const response = await axios
          .get(`${url}movie/${movieId}/credits?${key}&language=en-US`)
          .then(res => {
            return res.data.cast;
          });
        if (response.length === 0) {
          setError("We don't have any available cast for this movie");
        }
        setCast(response);
      } catch (error) {
        setError(error);
      }
    };

    fetchCast(movieId);
  }, [movieId, key, url]);

  return (
    <>
      {error && <Title>{error}</Title>}
      {cast.length > 0 && <CastData cast={cast} />}
    </>
  );
}
