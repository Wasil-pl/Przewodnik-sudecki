import React, { useEffect, useRef, useState } from 'react';
import * as styles from './FogSeparator.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

const FogSeparator = () => {
  const fogRef = useRef(null);
  const { scrollY } = useScroll();
  const [prevScrollY, setPrevScrollY] = useState(0);

  // Używamy surowego scrollY do wykrycia kierunku
  const [direction, setDirection] = useState('none');

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > prevScrollY) setDirection('down');
      else if (latest < prevScrollY) setDirection('up');
      setPrevScrollY(latest);
    });
  }, [scrollY, prevScrollY]);

  // Przesuwaj tylko jeśli kierunek to "down"
  const x = useTransform(scrollY, (value) => (direction === 'down' ? -value * 0.1 : 0));

  return (
    <div>
      <motion.div className={styles.fog} ref={fogRef} style={{ x }} />
    </div>
  );
};

export default FogSeparator;
