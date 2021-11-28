import { useHistory } from 'react-router-dom';
import {
  FiPlusSquare,
  FiUserPlus,
  FiArchive,
  FiUser,
  FiPower
} from 'react-icons/fi';

import ButtonIcon from '../../../ButtonIcon';
import { logout } from '../../../../services/auth';

import {
  Container,
  Aside,
  Footer,
  Navigation,
  NotificationContainer
} from './styles';

interface DashboardAsideProps {
  isContractsPage: boolean;
  isNewEmployeePage: boolean;
  isRegisterContractPage: boolean;
  isProfilePage: boolean;
}

const DashboardAside: React.FC<DashboardAsideProps> = ({
  isContractsPage,
  isNewEmployeePage,
  isRegisterContractPage,
  isProfilePage
}) => {
  const history = useHistory();

  function handleOnClickLogOut() {
    logout('@token/admin');
    history.push('/');
  }
  return (
    <Container>
      <Aside>
        <Navigation>
          <ButtonIcon
            isActive={isContractsPage}
            onClick={() => history.push('/admin/dashboard/contracts')}
          >
            <FiArchive
              size={24}
              color={isContractsPage ? 'rgba(0,0,0,0.6)' : '#FFF'}
            />
          </ButtonIcon>
          <ButtonIcon
            isActive={isNewEmployeePage}
            onClick={() => history.push('/admin/dashboard/employees/register')}
          >
            <FiUserPlus
              size={24}
              color={isNewEmployeePage ? 'rgba(0,0,0,0.6)' : '#FFF'}
            />
          </ButtonIcon>
          <ButtonIcon
            isActive={isRegisterContractPage}
            onClick={() => history.push('/admin/dashboard/contracts/new')}
          >
            <FiPlusSquare
              size={24}
              color={isRegisterContractPage ? 'rgba(0,0,0,0.6)' : '#FFF'}
            />
          </ButtonIcon>
        </Navigation>
        <Footer>
          <Navigation>
            <ButtonIcon
              isActive={isProfilePage}
              onClick={() => history.push('/admin/dashboard/profile/edit')}
            >
              <FiUser
                size={24}
                color={isProfilePage ? 'rgba(0,0,0,0.6)' : '#FFF'}
              />
            </ButtonIcon>
            <ButtonIcon
              backgroundColor="#d8000099"
              onClick={handleOnClickLogOut}
            >
              <FiPower size={24} color="#FFF" />
            </ButtonIcon>
          </Navigation>
        </Footer>
      </Aside>
    </Container>
  );
};

export default DashboardAside;
