import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: 500;
  font-size: 18;

  &:hover {
    color: #9d0043;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 40px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  width: 350px;
  border: 1px solid black;
  border-radius: 4px;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #ff4081;
  }
`;

export const SearchButton = styled.button`
  margin-left: 10px;
  padding: 10px 20px;
  background-color: #9d0043;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0005a;
  }
`;
