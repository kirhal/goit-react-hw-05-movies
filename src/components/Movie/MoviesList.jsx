import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { yearTransform } from '../../instruments/dateTransform';

import { ListItem, MovieLink } from '../../pages/Movies/Movies.styled';

export default function SearchList({ movies }) {
  const location = useLocation();
  console.log(movies);

  return (
    <ul>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title ? movie.title : movie.original_title}{' '}
            {`(${yearTransform(movie.release_date)})`}
          </MovieLink>
        </ListItem>
      ))}
    </ul>
  );
}

SearchList.prototype = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      release_date: PropTypes.string,
    })
  ),
};
