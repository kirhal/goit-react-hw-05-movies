import { useState, useEffect, lazy } from 'react';
import { useContexFetch } from '../../instruments/useContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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

        setCast(response);
      } catch (error) {
        setError(error);
      }
    };

    fetchCast(movieId);
  }, [movieId, key, url]);

  return (
    <>
      {error && <h2>{error}</h2>}
      {cast.length !== 0 && <CastData cast={cast} />}
    </>
  );
}
