import { useState, useEffect, lazy, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useContexFetch } from '../../instruments/fetchContext';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

import 'react-toastify/dist/ReactToastify.css';
import { Input, Button } from './Movies.styled';

const SearchList = lazy(() => import('./SearchList'));

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const { url, key } = useContexFetch();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetchMovies = async query => {
      try {
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
      }
    };
    if (query) {
      fetchMovies(query);
    }
  }, [query, url, key]);

  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const value = form.elements.input.value.trim().toLowerCase();

    if (value.length === 0) {
      toast.error('Write query in the searchbar');
    } else if (value === query) {
      toast.info('Try another search word');
    } else {
      setSearchParams({ query: value });
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="input"
        ></Input>
        <Button type="submit">Search</Button>
        <ToastContainer position="top-left" theme="colored" autoClose={2200} />
      </form>
      {error && <h2>{error}</h2>}
      {movies.length !== 0 && (
        <Suspense fallback={<div>Loading...</div>}>
          <SearchList movies={movies} />
        </Suspense>
      )}
    </>
  );
}
