import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px 40px;
`;

export const Item = styled.div`
  width: 26vw;
  height: 30vh;
  background: #fff;
  border-radius: 20px;
  border: 1px solid #d3e2e5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 10px 20px;
  h2 {
    padding: 10px;
    line-height: 1.5rem;
    color: #4d6f80;
    text-decoration: none;
  }
  p {
    text-align: center;
  }
  h3 {
    padding: 10px;
    line-height: 1.5rem;
    color: var(--red);
    text-decoration: none;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 20px;
`;

export const ButtonIcon = styled.button`
  width: 48px;
  height: 48px;
  border: 0;
  outline: none;
  background: #ebf2f5;
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  &&:hover {
    opacity: 0.7;
  }
`;

export const ImgContainer = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    margin-top: 15px;
    color: #8fa7b2;
  }
`;
