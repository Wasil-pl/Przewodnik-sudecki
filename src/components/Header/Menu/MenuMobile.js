import React, { useState } from 'react';
import { Button, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import * as styles from './MenuMobile.module.scss';
import './MenuMobile.scss';
import { List } from 'react-bootstrap-icons';
import { StaticImage } from 'gatsby-plugin-image';

const MenuMobile = ({ isScrolled }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button
        className={`${styles.canvas_button} ${isScrolled ? styles.scrolled : ''}`}
        variant="primary"
        onClick={handleShow}
        aria-label="Menu"
      >
        <List />
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <div className={styles.menu_wrapper}>
            <Navbar.Brand href="/" className={styles.menu_image}>
              <StaticImage src="../../../images/przewodniksudecki.png" alt="logo" width={135} />
              <StaticImage src="../../../images/PTTK-LOGO.png" alt="logo" width={150} />
            </Navbar.Brand>
            <Nav>
              <Nav.Link href="/#omnie" onClick={handleClose}>
                O Mnie
              </Nav.Link>
              <Nav.Link href="/#oferta" onClick={handleClose}>
                Oferta
              </Nav.Link>
              <Nav.Link href="/#wycieczki" onClick={handleClose}>
                Wycieczki
              </Nav.Link>
              <Nav.Link href="/#cennik" onClick={handleClose}>
                Cennik
              </Nav.Link>
              <Nav.Link href="/#kontakt" onClick={handleClose}>
                Kontakt
              </Nav.Link>
            </Nav>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MenuMobile;
