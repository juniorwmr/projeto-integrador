import styled from 'styled-components';
import Loader from 'react-loader-spinner';

export const Container = styled.form`
  z-index: 20;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: blur(50px) #cecece;
  opacity: 0.9;
  backdrop-filter: blur(50px);
`;

export const LoadingSpinner = styled(Loader).attrs({
  color: 'var(--red)'
})``;
