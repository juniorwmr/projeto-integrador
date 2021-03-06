import styled from 'styled-components';

export const Container = styled.div``;
export const Aside = styled.aside`
  position: fixed;
  height: 100%;
  padding: 32px 24px;
  background: linear-gradient(329.54deg, var(--red-light) 12%, var(--red) 80%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  img {
    width: 48px;
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > button {
    margin-bottom: 20px;
  }
`;

export const Footer = styled.footer`
  a,
  button:last-child {
    width: 48px;
    height: 48px;
    border: 0;
    background-color: red;
    border-radius: 16px;
    cursor: pointer;
    transition: background-color 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a,
  b:hover {
    background: red;
  }
`;

export const NotificationContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface NotificationProps {
  state: boolean;
}

export const Notification = styled.div<NotificationProps>`
  display: ${props => (props.state ? 'block' : 'none')};
  position: absolute;
  width: 8px;
  height: 8px;
  right: 0;
  top: 0;
  margin: 1px 1px;
  border-radius: 4px;
  background-color: var(--red);
`;
