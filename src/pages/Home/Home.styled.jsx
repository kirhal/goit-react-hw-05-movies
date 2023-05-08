import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  margin: 40px 0;
  padding-left: 20px;
  font-size: 25px;
`;



export const ListItem = styled.li`
  margin-bottom: 4px;
`;

export const MovieLink = styled(Link)`
  color: blue;

  font-size: 20px;

  &:focus {
    color: red;
  }
`;
