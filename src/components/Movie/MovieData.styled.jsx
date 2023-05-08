import styled from 'styled-components';

export const BackButton = styled.button`
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 20px;
  font-size: 15px;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #acb0ae;
  color: white;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  &:focus {
    color: red;
  }
`;

export const Container = styled.div`
  display: flex;
  padding: 20px 20px;
`;

export const Poster = styled.img`
  width: 300px;
  height: 450px;
  display: block;
  border-radius: 3px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const MovieInfo = styled.div`
  display.flex;

  margin-left: 40px;


`;

// export const ListItem = styled.li`
//   margin-bottom: 4px;
// `;

// export const MovieLink = styled(Link)`
//   color: blue;

//   font-size: 20px;

//   &:focus {
//     color: red;
//   }
// `;
