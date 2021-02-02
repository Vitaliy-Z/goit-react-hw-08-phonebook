import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
  const isLogIn = useSelector(authSelectors.getIsLogIn);

  return (
    <Nav variant="tabs">
      <Nav.Item>
        <Nav.Link href="/" exact="true">
          HOME
        </Nav.Link>
      </Nav.Item>

      {isLogIn && (
        <Nav.Item>
          <Nav.Link href="/contacts" exact="true">
            MY CONTACTS
          </Nav.Link>
        </Nav.Item>
      )}
    </Nav>
  );
};

export default Navigation;
