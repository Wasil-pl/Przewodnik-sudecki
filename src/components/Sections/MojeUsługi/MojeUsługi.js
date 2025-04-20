import React from 'react';
import * as styles from './MojeUsługi.module.scss';
import { Container } from 'react-bootstrap';
import TytułSekcji from '../../Ui/TytułSekcji/TytułSekcji';
import MojeUsługiThumbs from '../MojeUsługiThumbs/MojeUsługiThumbs';
import ShapeDivider from '../../../svg/Zasob1-01.svg';
import ShapeDivider2 from '../../../svg/Zasob2-01.svg';

const MojeUsługi = () => {
  return (
    <section id="oferta" className={styles.myServices}>
      <Container>
        <TytułSekcji
          title="Wycieczki po Sudetach z "
          coloredText="przewodnikiem sudeckim"
          subtitle="Góry Stołowe, czeskie Skalne Miasta, Karkonosze, Góry Sowie – wybierz kierunek i wyrusz ze mną na niezapomnianą wycieczkę."
          variant="white"
        />

        <div className={styles.text_info}>
          <p>Wybierz miejsce, które Cię interesuje – kliknij zdjęcie i poznaj szczegóły wyprawy.</p>
        </div>

        <MojeUsługiThumbs />

        <div className={styles.shapeDividerTop}>
          <ShapeDivider />
        </div>

        <div className={styles.shapeDividerBottom}>
          <ShapeDivider2 />
        </div>
      </Container>
    </section>
  );
};

export default MojeUsługi;
