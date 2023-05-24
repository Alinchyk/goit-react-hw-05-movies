import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const CardImage = styled.img`
  width: 320px;
  margin-right: 20px;
`;

export const CardInfo = styled.div`
  display: block;
`;

export const GoBackLink = styled(Link)`
  display: inline-block;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  background-color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &:hover {
    color: white;
    background-color: #9d0043;
  }
`;

export const CardText = styled.p`
  margin-bottom: 10px;
`;

export const CardTitle = styled.h2`
  color: black;
  font-family: 'Droid serif', serif;
  font-size: 36px;
  font-weight: 800;
  font-style: italic;
  line-height: 44px;
  text-align: center;
`;

export const ElemTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
`;

export const MovieLink = styled(NavLink)`
  display: inline-block;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &:hover {
    color: white;
    background-color: #9d0043;
  }
`;
