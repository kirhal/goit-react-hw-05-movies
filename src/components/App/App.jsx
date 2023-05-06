import { Routes, Route, NavLink } from 'react-router-dom';

import Home from 'pages/Home';
import Movies from 'pages/Movies';
import NotFound from 'pages/NotFound';
import { StyledLink } from './App.styled';

export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
