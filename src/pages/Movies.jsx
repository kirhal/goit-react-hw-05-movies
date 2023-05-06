import { useState, useEffect } from 'react';
import { Form } from 'react-router-dom';
import { fetchTrendingDay } from '../instruments/fetchAPI';

export default function Movies() {
  const [request, setRequest] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  return (
    <form>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        name="input"
      ></input>
      <button type="submit">Search</button>
    </form>
  );
}
