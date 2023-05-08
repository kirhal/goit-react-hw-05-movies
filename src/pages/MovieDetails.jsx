import { useState, useEffect, Suspense } from 'react';
import { useContexFetch } from '../instruments/fetchContext';
import { useParams, Outlet, useLocation, Link } from 'react-router-dom';

import axios from 'axios';

import { ListItem, MovieLink } from './Home.styled';

import MovieData from '../components/Movies/MovieData';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const { url, key } = useContexFetch();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    fetchMovie();
  }, []);

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

  return (
    <>
      <div>
        <Link to={backLinkHref}>
          <button>🡄 Go back</button>
        </Link>
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
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Outlet />
        {/* </Suspense> */}
      </div>
    </>
  );
}
