import React, { useState, useEffect } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './menu.scss';
import * as styles from './Menu.module.scss';
import MenuDeskopt from './MenuDeskopt';
import MenuMobile from './MenuMobile';
import { useMediaQuery } from 'react-responsive';
import { StaticImage } from 'gatsby-plugin-image';

const Menu = () => {
  const [scrollY, setScrollY] = useState(0);
  const isDesktop = useMediaQuery({ query: '(min-width: 1000px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 999px)' });

  useEffect(() => {
    if (window === undefined) return;
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar data-bs-theme="dark" expand="lg" fixed="top" className={scrollY > 50 ? styles.scrolled : styles.menu}>
      <Container>
        {isDesktop && (
          <Navbar.Brand href="/">
            <StaticImage
              className={styles.logo}
              src="../../../images/przewodniksudecki.png"
              alt="logo"
              width={70}
              quality={100}
            />
            <StaticImage
              className={styles.logo}
              src="../../../images/PTTK-LOGO.png"
              alt="logo"
              width={70}
              quality={100}
            />
          </Navbar.Brand>
        )}

        <div className={styles.menu_wrapper}>
          {isDesktop && <MenuDeskopt />}
          {isMobile && <MenuMobile isScrolled={scrollY > 50} />}
        </div>
      </Container>
    </Navbar>
  );
};

export default Menu;
