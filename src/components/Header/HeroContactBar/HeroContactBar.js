import React from 'react';
import * as styles from './HeroContactBar.module.scss';

const HeroContactBar = () => {
  return (
    <div className={styles.contact_bar}>
      <div className={styles.contact_item}>+48 123 456 789</div>
      <div className={styles.contact_item}>kontakt@twojadomena.pl</div>
    </div>
  );
};

export default HeroContactBar;
