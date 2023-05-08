import { useState, useEffect } from 'react';
import { useContexFetch } from '../../instruments/useContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { List, Author, Text, Title } from './Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');
  const { movieId } = useParams();
  const { url, key } = useContexFetch();

  useEffect(() => {
    const fetchReviews = async movieId => {
      try {
        const response = await axios
          .get(`${url}movie/${movieId}/reviews?${key}&language=en-US&page=1`)
          .then(res => {
            return res.data.results;
          });
        if (response.length === 0) {
          setError("We don't have any reviews for this movie");
        }
        setReviews(response);
      } catch (error) {
        setError(error);
      }
    };

    fetchReviews(movieId);
  }, [url, key, movieId]);

  return (
    <>
      {error && <Title>{error}</Title>}
      {reviews.length > 0 && (
        <List>
          {reviews.map(review => (
            <li key={review.id}>
              <Author>Author: {review.author_details.username}</Author>
              <Text>{review.content}</Text>
            </li>
          ))}
        </List>
      )}
    </>
  );
}
