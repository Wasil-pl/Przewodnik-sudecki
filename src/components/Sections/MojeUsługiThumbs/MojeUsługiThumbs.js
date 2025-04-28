import React from 'react';
import * as styles from './MojeUsługiThumbs.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

const MojeUsługiThumbs = ({ handleTabClick }) => {
  return (
    <div className={styles.thumbs}>
      <button
        data-sal="zoom-in"
        data-sal-delay="100"
        data-sal-duration="800"
        data-sal-easing="ease-in-out"
        onClick={() => handleTabClick('skalne')}
        className={`no_button ${styles.image_button}`}
      >
        <StaticImage
          src="../../../images/skalneMiasto.png"
          alt="Skalne Miasta"
          width={400}
          placeholder="blurred"
          layout="constrained"
        />
        <div className={styles.text_on_image}>Góry Stołowe i czeskie Skalne Miasta</div>
      </button>

      <button
        data-sal="zoom-in"
        data-sal-delay="100"
        data-sal-duration="800"
        data-sal-easing="ease-in-out"
        onClick={() => handleTabClick('karkonosze')}
        className={`no_button ${styles.image_button}`}
      >
        <StaticImage
          src="../../../images/karkonosze.png"
          alt="Karkonosze"
          width={400}
          placeholder="blurred"
          layout="constrained"
        />
        <div className={styles.text_on_image}>Karkonosze</div>
      </button>

      <button
        data-sal="zoom-in"
        data-sal-delay="100"
        data-sal-duration="800"
        data-sal-easing="ease-in-out"
        onClick={() => handleTabClick('sowie')}
        className={`no_button ${styles.image_button}`}
      >
        <StaticImage
          src="../../../images/górySowie2.png"
          alt="Góry Sowie"
          width={400}
          placeholder="blurred"
          layout="constrained"
        />
        <div className={styles.text_on_image}>Góry Sowie i Kamienne</div>
      </button>

      <button
        data-sal="zoom-in"
        data-sal-delay="100"
        data-sal-duration="800"
        data-sal-easing="ease-in-out"
        onClick={() => handleTabClick('zamki')}
        className={`no_button ${styles.image_button}`}
      >
        <StaticImage
          src="../../../images/zamki.png"
          alt="Zamki"
          width={400}
          placeholder="blurred"
          layout="constrained"
        />
        <div className={styles.text_on_image}>Zamki i fortyfikacje</div>
      </button>

      <button
        data-sal="zoom-in"
        data-sal-delay="100"
        data-sal-duration="800"
        data-sal-easing="ease-in-out"
        onClick={() => handleTabClick('aktywne')}
        className={`no_button ${styles.image_button}`}
      >
        <StaticImage
          src="../../../images/sport.png"
          alt="Wycieczki aktywne"
          width={400}
          placeholder="blurred"
          layout="constrained"
        />
        <div className={styles.text_on_image}>Wycieczki biegowe i rowerowe</div>
      </button>
    </div>
  );
};

export default MojeUsługiThumbs;
