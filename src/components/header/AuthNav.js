import React from 'react';
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

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        REGISTRATION
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        LOG IN
      </NavLink>
    </div>

    // Не работает почему-то ...

    // <Nav variant="tabs">
    //   <Nav.Item>
    //     <Nav.Link href="/register" exact>
    //       REGISTRATION
    //     </Nav.Link>
    //   </Nav.Item>

    //   <Nav.Item>
    //     <Nav.Link href="/login" exact>
    //       LOG IN
    //     </Nav.Link>
    //   </Nav.Item>
    // </Nav>
  );
}
