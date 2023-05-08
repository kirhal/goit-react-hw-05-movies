import { useState, useEffect, Suspense } from 'react';
import { useContexFetch } from '../../instruments/fetchContext';
import { useParams, Outlet } from 'react-router-dom';

import axios from 'axios';

import {
  ListItem,
  MovieLink,
  AdditionalData,
  Span,
  Loading,
} from './MovieDetails.styled';

import MovieData from '../../components/Movie/MovieData';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const { url, key } = useContexFetch();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios
          .get(`${url}movie/${movieId}?${key}&language=en-US`)
          .then(res => {
            return res.data;
          });
        setMovie(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [url, key, movieId]);

  return (
    <>
      {movie.id && <MovieData movie={movie} />}
      <AdditionalData>
        <Span>Additional information</Span>
        <ul>
          <ListItem>
            <MovieLink to="cast">Cast</MovieLink>
          </ListItem>
          <ListItem>
            <MovieLink to="reviews">Reviews</MovieLink>
          </ListItem>
        </ul>
      </AdditionalData>
      <Suspense fallback={<Loading>Loading...</Loading>}>
        <Outlet />
      </Suspense>
    </>
  );
}
