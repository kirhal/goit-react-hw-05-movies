import { useState, useEffect } from 'react';
import { useContexFetch } from '../../instruments/fetchContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import CastData from './CastData';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const { url, key } = useContexFetch();

  const IMAGE_URL = 'https://image.tmdb.org/t/p/w200';

  useEffect(() => {
    fetchCast(movieId);
  }, []);

  const fetchCast = async movieId => {
    try {
      setIsLoading(true);
      const response = await axios
        .get(`${url}movie/${movieId}/credits?${key}&language=en-US`)
        .then(res => {
          return res.data.cast;
        });

      setCast(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <span>Loading</span>}
      {cast.length !== 0 && !isLoading && <CastData cast={cast} />}
    </>
  );
}
