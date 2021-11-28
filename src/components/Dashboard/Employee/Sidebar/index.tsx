import { useHistory } from 'react-router-dom';
import { FiAward, FiPower, FiUser } from 'react-icons/fi';

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
  isProfilePage: boolean;
}

const DashboardAside: React.FC<DashboardAsideProps> = ({
  isContractsPage,
  isProfilePage
}) => {
  const history = useHistory();

  function handleOnClickLogOut() {
    logout('@token/employee');
    history.push('/');
  }
  return (
    <Container>
      <Aside>
        <Navigation>
          <ButtonIcon
            isActive={isContractsPage}
            onClick={() => history.push('/employee/dashboard/contracts')}
          >
            <FiAward
              size={24}
              color={isContractsPage ? 'rgba(0,0,0,0.6)' : '#FFF'}
            />
          </ButtonIcon>
        </Navigation>
        <Footer>
          <Navigation>
            <ButtonIcon
              isActive={isProfilePage}
              onClick={() => history.push('/employee/dashboard/profile/edit')}
            >
              <FiUser
                size={24}
                color={isProfilePage ? 'rgba(0,0,0,0.6)' : '#FFF'}
              />
            </ButtonIcon>
            <ButtonIcon
              backgroundColor="rgba(0,0,0,0.6)"
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
