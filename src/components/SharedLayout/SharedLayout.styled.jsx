import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 20px 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  margin-right: 20px;

  color: black;
  text-decoration: none;

  font-size: 30px;
  font-weight: bold;

  &.active {
    color: red;
    text-decoration: underline;
  }
`;
