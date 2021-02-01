import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { authOperations } from './redux/auth';
import AppBar from './components/header/AppBar';
import HomeView from './view/HomeView';
import LoginView from './view/LoginView';
import RegisterView from './view/RegisterView';
import ContactsView from './view/ContactsView';

import './Phonebook.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route exact path="/contacts" component={ContactsView} />
      </Switch>
    </>
  );
}

export default App;
