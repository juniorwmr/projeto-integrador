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
import AdminContracts from '../pages/Admin/Dashboard/Contracts';
import RegisterEmployees from '../pages/Admin/Dashboard/RegisterEmployees';
import RegisterContracts from '../pages/Admin/Dashboard/RegisterContracts';
import AdminProfile from '../pages/Admin/Dashboard/Profile';
import Contracts from '../pages/Employee/Dashboard/Contracts';
import EmployeeProfile from '../pages/Employee/Dashboard/Profile';
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
              <AuthVerifyComponent keyName="@token/employee" />
              <EmployeeAuthRoute
                exact
                path={`${url}/signin`}
                component={EmployeeSignIn}
              />
              <Route
                exact
                path={`${url}/dashboard`}
                component={() => <Redirect to={`${url}/dashboard/contracts`} />}
              />
              <PrivateRoute
                exact
                keyName="@token/employee"
                path={`${url}/dashboard/contracts`}
                component={Contracts}
              />
              <PrivateRoute
                exact
                keyName="@token/employee"
                path={`${url}/dashboard/profile/edit`}
                component={EmployeeProfile}
              />
            </>
          )}
        />
        {/* Administrator Routes */}
        <Route
          path="/admin"
          render={({ match: { url } }) => (
            <>
              <AuthVerifyComponent keyName="@token/admin" />
              <AdminAuthRoute
                exact
                path={`${url}/signin`}
                component={AdministradorSignIn}
              />
              <Route
                exact
                path={`${url}/dashboard`}
                component={() => <Redirect to={`${url}/dashboard/contracts`} />}
              />
              <PrivateRoute
                exact
                keyName="@token/admin"
                path={`${url}/dashboard/contracts`}
                component={AdminContracts}
              />
              <PrivateRoute
                exact
                keyName="@token/admin"
                path={`${url}/dashboard/employees/register`}
                component={RegisterEmployees}
              />
              <PrivateRoute
                exact
                keyName="@token/admin"
                path={`${url}/dashboard/contracts/new`}
                component={RegisterContracts}
              />
              <PrivateRoute
                exact
                keyName="@token/admin"
                path={`${url}/dashboard/profile/edit`}
                component={AdminProfile}
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
