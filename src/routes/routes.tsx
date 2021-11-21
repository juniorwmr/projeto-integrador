import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { EmployeeAuthRoute } from './EmployeeAuthRoute';
import { AdminAuthRoute } from './AdminAuthRoute';

// Component to check the Authentication
import AuthVerifyComponent from './AuthVerifyComponent';

// Authentication Components
import EmployeeSignIn from '../pages/Employee/Auth/SignIn';
import AdministradorSignIn from '../pages/Admin/Auth/SignIn';
// import CreateUser from '../pages/Auth/CreateUser';

// Private Components
// import Recognitions from '../pages/Dashboard/Recognitions';
// import PendentRecognition from '../pages/Dashboard/PendentRecognition';
// import ApproveRecognition from '../pages/Dashboard/ApproveRecognition';

import { Loading } from '../components/Loading';
import { useLoadingContext } from '../hooks/useLoading';

export const Routes: React.FC = () => {
  const { loading } = useLoadingContext();
  return (
    <BrowserRouter>
      <Switch>
        {loading && <Loading />}
        <Route
          exact
          path="/"
          render={() => <Redirect to="/employee/signin" />}
        />
        <Route
          path="/employee"
          render={({ match: { url } }) => (
            <>
              <AuthVerifyComponent keyName="@employee/token" />
              <EmployeeAuthRoute
                exact
                path={`${url}/signin`}
                component={EmployeeSignIn}
              />
            </>
          )}
        />

        <Route
          path="/admin"
          render={({ match: { url } }) => (
            <>
              <AuthVerifyComponent keyName="@admin/token" />
              <AdminAuthRoute
                exact
                path={`${url}/signin`}
                component={AdministradorSignIn}
              />
            </>
          )}
        />

        {/* <AuthRoute exact path="/register" component={CreateUser} /> */}
        {/* <PrivateRoute
          exact
          path="/dashboard/recognitions"
          component={Recognitions}
        /> */}
        {/* <Route
          path="*"
          component={() => <h1 style={{ color: 'black' }}>ERROR404</h1>}
        /> */}
      </Switch>
    </BrowserRouter>
  );
};
