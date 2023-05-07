import { useState, useEffect } from 'react';
import { useContexFetch } from '../instruments/fetchContext';
import { ToastContainer, toast } from 'react-toastify';
import SearchList from '../components/Movies/SearchList';

import axios from 'axios';

import 'react-toastify/dist/ReactToastify.css';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { url, key } = useContexFetch();

  useEffect(() => {
    if (query) {
      fetchMovies(query);
    }
  }, [query]);

  const fetchMovies = async query => {
    try {
      setIsLoading(true);
      const response = await axios
        .get(
          `${url}search/movie?${key}&language=en-US&query=${query}&page=1&include_adult=false`
        )
        .then(res => {
          return res.data.results;
        });

      if (response.length === 0) {
        setError('No results');
      }
      setMovies(response);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const value = form.elements.input.value.trim().toLowerCase();

    if (value.length === 0) {
      toast.error('Write query in the searchbar');
    } else if (value === query) {
      toast.info('Try another search word');
    } else {
      setQuery(value);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="input"
        ></input>
        <button type="submit">Search</button>
        <ToastContainer position="top-left" theme="colored" autoClose={2200} />
      </form>
      {isLoading && <span>Loading</span>}
      {error && <h2>{error}</h2>}
      {movies.length !== 0 && !isLoading && <SearchList movies={movies} />}      
    </>
  );
}
