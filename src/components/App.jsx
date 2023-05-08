import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import NotFound from 'pages/NotFound';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Cast from './Movie/Cast';
import Reviews from './Movie/Reviews';

// const Home = lazy(() => import('pages/Home'));
// const Movies = lazy(() => import('pages/Movies'));
// const NotFound = lazy(() => import('pages/NotFound'));
// const MovieDetails = lazy(() => import('../pages/MovieDetails'));
// const Cast = lazy(() => import('./Movies/Cast'));
// const Reviews = lazy(() => import('./Movies/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />{' '}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
