import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
// import Nav from 'react-bootstrap/Nav';

import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#39c4ef',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => {
  const isLogIn = useSelector(authSelectors.getIsLogIn);

  return (
    <nav>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        HOME
      </NavLink>

      {isLogIn && (
        <NavLink
          to="/contacts"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          MY CONTACTS
        </NavLink>
      )}
    </nav>

    //  Почему-то не работает...

    // <Nav variant="tabs">
    //   <Nav.Item>
    //     <Nav.Link href="/" exact="true">
    //       HOME
    //     </Nav.Link>
    //   </Nav.Item>

    //   {isLogIn && (
    //     <Nav.Item>
    //       <Nav.Link href="/contacts" exact="true">
    //         MY CONTACTS
    //       </Nav.Link>
    //     </Nav.Item>
    //   )}
    // </Nav>
  );
};

export default Navigation;
