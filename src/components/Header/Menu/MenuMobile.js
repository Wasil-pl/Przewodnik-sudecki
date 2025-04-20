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
              <Nav.Link className={active === 'kontakt' ? 'activeMenuItem' : ''} href="/kontakt/">
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
