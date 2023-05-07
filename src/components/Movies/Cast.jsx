import { useState, useEffect } from 'react';
import { useContexFetch } from '../../instruments/fetchContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
          console.log(res.data.cast);
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
      <ul>
        {cast.length !== 0 &&
          !isLoading &&
          cast.map(actor => (
            <li key={actor.cast_id}>
              {actor.profile_path ? (
                <img src={IMAGE_URL + actor.profile_path} alt={actor.name} />
              ) : (
                <img
                  src="https://i.postimg.cc/Bvs51Cct/360-F-234348839-k-Inlh-Js-XZez-Ky-Tb-XHde6693v-S9-Aby4e-Z.jpg"
                  alt={actor.name}
                />
              )}

              <span>Name: {actor.name}</span>
              <span>Character: {actor.character}</span>
            </li>
          ))}
      </ul>
    </>
  );
}
