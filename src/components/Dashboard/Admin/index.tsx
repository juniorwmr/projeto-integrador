import Sidebar from './Sidebar';

import { Container, Main, Title } from './styles';

interface IDashboardProps {
  title: string;
  children: React.ReactNode;
  isContractsPage?: boolean;
  isNewEmployeePage?: boolean;
  isRegisterContractPage?: boolean;
  isProfilePage?: boolean;
}

const Dashboard: React.FC<IDashboardProps> = ({
  title,
  children,
  isContractsPage = false,
  isNewEmployeePage = false,
  isRegisterContractPage = false,
  isProfilePage = false
}) => {
  return (
    <Container>
      <Sidebar
        isContractsPage={isContractsPage}
        isNewEmployeePage={isNewEmployeePage}
        isRegisterContractPage={isRegisterContractPage}
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
