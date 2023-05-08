import PropTypes from 'prop-types';
import { yearTransform } from '../../instruments/dateTransform';

import { ListItem, MovieLink } from '../../pages/Home.styled';

export default function SearchList({ movies }) {
  return (
    <ul>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <MovieLink to={`${movie.id}`}>
            {movie.title} {`(${yearTransform(movie.release_date)})`}
          </MovieLink>
        </ListItem>
      ))}
    </ul>
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
