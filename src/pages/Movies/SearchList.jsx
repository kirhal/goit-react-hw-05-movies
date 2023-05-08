import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { yearTransform } from '../../instruments/dateTransform';

import { ListItem, MovieLink } from './Movies.styled';

export default function SearchList({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <MovieLink to={`${movie.id}`} state={{ from: location }}>
            {movie.title} {`(${yearTransform(movie.release_date)})`}
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
