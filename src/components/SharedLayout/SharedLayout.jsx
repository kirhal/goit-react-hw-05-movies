import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { StyledLink, Header } from './SharedLayout.styled';

export default function Navigation() {
  return (
    <>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
