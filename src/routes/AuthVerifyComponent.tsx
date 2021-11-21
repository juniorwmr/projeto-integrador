import { withRouter, RouteComponentProps } from 'react-router-dom';
import { getToken, jwtDecoded, logout } from '../services/auth';

interface IRouteComponentProps extends RouteComponentProps {
  keyName: string;
}

const AuthVerifyComponent: React.FC<IRouteComponentProps> = ({
  keyName,
  history
}) => {
  history.listen(() => {
    const token = getToken(keyName);
    if (token) {
      const { exp } = jwtDecoded(token);
      if (exp && exp * 1000 < Date.now()) {
        logout(keyName);
      }
    }
  });
  return null;
};

export default withRouter(AuthVerifyComponent);
