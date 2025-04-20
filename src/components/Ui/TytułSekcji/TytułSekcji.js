import React from 'react';
import * as styles from './TytułSekcji.module.scss';
import MySvg from '../../../svg/separator.svg';

const TytułSekcji = ({ title, coloredText, subtitle, variant = '' }) => {
  return (
    <div
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-easing="ease"
      data-sal-duration="1000"
      className={`${styles.section_title} ${styles[variant]}`}
    >
      <MySvg className={styles.separator} />
      <h3>
        {title}
        {coloredText && <span className={`color_primary`}>{coloredText}</span>}
      </h3>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default TytułSekcji;
