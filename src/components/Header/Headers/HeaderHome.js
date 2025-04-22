import React, { useRef } from 'react';
import * as styles from './Headers.module.scss';
import { useMediaQuery } from 'react-responsive';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../../../assets/scrool_down.json';

const HeaderHome = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ['start start', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 0.5], ['0%', '200%']);

  return (
    <div ref={headerRef} className={styles.header}>
      <motion.div style={{ y: textY }} className={styles.content}>
        {!isMobile && (
          <h1
            data-sal="zoom-in"
            data-sal-delay="200"
            data-sal-duration="2000"
            data-sal-easing="ease-out-cubic"
            className={styles.title}
            aria-label="Przewodnik Sudecki"
          >
            Przewodnik Sudecki
          </h1>
        )}
        {isMobile && (
          <h1
            data-sal="zoom-in"
            data-sal-delay="200"
            data-sal-duration="2000"
            data-sal-easing="ease-out-cubic"
            className={styles.title}
            aria-label="Przewodnik Sudecki"
          >
            Przewodnik
            <br />
            Sudecki
          </h1>
        )}

        <h2
          data-sal="zoom-in"
          data-sal-delay="200"
          data-sal-duration="2000"
          data-sal-easing="ease-out-cubic"
          className={styles.subtitle}
        >
          Michał Filipowicz
          <br />
          Twój przewodnik po Sudetach i Skalnym Mieście
        </h2>
      </motion.div>

      <div
        data-sal="zoom-in"
        data-sal-delay="200"
        data-sal-duration="2000"
        data-sal-easing="ease-out-cubic"
        className={styles.hero_info}
      >
        <div className={styles.hero_info_text}>
          <h3>Śnieżka</h3>
          <p>
            Najwyższy szczyt Sudetów (1603 m n.p.m.), górujący nad Karkonoszami i Kotliną Jeleniogórską. Leży na granicy
            Polski i Czech.
          </p>
        </div>
      </div>

      <div className={styles.lottie}>
        <Lottie animationData={animationData} loop={true} autoplay={true} />
      </div>

      <motion.div style={{ y: backgroundY }} className={styles.background} />
      <div className={styles.foreground} />
    </div>
  );
};

export default HeaderHome;
