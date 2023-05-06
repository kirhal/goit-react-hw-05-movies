
import { StyledLink } from './Navigation.styled';


export default function Navigation() {
    return (
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
    );
}