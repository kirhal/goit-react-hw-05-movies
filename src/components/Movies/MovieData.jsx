import PropTypes from 'prop-types';

export default function MovieData({ movie }) {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w300';

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
      <img src={IMAGE_URL + movie.poster_path} alt={movie.title}></img>
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
  );
}

// SearchList.propTypes = {
//   array: PropTypes.string.isRequired,
//   onClose: PropTypes.func.isRequired,
// };

// PropTypes.arrayOf(
//   PropTypes.exact({
//     id: PropTypes.string.isRequired,
//     webformatURL: PropTypes.string.isRequired,
//     largeImageURL: PropTypes.string.isRequired,
//   })
