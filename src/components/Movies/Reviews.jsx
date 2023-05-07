import { useState, useEffect } from 'react';
import { useContexFetch } from '../../instruments/fetchContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const { url, key } = useContexFetch();

  useEffect(() => {
    fetchReviews(movieId);
  }, []);

  const fetchReviews = async movieId => {
    try {
      setIsLoading(true);
      const response = await axios
        .get(`${url}movie/${movieId}/reviews?${key}&language=en-US&page=1`)
        .then(res => {
          console.log('review', res.data.results);
          return res.data.results;
        });

      setReviews(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <span>Loading</span>}
      <ul>
        {/* {reviews.length !== 0 &&
          !isLoading &&
          reviews.map(review => (
            <li key={actor.cast_id}>
              <span>Name: {actor.name}</span>
              <span>Character: {actor.character}</span>
              <p></p>
            </li>
          ))} */}
      </ul>
    </>
  );
}
