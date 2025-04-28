import React from 'react';
import * as styles from './Footer.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import { Facebook, Linkedin } from 'react-bootstrap-icons';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.first_column}>
            <div className={styles.logo_wrapper}>
              <StaticImage src="../../../images/przewodniksudecki.png" alt="logo" width={90} quality={100} />
              <StaticImage src="../../../images/PTTK-LOGO.png" alt="logo" width={90} quality={100} />
            </div>
            <h3>Przewodnik Sudecki</h3>
          </div>
          <div className={styles.second_column}>
            <h4>Kontakt</h4>
            <a href="tel:+48574708808">+48 574 708 808</a>
            <a href="mailto:kontakt@przewodnik-skalnemiasto.pl">kontakt@przewodnik-skalnemiasto.pl</a>

            <div>
              <a href="https://www.facebook.com/michael.filipowicz.96" aria-label="Profil na Facebooku">
                <Facebook />
                <span className={'invisible_text'}>facebook</span>
              </a>
              <a href="https://www.instagram.com/mike_ski_guide78/" aria-label="Profil na Linkedin">
                <Linkedin />
                <span className={'invisible_text'}>linkedin</span>
              </a>
            </div>
          </div>
          <div className={styles.third_column}>
            <h4>Menu</h4>
            <a href="/#wycieczki">Wycieczki</a>
            <a href="/#oferta">Oferta</a>
            <a href="/#cennik">Cennik</a>
            <a href="/#kontakt">Kontakt</a>
            <a href="/#omnie">O mnie</a>
            <a href="/polityka-prywatnosci">Polityka prywatności</a>
          </div>
        </div>
        <div className={styles.copy_right}>
          <p>
            Copyright © 2024 Przewodnik Sudecki | Powered by{' '}
            <a href="https://www.nowoczesnawitryna.pl/" target="_blank" rel="noopener noreferrer">
              Nowoczesna Witryna
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
