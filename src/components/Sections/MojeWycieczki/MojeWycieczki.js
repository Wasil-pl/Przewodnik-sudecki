import React from 'react';
import * as styles from './MojeWycieczki.module.scss';
import { Container } from 'react-bootstrap';
import TytułSekcji from '../../Ui/TytułSekcji/TytułSekcji';
import { StaticImage } from 'gatsby-plugin-image';
import Akordeon from '../../Utils/Akordeon/Akordeon';
import { tripDataChild } from '../../../consts/moje_wycieczki_dzieci';

const MojeWycieczki = () => {
  return (
    <section id="wycieczki" className={styles.my_trips}>
      <Container>
        <TytułSekcji
          title="Wycieczki edukacyjne i fakultatywne "
          coloredText="po Sudetach"
          subtitle="Góry mogą być fascynującą lekcją przyrody i historii – zapraszam na wyprawy dla dzieci, młodzieży i grup zorganizowanych."
          backgroundText="Wycieczki"
        />
        <div className={styles.wrapper}>
          <div className={styles.row}>
            <div
              data-sal="slide-right"
              data-sal-delay="100"
              data-sal-duration="800"
              data-sal-easing="ease-in-out"
              className={styles.first_column}
            >
              <div>
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
            </div>
            <div
              data-sal="slide-left"
              data-sal-delay="100"
              data-sal-duration="800"
              data-sal-easing="ease-in-out"
              className={styles.second_column}
            >
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
            </div>
          </div>
          <div className={`${styles.row} ${styles.row_reverse}`}>
            <div
              data-sal="slide-left"
              data-sal-delay="100"
              data-sal-duration="800"
              data-sal-easing="ease-in-out"
              className={styles.first_column}
            >
              <div>
                <h4>Wycieczki fakultatywne</h4>
                <p>Wycieczki fakultatywne po Sudetach.</p>
                <p>
                  Cześć, jestem przewodnikiem sudeckim jeśli chcesz zorganizuję dla Ciebie dowolną wycieczkę
                  fakultatywną. Możemy wybrać się razem w mniej znane skalne miasta, zwiedzić dawne ruiny zamków.
                  Odwiedzić warowne miasta. Przejść śladem szańców z wojen śląskich i późniejszych konfliktów. Zdobyć
                  najwyższe szczyty zaliczane do Korony Gór Polski, Korony Sudetów, Sudeckiego Włóczykija, Diademu Gór
                  Polskich czy innych odznak górskich. Oferuję ponadto przejścia trasami długodystansowymi np. Głównym
                  Szlakiem Sudeckim. Podczas wycieczek część tras możemy przemierzać pieszo lub autokarem, podziwiając
                  wspaniały krajobraz górski i delektując się pięknymi widokami. Wierzcie mi – są niesamowite !!
                </p>
              </div>
            </div>
            <div
              data-sal="slide-right"
              data-sal-delay="100"
              data-sal-duration="800"
              data-sal-easing="ease-in-out"
              className={styles.second_column}
            >
              <div className={styles.imageWrapper}>
                <StaticImage
                  src="../../../images/wycieczki_fakultatywne_2.png"
                  alt="Wycieczki z dziećmi"
                  placeholder="blurred"
                  width={500}
                  quality={100}
                  layout="constrained"
                />

                <StaticImage
                  src="../../../images/wycieczki_fakultatywne_1.png"
                  alt="Wycieczki z dziećmi"
                  placeholder="blurred"
                  width={700}
                  quality={100}
                  layout="constrained"
                  className={styles.image_bottom}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MojeWycieczki;
