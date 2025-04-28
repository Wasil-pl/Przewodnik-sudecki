import * as React from 'react';
import '../styles/global.scss';
import '../styles/normalize.scss';
import '../styles/typography.scss';
import '../styles/settings.scss';
import Footer from '../components/Footer/Footer/Footer';
import PrivacyPolicy from '../components/Sections/PrivacyPolicy/PrivacyPolicy';
import HeroSlider from '../components/Header/HeroSlider/HeroSlider';
import Menu from '../components/Header/Menu/Menu';

const PolitykaPrywatnosci = () => {
  return (
    <>
      <Menu />
      <HeroSlider />
      <PrivacyPolicy />
      <Footer />
    </>
  );
};

export default PolitykaPrywatnosci;

export function Head() {
  return (
    <>
      <html lang="pl" />
      <meta charSet="utf-8" />
      <title>Polityka prywatności | Przewodnik Sudecki</title>
      <meta
        name="description"
        content="Zapoznaj się z polityką prywatności serwisu prowadzonego przez licencjonowanego przewodnika sudeckiego Michała Filipowicza."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph */}
      <meta property="og:title" content="Polityka prywatności | Przewodnik Sudecki" />
      <meta
        property="og:description"
        content="Informacje o przetwarzaniu danych osobowych na stronie internetowej przewodnik-skalnemiasto.pl."
      />
      <meta property="og:site_name" content="Przewodnik Sudecki" />
      <meta property="og:type" content="website" />
    </>
  );
}
