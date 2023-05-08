import { useState, useEffect, lazy } from 'react';
import { useContexFetch } from '../../instruments/fetchContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CastData = lazy(() => import('./CastData'));

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const { url, key } = useContexFetch();

  useEffect(() => {
    fetchCast(movieId);
  }, []);

  const fetchCast = async movieId => {
    try {
      const response = await axios
        .get(`${url}movie/${movieId}/credits?${key}&language=en-US`)
        .then(res => {
          return res.data.cast;
        });

      setCast(response);
    } catch (error) {
      console.log(error);
    }
  };

  return <>{cast.length !== 0 && <CastData cast={cast} />}</>;
}
