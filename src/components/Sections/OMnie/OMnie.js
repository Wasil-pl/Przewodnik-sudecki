import React, { useRef } from 'react';
import * as styles from './OMnie.module.scss';
import { Container } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';
import { motion, useScroll, useTransform } from 'framer-motion';
import TytułSekcji from '../../Ui/TytułSekcji/TytułSekcji';

const OMnie = () => {
  const sectionAboutMeRef = useRef(null);
  const nextRowRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionAboutMeRef,
    offset: ['start end', 'center end'],
  });

  const { scrollYProgress: nextRowProgress } = useScroll({
    target: nextRowRef,
    offset: ['start end', 'center center'],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], ['-100%', '0%']);
  const rightX = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);
  const nextRowY = useTransform(nextRowProgress, [0, 1], ['200px', '0px']);
  return (
    <section ref={sectionAboutMeRef} id="omnie" className={styles.about_me}>
      <Container>
        <TytułSekcji
          title="Poznaj mnie"
          coloredText=" bliżej"
          subtitle="przewodnik sudecki Michał Filipowicz"
          backgroundText="O mnie"
        />
        <div className={styles.wrapper}>
          <motion.div style={{ x: leftX }} className={styles.first_column}>
            <h4>Cześć</h4>
            <p>
              Nazywam się <strong>Michał Filipowicz</strong> i jestem{' '}
              <em>licencjonowanym przewodnikiem górskim sudeckim</em>. Należę do <em>PTTK</em> i posiadam uprawnienia do
              oprowadzania grup turystycznych po całym obszarze <em>Sudetów</em> – zarówno po stronie polskiej, jak i
              czeskiej. Specjalizuję się w organizowaniu <em>wycieczek z przewodnikiem po Sudetach</em>, Beskidach oraz
              Dolnym Śląsku.
            </p>

            <p>
              Moim ulubionym regionem są <em>Góry Stołowe</em> – a w szczególności magiczne{' '}
              <em>Skalne Miasto Adršpach</em>,<em>Teplické Skály</em>, <em>Ostaš</em>, <em>Szczeliniec Wielki</em> oraz{' '}
              <em>Błędne Skały</em>. Często prowadzę też wyprawy w <em>Karkonosze</em>, <em>Masyw Śnieżnika</em>,{' '}
              <em>Góry Kamienne (Suche)</em> i <em>Góry Sowie</em>. Jeśli marzysz o wędrówce po tych wyjątkowych
              miejscach – jesteś we właściwym miejscu.
            </p>

            <p>
              Organizuję zarówno <em>klasyczne piesze wycieczki</em>, jak i <em>rowerowe</em> oraz{' '}
              <em>skiturowe wyprawy po Sudetach</em>. Stawiam na <em>bezpieczeństwo</em>, dobrą atmosferę i dzielenie
              się wiedzą o przyrodzie, historii oraz kulturze regionu.
            </p>
          </motion.div>
          <motion.div style={{ x: rightX }} className={styles.second_column}>
            <StaticImage
              src="../../../images/omnie.png"
              alt="Przewodnik Sudecki, Instruktor narciarstwa zjazdowego, biegowego i skiturowego – Michał Filipowicz"
              placeholder="blurred"
              width={600}
              quality={100}
            />
          </motion.div>
          <motion.div ref={nextRowRef} style={{ y: nextRowY }} className={styles.next_row}>
            <p>
              Z wykształcenia jestem <em>archeologiem</em>, absolwentem studiów doktoranckich na{' '}
              <em>Uniwersytecie Warszawskim</em>. Ukończyłem również kierunki <em>turystyka i rekreacja</em> oraz{' '}
              <em>zarządzanie w turystyce</em>. Na co dzień zajmuję się <em>badaniem dawnych fortyfikacji</em>, a pasję
              do odkrywania i historii staram się przekazywać podczas każdej wyprawy.
            </p>

            <p>
              Poza górami moją pasją są <em>podróże</em> i <em>bieganie</em> – startuję w biegach na 5 i 10 km, zarówno
              na asfaltach, jak i w terenie górskim. W wolnych chwilach sięgam po dobrą książkę lub{' '}
              <em>pogłębiam swoją wiedzę</em>.
            </p>

            <div className={styles.uprawnienia}>
              <div className={styles.uprawnienia_loga}>
                <StaticImage
                  src="../../../images/przewodniksudecki.png"
                  alt="Uprawnienia przewodnika sudeckiego, górskiego na obszar Sudetów klasy III wydane przez Marszałka Województwa Dolnośląskiego. Numer uprawnień 60/LG/2019."
                  placeholder="blurred"
                  width={150}
                  quality={100}
                />

                <StaticImage
                  src="../../../images/logo_sitn.png"
                  alt="logo SITN"
                  placeholder="blurred"
                  width={150}
                  quality={100}
                />

                <StaticImage
                  src="../../../images/logo_instruktor.png"
                  alt="logo instruktor narciarstwa zjazdowego, biegowego i skiturowego"
                  placeholder="blurred"
                  width={130}
                  quality={100}
                />
              </div>
              <div className={styles.uprawnienia_text}>
                <p>
                  <strong>
                    Uprawnienia przewodnika sudeckiego, górskiego na obszar Sudetów klasy III wydane przez Marszałka
                    Województwa Dolnośląskiego. Numer uprawnień 60/LG/2019.
                  </strong>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default OMnie;
