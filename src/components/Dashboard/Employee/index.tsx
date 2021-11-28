import Sidebar from './Sidebar';

import { Container, Main, Title } from './styles';

interface IDashboardProps {
  title: string;
  children: React.ReactNode;
  isContractsPage?: boolean;
  isProfilePage?: boolean;
}

const Dashboard: React.FC<IDashboardProps> = ({
  title,
  children,
  isContractsPage = false,
  isProfilePage = false
}) => {
  return (
    <Container>
      <Sidebar
        isContractsPage={isContractsPage}
        isProfilePage={isProfilePage}
      />
      <Container>
        <Main>
          <Title>
            <legend>{title}</legend>
          </Title>
          {children}
        </Main>
      </Container>
    </Container>
  );
};

export default Dashboard;
