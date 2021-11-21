import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { AuthRoute } from './AuthRoute';

// Component to check the Authentication
import AuthVerifyComponent from './AuthVerifyComponent';

// App Public Components
// import { Main } from '../pages/Public/Main';

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
      {loading && <Loading />}
      <AuthVerifyComponent />
      <Switch>
        {/* <Route exact path="/" component={Main} /> */}
        <AuthRoute exact path="/employee/signin" component={EmployeeSignIn} />
        <AuthRoute
          exact
          path="/administrador/signin"
          component={AdministradorSignIn}
        />
        {/* <AuthRoute exact path="/register" component={CreateUser} /> */}
        {/* <PrivateRoute
          exact
          path="/dashboard/recognitions"
          component={Recognitions}
        /> */}
        <Route
          path="*"
          component={() => <h1 style={{ color: 'black' }}>ERROR404</h1>}
        />
      </Switch>
    </BrowserRouter>
  );
};
