import { Redirect, Route, RouteProps } from 'react-router-dom';

import { isAuthenticated } from '../services/auth';

interface IRouteProps extends RouteProps {
  component: any;
}

export const AdminAuthRoute: React.FC<IRouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={routeProps =>
        !isAuthenticated('@token/admin') ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: '/admin/dashboard/contracts',
              state: { from: routeProps.location }
            }}
          />
        )
      }
    />
  );
};
