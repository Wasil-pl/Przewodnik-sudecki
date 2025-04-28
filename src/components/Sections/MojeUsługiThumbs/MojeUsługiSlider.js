import React from 'react';
import * as styles from './MojeUsługiSlider.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import { Carousel } from 'react-bootstrap';

const MojeUsługiSlider = ({ handleTabClick }) => {
  return (
    <div className={styles.sliderWrapper}>
      <Carousel interval={null} indicators={false} className={styles.bootstrapCarousel}>
        <Carousel.Item>
          <button onClick={() => handleTabClick('skalne')} className={`no_button ${styles.imageButton} `}>
            <StaticImage
              src="../../../images/skalneMiasto.png"
              alt="Skalne Miasta"
              width={400}
              placeholder="blurred"
              layout="constrained"
            />
            <div className={styles.textOnImage}>Góry Stołowe i czeskie Skalne Miasta</div>
          </button>
        </Carousel.Item>

        <Carousel.Item>
          <button
            onClick={() => handleTabClick('karkonosze')}
            className={`no_button ${styles.imageButton} ${styles.imageButton2}`}
          >
            <StaticImage
              src="../../../images/karkonosze.png"
              alt="Karkonosze"
              width={400}
              placeholder="blurred"
              layout="constrained"
            />
            <div className={styles.textOnImage}>Karkonosze</div>
          </button>
        </Carousel.Item>

        <Carousel.Item>
          <button
            onClick={() => handleTabClick('sowie')}
            className={`no_button ${styles.imageButton} ${styles.imageButton3}`}
          >
            <StaticImage
              src="../../../images/górySowie2.png"
              alt="Góry Sowie"
              width={400}
              placeholder="blurred"
              layout="constrained"
            />
            <div className={styles.textOnImage}>Góry Sowie i Kamienne</div>
          </button>
        </Carousel.Item>

        <Carousel.Item>
          <button
            onClick={() => handleTabClick('zamki')}
            className={`no_button ${styles.imageButton} ${styles.imageButton4}`}
          >
            <StaticImage
              src="../../../images/zamki.png"
              alt="Zamki"
              width={400}
              placeholder="blurred"
              layout="constrained"
            />
            <div className={styles.textOnImage}>Zamki i fortyfikacje</div>
          </button>
        </Carousel.Item>

        <Carousel.Item>
          <button
            onClick={() => handleTabClick('aktywne')}
            className={`no_button ${styles.imageButton} ${styles.imageButton5}`}
          >
            <StaticImage
              src="../../../images/sport.png"
              alt="Wycieczki aktywne"
              width={400}
              placeholder="blurred"
              layout="constrained"
            />
            <div className={styles.textOnImage}>Wycieczki biegowe i rowerowe</div>
          </button>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MojeUsługiSlider;
