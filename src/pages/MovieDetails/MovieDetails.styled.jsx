import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AdditionalData = styled.div`
  padding: 0 40px;
  padding-top: 20px;
  border-top: 2px solid #b8b6b6;
  border-bottom: 2px solid #b8b6b6;
`;
export const Span = styled.span`
  font-size: 20px;
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
