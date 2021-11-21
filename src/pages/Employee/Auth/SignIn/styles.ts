import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PrivateAreaBtn = styled(Link)`
  position: absolute;
  width: 222px;
  height: 56px;
  right: 0;
  margin: 20px;
  background: var(--red);
  font-size: 1.1rem;
  color: #fff;
  grid-area: signin;
  border-radius: 20px;
  justify-self: end;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: 0.2s;
  &&:hover {
    background: var(--red-light);
    color: white;
  }
`;
