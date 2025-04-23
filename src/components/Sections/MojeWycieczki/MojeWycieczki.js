import React, { useRef } from 'react';
import * as styles from './MojeWycieczki.module.scss';
import { Container } from 'react-bootstrap';
import TytułSekcji from '../../Ui/TytułSekcji/TytułSekcji';
import { motion, useScroll, useTransform } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import Akordeon from '../../Utils/Akordeon/Akordeon';
import { tripDataChild } from '../../../consts/moje_wycieczki_dzieci';

const MojeWycieczki = () => {
  const sectionMyTripRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionMyTripRef,
    offset: ['start end', 'center end'],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: sectionMyTripRef,
    offset: ['end end', 'center end'],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], ['-100%', '0%']);
  const rightX = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);
  const nextLeftX = useTransform(scrollYProgress2, [0, 1], ['0%', '-100%']);
  const nextRightX = useTransform(scrollYProgress2, [0, 1], ['0%', '100%']);

  return (
    <section id="wycieczki" className={styles.my_trips}>
      <Container>
        <TytułSekcji
          title="Wycieczki edukacyjne i fakultatywne "
          coloredText="po Sudetach"
          subtitle="Góry mogą być fascynującą lekcją przyrody i historii – zapraszam na wyprawy dla dzieci, młodzieży i grup zorganizowanych."
          backgroundText="Wycieczki"
        />
        <div ref={sectionMyTripRef} className={styles.wrapper}>
          <div className={styles.row}>
            <motion.div style={{ x: leftX }} className={styles.first_column}>
              <div className={styles.content}>
                <h4>Wycieczki z dziećmi</h4>
                <p>
                  Organizuję profesjonalne <strong>wycieczki dla szkół, kolonii, obozów i klubów sportowych</strong> po
                  polskich i czeskich Sudetach. Jako <strong>licencjonowany przewodnik sudecki</strong> oprowadzam grupy
                  zorganizowane po najciekawszych trasach w Karkonoszach, Górach Stołowych, Ziemi Kłodzkiej, Górach
                  Sowich i Masywie Śnieżnika.
                </p>
                <p>
                  Pomagam również w zaplanowaniu całej wyprawy – od trasy, przez atrakcje, aż po alternatywne programy
                  przy złej pogodzie. Jeśli nie wiesz, dokąd pojechać –{' '}
                  <strong>doradzę i przygotuję plan wycieczki</strong> od A do Z.
                </p>
                <p>Wybrane propozycje tras:</p>

                <Akordeon tripData={tripDataChild} />
              </div>
            </motion.div>
            <motion.div style={{ x: rightX }} className={styles.second_column}>
              <div className={styles.imageWrapper}>
                <StaticImage
                  src="../../../images/wycieczki_z_dziecmi.png"
                  alt="Wycieczki z dziećmi"
                  placeholder="blurred"
                  width={450}
                  quality={100}
                  layout="constrained"
                />

                <StaticImage
                  src="../../../images/wycieczki_z_dziecmi_2.png"
                  alt="Wycieczki z dziećmi"
                  placeholder="blurred"
                  width={500}
                  quality={100}
                  layout="constrained"
                  className={styles.image_bottom}
                />
              </div>
            </motion.div>
          </div>
          <div className={`${styles.row} ${styles.row_reverse}`}>
            <motion.div style={{ x: nextRightX }} className={styles.first_column}>
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
            <motion.div style={{ x: nextLeftX }} className={styles.second_column}>
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
