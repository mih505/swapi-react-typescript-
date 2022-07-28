import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Title = styled.div`
  color: black;
  padding: 10px;
  font-size: 20px;
`;

export const CardLayout = styled.div`
  position: relative;
  display: block;
  padding: 10px;
  height: 100%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05), 0 0px 20px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  overflow: hidden;
  text-decoration: none;
`;

export const Description = styled.div`
  font-size: 15px;
  color: grey;
  text-align: left;
  padding: 10px;
`;

export const Button = styled(Link)`
  background: #8d8888;
  color: white;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 20px;
  padding: 10px;
`;
