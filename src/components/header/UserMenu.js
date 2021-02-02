import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import Button from 'react-bootstrap/Button';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontSize: '1.2em',
    fontWeight: 700,
    marginRight: 15,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div style={styles.container}>
      <span style={styles.name}>Welcome, {name}</span>

      <Button
        variant="danger"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Выйти
      </Button>
    </div>
  );
}
