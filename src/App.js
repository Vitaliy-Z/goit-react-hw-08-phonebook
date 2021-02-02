import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { authOperations, authSelectors } from './redux/auth';
import { PrivateRoute, PublicRoute } from './customRouts';
import AppBar from './components/header/AppBar';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

const HomeView = lazy(() =>
  import('./view/HomeView' /*webpackChunkName: "home-view"*/),
);
const LoginView = lazy(() =>
  import('./view/LoginView' /*webpackChunkName: "login-view"*/),
);
const RegisterView = lazy(() =>
  import('./view/RegisterView' /*webpackChunkName: "register-view"*/),
);
const ContactsView = lazy(() =>
  import('./view/ContactsView' /*webpackChunkName: "contacts-view"*/),
);

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      {!isRefreshing && (
        <Switch>
          <Suspense
            fallback={
              <Spinner animation="border" variant="primary" role="status" />
            }
          >
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>
            <PublicRoute exact restricted path="/register">
              <RegisterView />
            </PublicRoute>
            <PublicRoute exact restricted redirectTo="/contacts" path="/login">
              <LoginView />
            </PublicRoute>
            <PrivateRoute path="/contacts">
              <ContactsView />
            </PrivateRoute>
          </Suspense>
        </Switch>
      )}
    </Container>
  );
}

export default App;
