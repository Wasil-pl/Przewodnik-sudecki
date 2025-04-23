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
      <title>Strona Główna | Przewodnik Sudecki</title>
      <meta name="description" content="Strona startowa aplikacji React z Bootstrapem i SCSS." />
    </>
  );
}
