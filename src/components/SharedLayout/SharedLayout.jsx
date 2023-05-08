import { Outlet } from 'react-router-dom';

import { StyledLink, Header } from './SharedLayout.styled';

export default function Navigation() {
  return (
    <container>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Outlet />
    </container>
  );
}
