import React from 'react';
import '../styles/bootstrap.scss';
import '../styles/global.scss';
import '../styles/normalize.scss';
import Menu from '../components/Header/Menu/Menu';
import OMnie from '../components/Sections/OMnie/OMnie';
import MojeUsługi from '../components/Sections/MojeUsługi/MojeUsługi';
import HeroSlider from '../components/Header/HeroSlider/HeroSlider';
import MojeWycieczki from '../components/Sections/MojeWycieczki/MojeWycieczki';
import Cennik from '../components/Sections/Cennik/Cennik';
import Kontakt from '../components/Sections/Kontakt/Kontakt';
import ScroolUpButton from '../components/Utils/ScroolUpButton/ScroolUpButton';
import Footer from '../components/Footer/Footer/Footer';

const IndexPage = () => {
  return (
    <>
      <Menu />
      <HeroSlider />
      <OMnie />
      <MojeUsługi />
      <MojeWycieczki />
      <Cennik />
      <Kontakt />
      <Footer />
      <ScroolUpButton />
    </>
  );
};

export default IndexPage;

export function Head() {
  return (
    <>
      <html lang="pl" />
      <meta charSet="utf-8" />
      <title>Przewodnik Sudecki | Michał Filipowicz – Wycieczki po Sudetach i Skalnych Miastach</title>
      <meta
        name="description"
        content="Licencjonowany przewodnik sudecki Michał Filipowicz – organizuję wycieczki górskie, rowerowe, biegowe i skiturowe po Sudetach, Karkonoszach, Górach Stołowych oraz czeskich Skalnych Miastach. Przewodnik z pasją i doświadczeniem."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content="przewodnik sudecki, przewodnik górski, Sudety, wycieczki Sudety, Karkonosze, Góry Stołowe, Skalne Miasta, Adršpach, wycieczki z przewodnikiem, przewodnik Sudety"
      />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph */}
      <meta property="og:title" content="Przewodnik Sudecki | Michał Filipowicz" />
      <meta
        property="og:description"
        content="Przewodnik sudecki – wycieczki piesze, rowerowe i skiturowe z licencjonowanym przewodnikiem po Sudetach, Karkonoszach i Skalnych Miastach."
      />
      <meta property="og:site_name" content="Przewodnik Sudecki" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://przewodnik-skalnemiasto.pl" />
    </>
  );
}
