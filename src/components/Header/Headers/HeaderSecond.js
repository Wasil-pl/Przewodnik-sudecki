import React, { useRef } from 'react';
import * as styles from './Headers.module.scss';
import { useMediaQuery } from 'react-responsive';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeaderSecond = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 999px)' });
  const headerRefSecond = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headerRefSecond,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 0.5], ['0%', '300%']);

  return (
    <div ref={headerRefSecond} className={`${styles.header} ${styles.second}`}>
      <motion.div style={{ y: textY }} className={`${styles.content} ${styles.second}`}>
        {!isMobile && (
          <h2
            data-sal="zoom-in"
            data-sal-delay="200"
            data-sal-duration="2000"
            data-sal-easing="ease-out-cubic"
            className={styles.title}
            aria-label="Skalne Miasta Sudetów"
          >
            Skalne Miasta Sudetów
          </h2>
        )}
        {isMobile && (
          <h2
            data-sal="zoom-in"
            data-sal-delay="200"
            data-sal-duration="2000"
            data-sal-easing="ease-out-cubic"
            className={styles.title}
            aria-label="Skalne Miasta Sudetów"
          >
            Skalne Miasta
            <br />
            Sudetów
          </h2>
        )}
      </motion.div>

      <div
        data-sal="zoom-in"
        data-sal-delay="200"
        data-sal-duration="2000"
        data-sal-easing="ease-out-cubic"
        className={styles.hero_info}
      >
        <div className={styles.hero_info_text}>
          <h3>Szczeliniec Wielki</h3>
          <p>
            Najwyższy szczyt Gór Stołowych (922 m n.p.m.) z tarasami widokowymi i słynnym „Fotelem Pradziada” – symbol
            skalnych miast Sudetów.
          </p>
        </div>
      </div>

      <motion.div style={{ y: backgroundY }} className={`${styles.background} ${styles.second}`} />
      <div className={`${styles.foreground} ${styles.second}`} />
    </div>
  );
};

export default HeaderSecond;
