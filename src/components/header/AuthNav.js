import React from 'react';
import Nav from 'react-bootstrap/Nav';

export default function AuthNav() {
  return (
    <Nav variant="tabs">
      <Nav.Item>
        <Nav.Link href="/register" exact="true">
          REGISTRATION
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="/login" exact="true">
          LOG IN
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
