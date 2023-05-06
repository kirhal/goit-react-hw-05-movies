import PropTypes from 'prop-types';

import { ListItem, MovieLink } from '../../pages/Home.styled';

export default function SearchList({ array }) {
  return (
    <ul>
      {array.map(film => (
        <ListItem key={film.id}>
          <MovieLink to="/movies">{film.title}</MovieLink>
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
