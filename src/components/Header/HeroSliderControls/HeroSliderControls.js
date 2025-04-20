import React from 'react';
import * as styles from './HeroSliderControls.module.scss';
import { CaretLeftFill, CaretRightFill, Circle, CircleFill } from 'react-bootstrap-icons';

const HeroSliderControls = ({ index, total, onDotClick, onPrev, onNext }) => {
  return (
    <>
      <button
        onClick={onPrev}
        aria-label="Previous Slide"
        className={`no_button ${styles.arrowButton} ${styles.arrowButtonPrev}`}
      >
        <CaretLeftFill />
      </button>
      <button
        onClick={onNext}
        aria-label="Next Slide"
        className={`no_button ${styles.arrowButton} ${styles.arrowButtonNext}`}
      >
        <CaretRightFill />
      </button>

      <div className={styles.dotsContainer}>
        {Array.from({ length: total }).map((_, i) => (
          <button key={i} onClick={() => onDotClick(i)} className={`no_button `} aria-label={`Go to slide ${i + 1}`}>
            {i === index ? <CircleFill className={styles.dotActive} /> : <Circle className={styles.dotInActive} />}
          </button>
        ))}
      </div>
    </>
  );
};

export default HeroSliderControls;
