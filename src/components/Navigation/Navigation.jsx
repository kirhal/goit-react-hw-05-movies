
import { StyledLink, Nav } from './Navigation.styled';


export default function Navigation() {
    return (
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Nav>
    );
}