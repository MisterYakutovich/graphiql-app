import { Navigate, Outlet } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';
import { isAuth } from '../utils/flag';

function PrivateRoute() {
  // const auth=true
  return isAuth ? <Outlet /> : <Navigate to={LOGIN_ROUTE} />;
}
export default PrivateRoute;
