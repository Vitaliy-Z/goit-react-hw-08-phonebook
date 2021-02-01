import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from './redux/auth';

export function PrivateRoute({ children, ...routeProps }) {
  const isLogIn = useSelector(authSelectors.getIsLogIn);
  return (
    <Route {...routeProps}>
      {isLogIn ? children : <Redirect to="/login" />}
    </Route>
  );
}

export function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}) {
  const isLogIn = useSelector(authSelectors.getIsLogIn);
  return (
    <Route {...routeProps}>
      {isLogIn && restricted ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
