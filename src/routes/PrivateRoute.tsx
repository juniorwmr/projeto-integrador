import { Redirect, Route, RouteProps } from 'react-router-dom';

import { isAuthenticated } from '../services/auth';

interface IRouteProps extends RouteProps {
  keyName: string;
  component: any;
}

export const PrivateRoute: React.FC<IRouteProps> = ({
  keyName,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={routeProps =>
        isAuthenticated(keyName) ? (
          <Component {...routeProps} />
        ) : keyName === '@token/employee' ? (
          <Redirect
            to={{
              pathname: '/employee/signin',
              state: { from: routeProps.location }
            }}
          />
        ) : (
          <Redirect
            to={{
              pathname: '/admin/signin',
              state: { from: routeProps.location }
            }}
          />
        )
      }
    />
  );
};
