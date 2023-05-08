import PropTypes from 'prop-types';
import { yearTransform } from '../../instruments/dateTransform';

export default function MovieData({ movie }) {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w300';

  const genresMap = array => {
    return array
      .map(genre => {
        return genre.name;
      })
      .join(', ');
  };

  return (
    <>
      <img src={IMAGE_URL + movie.poster_path} alt={movie.title}></img>
      <h2>
        {movie.title} {`(${yearTransform(movie.release_date)})`}
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
  );
}

MovieData.prototype = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      vote_average: PropTypes.number,
      poster_path: PropTypes.string,
      title: PropTypes.string,
      release_date: PropTypes.string,
    })
  ),
};
