import React, { useEffect, useState } from 'react';
import * as styles from './MojeUsługiContent.module.scss';
import { skalne_miasta, karkonosze, sowie_góry, zamki, aktywne } from '../../../consts/moje_usługi_teksty';
import { StaticImage } from 'gatsby-plugin-image';
import ModalZdjecia from '../../Utils/ModalZdjecia/ModalZdjecia';
import MojeUsługiSlider from '../MojeUsługiThumbs/MojeUsługiSlider';
import { useMediaQuery } from 'react-responsive';
import MojeUsługiThumbs from '../MojeUsługiThumbs/MojeUsługiThumbs';

const MojeUsługiContent = () => {
  const [activeTab, setActiveTab] = useState('skalne');
  const [modalImageId, setModalImageId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    if (window === undefined) return;
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTabClick = (key) => {
    setActiveTab(key);
    // po 300ms przewiń gładko do content_tab
    setTimeout(() => {
      const el = document.getElementById('content_tab');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  const handleImageClick = (imageId) => {
    setModalImageId(imageId);
    setModalOpen(true);
  };

  return (
    <div className={styles.thumbs_container}>
      <div className={styles.wrapper}>
        {isDesktop && <MojeUsługiThumbs handleTabClick={handleTabClick} />}
        {isMobile && <MojeUsługiSlider handleTabClick={handleTabClick} />}

        <div id="content_tab" className={styles.content_tab}>
          {activeTab === 'skalne' && (
            <div>
              <h4>Góry Stołowe i czeskie Skalne Miasta</h4>
              {skalne_miasta.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                  {index < skalne_miasta.length - 1 && <br />}
                </p>
              ))}

              <div className={styles.content_images}>
                <button
                  className={`no_button ${styles.image_button}`}
                  onClick={() => handleImageClick('skalne_miasta_1')}
                >
                  <StaticImage
                    src="../../../images/Skalne miasto.jpeg"
                    alt="Skalne Miasta"
                    id="skalne_miasta_1"
                    height={350}
                    placeholder="blurred"
                    layout="constrained"
                  />
                </button>
                <button
                  className={`no_button ${styles.image_button}`}
                  onClick={() => handleImageClick('skalne_miasta_2')}
                >
                  <StaticImage
                    src="../../../images/Skalne miasto2.jpeg"
                    alt="Skalne Miasta"
                    id="skalne_miasta_2"
                    height={350}
                    placeholder="blurred"
                    layout="constrained"
                  />
                </button>
                <button
                  className={`no_button ${styles.image_button}`}
                  onClick={() => handleImageClick('bledne_skaly_1')}
                >
                  <StaticImage
                    src="../../../images/bledne_skaly1_skalne_miasta.jpg"
                    alt="Błędne Skały"
                    id="bledne_skaly_1"
                    height={350}
                    placeholder="blurred"
                    layout="constrained"
                  />
                </button>
                <button
                  className={`no_button ${styles.image_button}`}
                  onClick={() => handleImageClick('szczeliniec_wielki_1')}
                >
                  <StaticImage
                    src="../../../images/szczeliniec_wielki.jpg"
                    alt="Szczeliniec Wielki"
                    id="szczeliniec_wielki_1"
                    height={350}
                    placeholder="blurred"
                    layout="constrained"
                  />
                </button>
                <button
                  className={`no_button ${styles.image_button}`}
                  onClick={() => handleImageClick('szczeliniec_wielki_2')}
                >
                  <StaticImage
                    src="../../../images/szczeliniec_wielki2.jpg"
                    alt="Szczeliniec Wielki"
                    id="szczeliniec_wielki_2"
                    height={350}
                    placeholder="blurred"
                    layout="constrained"
                  />
                </button>
                <button
                  className={`no_button ${styles.image_button}`}
                  onClick={() => handleImageClick('szczeliniec_1')}
                >
                  <StaticImage
                    src="../../../images/Szczeliniec.jpg"
                    alt="Szczeliniec"
                    id="szczeliniec_1"
                    height={350}
                    placeholder="blurred"
                    layout="constrained"
                  />
                </button>
              </div>
            </div>
          )}
          {activeTab === 'karkonosze' && (
            <div>
              <h4>Karkonosze</h4>
              {karkonosze.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                  {index < karkonosze.length - 1 && <br />}
                </p>
              ))}

              <div className={styles.content_images}>
                <button className={`no_button ${styles.image_button}`} onClick={() => handleImageClick('karkonosze_1')}>
                  <StaticImage
                    src="../../../images/karkonosze.jpeg"
                    alt="widok na Karkonosze"
                    id="karkonosze_1"
                    height={350}
                    placeholder="blurred"
                    layout="constrained"
                  />
                </button>
                <button className={`no_button ${styles.image_button}`} onClick={() => handleImageClick('karkonosze_2')}>
                  <StaticImage
                    src="../../../images/karkonosze2.jpeg"
                    alt="Karkonosze"
                    id="karkonosze_2"
                    height={350}
                    placeholder="blurred"
                    layout="constrained"
                  />
                </button>
                <button className={`no_button ${styles.image_button}`} onClick={() => handleImageClick('karkonosze_3')}>
                  <StaticImage
                    src="../../../images/sniezka.jpg"
                    alt="widok na Śnieżka"
                    id="karkonosze_3"
                    height={350}
                    placeholder="blurred"
                    layout="constrained"
                  />
                </button>
                <button className={`no_button ${styles.image_button}`} onClick={() => handleImageClick('karkonosze_4')}>
                  <StaticImage
                    src="../../../images/sniezka2.jpg"
                    alt="Śnieżka"
                    id="karkonosze_4"
                    height={350}
                    placeholder="blurred"
                    layout="constrained"
                  />
                </button>
              </div>
            </div>
          )}
          {activeTab === 'sowie' && (
            <div>
              <h4>Góry Sowie i Kamienne</h4>
              {sowie_góry.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                  {index < sowie_góry.length - 1 && <br />}
                </p>
              ))}

              <div className={styles.content_images}>
                <button className={`no_button ${styles.image_button}`} onClick={() => handleImageClick('sowie_1')}>
                  <StaticImage
                    src="../../../images/gory_sowie.jpeg"
                    alt="Góry Sowie"
                    id="sowie_1"
                    height={350}
                    placeholder="blurred"
                    layout="constrained"
                  />
                </button>
                <button className={`no_button ${styles.image_button}`} onClick={() => handleImageClick('sowie_2')}>
                  <StaticImage
                    src="../../../images/gory_sowie2.jpg"
                    alt="Góry Sowie"
                    id="sowie_2"
                    height={350}
                    placeholder="blurred"
                    layout="constrained"
                  />
                </button>
              </div>
            </div>
          )}
          {activeTab === 'zamki' && (
            <div>
              <h4>Zamki i Fortyfikacje</h4>
              {zamki.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                  {index < zamki.length - 1 && <br />}
                </p>
              ))}

              <div className={styles.content_images}>
                <button className={`no_button ${styles.image_button}`} onClick={() => handleImageClick('zamki_1')}>
                  <StaticImage
                    src="../../../images/zamek_chojnik.jpg"
                    alt="Zamki i Forty"
                    id="zamki_1"
                    height={350}
                    placeholder="blurred"
                    layout="constrained"
                  />
                </button>
                <button className={`no_button ${styles.image_button}`} onClick={() => handleImageClick('zamki_2')}>
                  <StaticImage
                    src="../../../images/zamek_czocha.jpg"
                    alt="Zamki i Forty"
                    id="zamki_2"
                    height={350}
                    placeholder="blurred"
                    layout="constrained"
                  />
                </button>
                <button className={`no_button ${styles.image_button}`} onClick={() => handleImageClick('zamki_3')}>
                  <StaticImage
                    src="../../../images/zamek_ksiaz.jpg"
                    alt="Zamki i Forty"
                    id="zamki_3"
                    height={350}
                    placeholder="blurred"
                    layout="constrained"
                  />
                </button>
                <button className={`no_button ${styles.image_button}`} onClick={() => handleImageClick('zamki_4')}>
                  <StaticImage
                    src="../../../images/wycieczki_miasta_warowne.jpg"
                    alt="Zamki i Forty"
                    id="zamki_4"
                    height={350}
                    placeholder="blurred"
                    layout="constrained"
                  />
                </button>
              </div>
            </div>
          )}
          {activeTab === 'aktywne' && (
            <div>
              <h4>Wycieczki biegowe i rowerowe</h4>
              {aktywne.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                  {index < aktywne.length - 1 && <br />}
                </p>
              ))}

              <div className={styles.content_images}>
                <button className={`no_button ${styles.image_button}`} onClick={() => handleImageClick('aktywne_1')}>
                  <StaticImage
                    src="../../../images/wycieczki_biegowe.jpg"
                    alt="Wycieczki aktywne"
                    id="aktywne_1"
                    height={350}
                    placeholder="blurred"
                    layout="constrained"
                  />
                </button>
                <button className={`no_button ${styles.image_button}`} onClick={() => handleImageClick('aktywne_2')}>
                  <StaticImage
                    src="../../../images/wycieczki_biegowe_2.jpg"
                    alt="wycieczki aktywne"
                    id="aktywne_2"
                    height={350}
                    placeholder="blurred"
                    layout="constrained"
                  />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <ModalZdjecia imageId={modalImageId} onClose={() => setModalOpen(false)} show={modalOpen} />
    </div>
  );
};

export default MojeUsługiContent;
