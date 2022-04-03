import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background: rgb(128, 128, 128);
  li {
    list-style: none;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  align-content: center;
  list-style: none;
`;

export const ListItem = styled.li`
  list-style: none;
  color: #f3f3f3;
  margin-right: 0.5rem;
  padding: 0.45rem 0;
  cursor: pointer;
`;
