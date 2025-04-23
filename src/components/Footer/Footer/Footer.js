import React from 'react';
import * as styles from './Footer.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import { Facebook } from 'react-bootstrap-icons';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.first_column}>
            <div className={styles.logo_wrapper}>
              <StaticImage
                className={styles.logo}
                src="../../../images/przewodniksudecki.png"
                alt="logo"
                width={90}
                quality={100}
              />
              <StaticImage
                className={styles.logo}
                src="../../../images/PTTK-LOGO.png"
                alt="logo"
                width={90}
                quality={100}
              />
            </div>
            <h3>Przewodnik Sudecki</h3>
          </div>
          <div className={styles.second_column}>
            <h4>Kontakt</h4>
            <a href="tel:+48733542926">+48733542926</a>
            <a href="mailto:nowoczesnawitryna@gmail.com">nowoczesnawitryna@gmail.com</a>
            <p>Jastrzębie-Zdrój</p>
            <p>ul. Bogoczowiec 4c</p>
            <div>
              <a href="https://www.facebook.com/profile.php?id=61556511114215" aria-label="Profil na Facebooku">
                <Facebook />
                <span>facebook</span>
              </a>
            </div>
          </div>
          <div className={styles.third_column}>
            <h4>Menu</h4>
            <a href="/#wycieczki">Wycieczki</a>
            <a href="/#cennik">Cennik</a>
            <a href="/#kontakt">Kontakt</a>
            <a href="/#omnie">O mnie</a>
          </div>
        </div>
        <div className={styles.copy_right}>
          <p>Copyright © 2024 Przewodnik Sudecki | Powered by Nowoczesna Witryna</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
