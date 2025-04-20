import React from 'react';
import '../styles/bootstrap.scss';
import '../styles/global.scss';
import '../styles/normalize.scss';
import Menu from '../components/Header/Menu/Menu';
import OMnie from '../components/Sections/OMnie/OMnie';
import MojeUsługi from '../components/Sections/MojeUsługi/MojeUsługi';
import HeroSlider from '../components/Header/HeroSlider/HeroSlider';

const IndexPage = () => {
  return (
    <>
      <Menu />
      <HeroSlider />
      <OMnie />
      <MojeUsługi />
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
