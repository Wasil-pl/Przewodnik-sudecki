import React, { useState } from 'react';
import { Button, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import * as styles from './MenuMobile.module.scss';
import './MenuMobile.scss';
import { List } from 'react-bootstrap-icons';
import { StaticImage } from 'gatsby-plugin-image';

const MenuMobile = ({ active }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button className={styles.canvas_button} variant="primary" onClick={handleShow} aria-label="Menu">
        <List />
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <div className={styles.menu_wrapper}>
            <Navbar.Brand href="/" className={styles.menu_image}>
              <StaticImage src="../../../images/przewodniksudecki.png" alt="logo" width={150} />
            </Navbar.Brand>
            <Nav>
              <Nav.Link href="#omnie" className={active === 'omnie' ? styles.active : ''}>
                O Mnie
              </Nav.Link>
              <Nav.Link href="#oferta" className={active === 'oferta' ? styles.active : ''}>
                Oferta
              </Nav.Link>
              <Nav.Link href="#wycieczki" className={active === 'wycieczki' ? styles.active : ''}>
                Wycieczki
              </Nav.Link>
              <Nav.Link href="#cennik" className={active === 'cennik' ? styles.active : ''}>
                Cennik
              </Nav.Link>
              <Nav.Link href="#kontakt" className={active === 'kontakt' ? styles.active : ''}>
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
