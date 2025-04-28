import React from 'react';
import * as styles from './HeroContactBar.module.scss';
import { Facebook, Linkedin } from 'react-bootstrap-icons';

const HeroContactBar = () => {
  return (
    <div className={styles.contact_bar}>
      <div className={styles.contact_item}>
        <a href="tel:+48574708808">+48 574 708 808</a>
      </div>
      <div className={styles.contact_item}>
        <a href="mailto:kontakt@przewodnik-skalnemiasto.pl">kontakt@przewodnik-skalnemiasto.pl</a>
      </div>
      <div className={styles.contact_item_icon}>
        <a href="https://www.facebook.com/michael.filipowicz.96" aria-label="Profil na Facebooku">
          <Facebook />
          <span className={'invisible_text'}>facebook</span>
        </a>
      </div>
      <div className={styles.contact_item_icon}>
        <a href="https://www.instagram.com/mike_ski_guide78/" aria-label="Profil na Linkedin">
          <Linkedin />
          <span className={'invisible_text'}>linkedin</span>
        </a>
      </div>
    </div>
  );
};

export default HeroContactBar;
