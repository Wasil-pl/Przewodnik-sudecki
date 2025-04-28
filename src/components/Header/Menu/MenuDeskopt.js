import React from 'react';
import { Nav } from 'react-bootstrap';
import './menu.scss';

const MenuDeskopt = () => {
  return (
    <Nav>
      <Nav.Link href="/#omnie">O Mnie</Nav.Link>
      <Nav.Link href="/#oferta">Oferta</Nav.Link>
      <Nav.Link href="/#wycieczki">Wycieczki</Nav.Link>
      <Nav.Link href="/#cennik">Cennik</Nav.Link>
      <Nav.Link href="/#kontakt">Kontakt</Nav.Link>
    </Nav>
  );
};

export default MenuDeskopt;
