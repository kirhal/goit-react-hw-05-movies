import { useState, useEffect } from 'react';
import { useContexFetch } from '../instruments/fetchContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { ListItem, MovieLink } from './Home.styled';

import MovieData from '../components/Movies/MovieData';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const { url, key } = useContexFetch();

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    try {
      setIsLoading(true);
      const response = await axios
        .get(`${url}movie/${movieId}?${key}&language=en-US`)
        .then(res => {
          console.log(res.data);
          return res.data;
        });
      setMovie(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <button>Go back</button>
        {isLoading && <span>Loading</span>}
        {movie.id && <MovieData movie={movie} />}
      </div>
      <div>
        <span>Additional information</span>
        <ul>
          <ListItem>
            <MovieLink to="cast">Cast</MovieLink>
          </ListItem>
          <ListItem>
            <MovieLink to="reviews">Reviews</MovieLink>
          </ListItem>
        </ul>
      </div>
    </>
  );
}
