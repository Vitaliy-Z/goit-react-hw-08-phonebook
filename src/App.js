import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { authOperations, authSelectors } from './redux/auth';
import { PrivateRoute, PublicRoute } from './customRouts';
import AppBar from './components/header/AppBar';
import './Phonebook.css';

const HomeView = lazy(() => import('./view/HomeView'));
const LoginView = lazy(() => import('./view/LoginView'));
const RegisterView = lazy(() => import('./view/RegisterView'));
const ContactsView = lazy(() => import('./view/ContactsView'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  console.log(isRefreshing);

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      {!isRefreshing && (
        <Switch>
          <Suspense fallback={<h1>Загружаем...</h1>}>
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
    </>
  );
}

export default App;
