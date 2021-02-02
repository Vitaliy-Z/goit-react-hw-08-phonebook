import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from 'redux/auth';
import Navbar from 'react-bootstrap/Navbar';

// const styles = {
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottom: '1px solid #2A363B',
//   },
// };

export default function AppBar() {
  const isLogIn = useSelector(authSelectors.getIsLogIn);
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  return (
    <Navbar collapseOnSelect variant="primary" bg="light" expand="true">
      <Navigation />

      {isLogIn && !isRefreshing ? <UserMenu /> : <AuthNav />}
    </Navbar>
  );
}
