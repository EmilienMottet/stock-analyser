import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: row;
  background-color: gainsboro;
  
`;

export const Paper = styled.div``;

export const Filter = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  padding: 5px 0px;
  margin: 10px;
  font-size: 14px;
  text-align: center;
  width: 240px;
  background-color: gainsboro;
`;

export const List = styled.div`
  width: 250px;
  height: 90vh;
  overflow: scroll;
  margin: 10px;
`;

export const ListItem = styled.div`
  border-radius: 10px;
  cursor: pointer;
  padding: 5px 5px;
  &:hover {
    background-color: whitesmoke;
  }
`;

export const Price = styled.div`
  
`;