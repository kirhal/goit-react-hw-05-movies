import PropTypes from 'prop-types';

export default function CastData({ cast }) {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w300';
  const defaultImage =
    'https://i.postimg.cc/Bvs51Cct/360-F-234348839-k-Inlh-Js-XZez-Ky-Tb-XHde6693v-S9-Aby4e-Z.jpg';

  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.cast_id}>
          {actor.profile_path ? (
            <img src={IMAGE_URL + actor.profile_path} alt={actor.name} />
          ) : (
            <img src={defaultImage} alt={actor.name} />
          )}
          <span>Name: {actor.name}</span>
          <span>Character: {actor.character}</span>
        </li>
      ))}
    </ul>
  );
}

CastData.prototype = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number,
      profile_path: PropTypes.string,
      name: PropTypes.string,
      character: PropTypes.string,
    })
  ),
};
