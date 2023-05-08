import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import NotFound from 'pages/NotFound';
import Navigation from 'components/Navigation/Navigation';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Cast from './Movie/Cast';
import Reviews from './Movie/Reviews';

// const Home = lazy(() => import('pages/Home'));
// const Movies = lazy(() => import('pages/Movies'));
// const NotFound = lazy(() => import('pages/NotFound'));
// const Navigation = lazy(() => import('components/Navigation/Navigation'));
// const MovieDetails = lazy(() => import('../pages/MovieDetails'));
// const Cast = lazy(() => import('./Movies/Cast'));
// const Reviews = lazy(() => import('./Movies/Reviews'));

export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />{' '}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
