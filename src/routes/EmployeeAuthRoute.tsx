import { Redirect, Route, RouteProps } from 'react-router-dom';

import { isAuthenticated } from '../services/auth';

interface IRouteProps extends RouteProps {
  component: any;
}

export const EmployeeAuthRoute: React.FC<IRouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={routeProps =>
        !isAuthenticated('@token/employee') ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: '/employee/dashboard/contracts',
              state: { from: routeProps.location }
            }}
          />
        )
      }
    />
  );
};
