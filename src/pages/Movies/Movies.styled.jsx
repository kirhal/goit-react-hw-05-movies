import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Input = styled.input`
  padding: 0 10px;
  margin: 40px 0;
  margin-left: 20px;
  font: inherit;
  font-size: 20px;
  border-radius: 5px;
  height: 30px;
  //   border: none;
  outline: none;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  &:focus {
    borde: 2px;
    border-color: blue;
  }
`;
export const Button = styled.button`
  padding: 3px 8px;
  margin-left: 5px;

  height: 30px;

  font-size: 20px;
  //   border: none;
  outline: none;

  border-radius: 5px;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  &:focus {
    color: red;
  }
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
