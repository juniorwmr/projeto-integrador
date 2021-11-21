import { Container, LoadingSpinner } from './styles';

export function Loading(): JSX.Element {
  return (
    <Container>
      <LoadingSpinner type="Watch" />
    </Container>
  );
}
