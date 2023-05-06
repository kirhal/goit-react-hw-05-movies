import { useState, useEffect } from 'react';
import { Form } from 'react-router-dom';

export default function Movies() {
  const [query, setQuery] = useState('');
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
