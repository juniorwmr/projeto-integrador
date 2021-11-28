import styled from 'styled-components';

interface IButtonProps {
  backgroundColor?: string;
  isActive?: boolean;
}

export const Button = styled.button<IButtonProps>`
  width: 48px;
  height: 48px;
  border: 0;
  outline: none;
  background: ${props =>
    !props.backgroundColor
      ? props.isActive
        ? '#FFD666'
        : 'rgba(0,0,0,0.3)'
      : props.backgroundColor};
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
