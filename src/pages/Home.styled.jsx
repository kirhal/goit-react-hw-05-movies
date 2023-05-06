import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListItem = styled.li`
  margin-bottom: 3px;
`;

export const MovieLink = styled(Link)`
  color: blue;

  font-size: 20px;

  &:focus {
    color: red;
  }
`;
