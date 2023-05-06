import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  margin-right: 20px;

  color: black;
  text-decoration: none;

  font-size: 30px;
  font-weight: bold;
  font-family: Roboto;

  &.active {
    color: red;
  }
`;
