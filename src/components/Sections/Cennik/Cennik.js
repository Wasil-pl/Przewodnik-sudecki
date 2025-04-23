import React from 'react';
import * as styles from './Cennik.module.scss';
import { Container } from 'react-bootstrap';
import TytułSekcji from '../../Ui/TytułSekcji/TytułSekcji';
import ShapeDivider from '../../../svg/Zasob2-01.svg';

const Cennik = () => {
  return (
    <section id="cennik" className={styles.price}>
      <Container>
        <TytułSekcji
          title="Cennik wycieczek z"
          coloredText=" przewodnikiem Sudeckim"
          subtitle="Poniższe ceny obowiązują w sezonie wysokim 2025 (maj–czerwiec). Po sezonie stawki ustalam indywidualnie – dostosowuję ofertę do potrzeb i możliwości grupy."
          backgroundText="Cennik"
        />
        <div className={styles.wrapper}>
          <div className={styles.wrapper}>
            <div
              data-sal="zoom-in"
              data-sal-delay="200"
              data-sal-duration="2000"
              data-sal-easing="ease-out-cubic"
              aria-label="Przewodnik Sudecki"
              className={styles.panel}
            >
              <ul>
                <li>
                  <strong>Wycieczka 2–3h</strong> na terenie KPN – <strong>500–550 zł brutto</strong>
                </li>
                <li>
                  <strong>Wycieczka do 8h</strong> – <strong>700–850 zł brutto</strong> (zależnie od miejsca i programu)
                </li>
                <li>
                  <strong>Powyżej 8h</strong> lub poza uprawnieniami sudeckimi – <em>cena ustalana indywidualnie</em>
                </li>
                <li>
                  <strong>Biegowe, rowerowe, skiturowe, fakultatywne</strong> – <em>indywidualna wycena</em>
                </li>
              </ul>

              <p>*Wystawiam fakturę VAT</p>
              <p>
                W razie złych warunków pogodowych ustalamy <strong>program zastępczy</strong>.
              </p>
              <p>
                Po sezonie – <strong>elastyczna wycena dopasowana do klienta</strong>. <br />
                <strong>Dogadamy się!</strong>
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div className={styles.shapeDivider}>
        <ShapeDivider />
      </div>
    </section>
  );
};

export default Cennik;
