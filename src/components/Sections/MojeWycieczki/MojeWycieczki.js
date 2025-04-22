import React, { useRef, useState } from 'react';
import * as styles from './MojeWycieczki.module.scss';
import { Container } from 'react-bootstrap';
import TytułSekcji from '../../Ui/TytułSekcji/TytułSekcji';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import { wrap } from '@popmotion/popcorn';

const sliderVariants = {
  incoming: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',
    scale: 1,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

const MojeWycieczki = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const activeIndex = wrap(0, 2, index);

  const sectionMyTripRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionMyTripRef,
    offset: ['start end', 'center end'],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], ['-100%', '0%']);
  const rightX = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);

  const swipeTo = (dir) => {
    setIndex((prev) => prev + dir);
    setDirection(dir);
  };

  return (
    <section ref={sectionMyTripRef} id="wycieczki" className={styles.my_trips}>
      <Container>
        <TytułSekcji
          title="Wycieczki edukacyjne i fakultatywne "
          coloredText="po Sudetach"
          subtitle="Góry mogą być fascynującą lekcją przyrody i historii – zapraszam na wyprawy dla dzieci, młodzieży i grup zorganizowanych."
          backgroundText="Wycieczki"
        />
        <div className={styles.wrapper}>
          <div className={styles.row}>
            <motion.div style={{ x: leftX }} className={styles.first_column}>
              <div className={styles.content}>
                <h4>Wycieczki z dziećmi</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className={styles.content_image}>
                <StaticImage
                  src="../../../images/wycieczki_z_dziecmi_2.png"
                  alt="Wycieczki z dziećmi"
                  placeholder="blurred"
                  width={500}
                  quality={100}
                  layout="constrained"
                  className={styles.image}
                />
              </div>
            </motion.div>
            <motion.div style={{ x: rightX }} className={styles.second_column}>
              <div className={styles.imageWrapper}>
                <StaticImage
                  src="../../../images/wycieczki_z_dziecmi.png"
                  alt="Wycieczki z dziećmi"
                  placeholder="blurred"
                  width={700}
                  quality={100}
                  layout="constrained"
                  className={styles.image}
                />
              </div>
            </motion.div>
          </div>
          <div className={`${styles.row} ${styles.row_reverse}`}>
            <motion.div style={{ x: rightX }} className={styles.first_column}>
              <div className={styles.content}>
                <h4>Wycieczki z dziećmi</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className={styles.content_image}>
                <StaticImage
                  src="../../../images/wycieczki_z_dziecmi_2.png"
                  alt="Wycieczki z dziećmi"
                  placeholder="blurred"
                  width={500}
                  quality={100}
                  layout="constrained"
                  className={styles.image}
                />
              </div>
            </motion.div>
            <motion.div style={{ x: leftX }} className={styles.second_column}>
              <div className={styles.imageWrapper}>
                <StaticImage
                  src="../../../images/wycieczki_z_dziecmi.png"
                  alt="Wycieczki z dziećmi"
                  placeholder="blurred"
                  width={700}
                  quality={100}
                  layout="constrained"
                  className={styles.image}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MojeWycieczki;
