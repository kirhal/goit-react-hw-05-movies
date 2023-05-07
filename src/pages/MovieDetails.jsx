import { useState, useEffect } from 'react';
import { useContexFetch } from '../instruments/fetchContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const { url, key } = useContexFetch();

  const IMAGE_URL = 'https://image.tmdb.org/t/p/w300';

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

  const genresMap = array => {
    return array
      .map(genre => {
        return genre.name;
      })
      .join(', ');
  };
  const getYear = data => {
    const date = new Date(data);
    return date.getFullYear();
  };

  return (
    <>
      <div>
        <button>{`<-`} Go back</button>
        {isLoading && <span>Loading</span>}
        {movie.id && (
          <>
            <img src={IMAGE_URL + movie.poster_path}></img>
            <h2>
              {movie.original_title} {`(${getYear(movie.release_date)})`}
            </h2>
            <p>
              User scores: {movie.vote_average.toFixed(1)}
              /10
            </p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{genresMap(movie.genres)}</p>
          </>
        )}
      </div>
      <div>
        <span>Additional information</span>
      </div>
    </>
  );
}
