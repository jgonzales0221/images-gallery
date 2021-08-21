import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navbarStyle = {
  backgroundColor: '#03a1fc',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="secondary">
      <Container>
        <Logo style={{ maxWidth: '20rem', maxHeight: '4rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;
