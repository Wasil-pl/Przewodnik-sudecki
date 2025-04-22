import React, { useState, useEffect, useRef } from 'react';
import * as styles from './HeroSlider.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import sal from 'sal.js';
import { wrap } from '@popmotion/popcorn';
import HeaderHome from '../Headers/HeaderHome';
import HeaderSecond from '../Headers/HeaderSecond';
import ShapeDivider from '../../../svg/Zasob2-01.svg';
import HeroSliderControls from '../HeroSliderControls/HeroSliderControls';
import HeroContactBar from '../HeroContactBar/HeroContactBar';

const SLIDE_DURATION = 8000;
const TRANSITION_DURATION = 1.5;

const COMPONENTS = [
  { id: 0, content: <HeaderHome key="hero1" /> },
  { id: 1, content: <HeaderSecond key="hero2" /> },
];

const sliderVariants = {
  incoming: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    scale: 1,
  }),
  active: {
    x: 0,
    scale: 1,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',
    scale: 1,
  }),
};

const sliderTransition = {
  duration: TRANSITION_DURATION,
  ease: [0.56, 0.03, 0.12, 1.04],
};

const HeroSlider = () => {
  const [[index, direction], setIndexDirection] = useState([0, 0]);
  const activeIndex = wrap(0, COMPONENTS.length, index);
  const timeoutRef = useRef(null);

  const swipeTo = (newDirection) => {
    setIndexDirection(([prevIndex]) => [prevIndex + newDirection, newDirection]);
  };

  const skipTo = (i) => {
    const activeId = COMPONENTS[activeIndex].id;
    const targetId = COMPONENTS[i].id;
    if (activeId === targetId) return;
    const newDirection = targetId > activeId ? 1 : -1;
    setIndexDirection([i, newDirection]);
  };

  // autoplay effect
  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      swipeTo(1);
    }, SLIDE_DURATION);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  return (
    <header className={styles.heroSlider}>
      <div className={styles.shapeDivider}>
        <ShapeDivider />
      </div>

      <AnimatePresence custom={direction} initial={false} mode="sync">
        <motion.div
          key={COMPONENTS[activeIndex].id}
          custom={direction}
          variants={sliderVariants}
          initial="incoming"
          animate="active"
          exit="exit"
          transition={sliderTransition}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
          onAnimationComplete={() => sal()}
        >
          {COMPONENTS[activeIndex].content}
        </motion.div>
      </AnimatePresence>

      <HeroSliderControls
        index={activeIndex}
        total={COMPONENTS.length}
        onDotClick={skipTo}
        onPrev={() => swipeTo(-1)}
        onNext={() => swipeTo(1)}
        resetTrigger={index}
        duration={SLIDE_DURATION * 1000}
      />

      <HeroContactBar />
    </header>
  );
};

export default HeroSlider;
