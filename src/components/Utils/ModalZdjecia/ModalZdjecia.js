import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './modalZdjecia.scss';
import { Button, Modal } from 'react-bootstrap';

const ModalZdjecia = ({ imageId, onClose, show }) => {
  const renderImage = (imageId) => {
    switch (imageId) {
      case 'skalne_miasta_1':
        return (
          <StaticImage
            src="../../../images/Skalne miasto.jpeg"
            alt="Skalne Miasta"
            width={900}
            placeholder="blurred"
            layout="constrained"
          />
        );
      case 'skalne_miasta_2':
        return (
          <StaticImage
            src="../../../images/Skalne miasto2.jpeg"
            alt="Skalne Miasta"
            width={900}
            placeholder="blurred"
            layout="constrained"
          />
        );
      case 'bledne_skaly_1':
        return (
          <StaticImage
            src="../../../images/bledne_skaly1_skalne_miasta.jpg"
            alt="Błędne Skały"
            width={1500}
            placeholder="blurred"
            layout="constrained"
          />
        );
      case 'szczeliniec_wielki_1':
        return (
          <StaticImage
            src="../../../images/szczeliniec_wielki.jpg"
            alt="Szczeliniec Wielki"
            width={900}
            placeholder="blurred"
            layout="constrained"
          />
        );
      case 'szczeliniec_wielki_2':
        return (
          <StaticImage
            src="../../../images/szczeliniec_wielki2.jpg"
            alt="Szczeliniec Wielki"
            width={900}
            placeholder="blurred"
            layout="constrained"
          />
        );
      case 'szczeliniec_1':
        return (
          <StaticImage
            src="../../../images/Szczeliniec.jpg"
            alt="Szczeliniec"
            width={900}
            placeholder="blurred"
            layout="constrained"
          />
        );

      case 'karkonosze_1':
        return (
          <StaticImage
            src="../../../images/karkonosze.jpeg"
            alt="Karkonosze"
            width={900}
            placeholder="blurred"
            layout="constrained"
          />
        );
      case 'karkonosze_2':
        return (
          <StaticImage
            src="../../../images/karkonosze2.jpeg"
            alt="Karkonosze"
            width={900}
            placeholder="blurred"
            layout="constrained"
          />
        );
      case 'karkonosze_3':
        return (
          <StaticImage
            src="../../../images/sniezka.jpg"
            alt="Śnieżka"
            width={900}
            placeholder="blurred"
            layout="constrained"
          />
        );
      case 'karkonosze_4':
        return (
          <StaticImage
            src="../../../images/sniezka2.jpg"
            alt="Śnieżka"
            width={900}
            placeholder="blurred"
            layout="constrained"
          />
        );

      case 'sowie_1':
        return (
          <StaticImage
            src="../../../images/gory_sowie.jpeg"
            alt="Góry Sowie"
            width={900}
            placeholder="blurred"
            layout="constrained"
          />
        );
      case 'sowie_2':
        return (
          <StaticImage
            src="../../../images/gory_sowie2.jpg"
            alt="Góry Sowie"
            width={900}
            placeholder="blurred"
            layout="constrained"
          />
        );

      case 'zamki_1':
        return (
          <StaticImage
            src="../../../images/zamek_chojnik.jpg"
            alt="Zamek Chojnik"
            width={900}
            placeholder="blurred"
            layout="constrained"
          />
        );
      case 'zamki_2':
        return (
          <StaticImage
            src="../../../images/zamek_czocha.jpg"
            alt="Zamek Czocha"
            width={900}
            placeholder="blurred"
            layout="constrained"
          />
        );
      case 'zamki_3':
        return (
          <StaticImage
            src="../../../images/zamek_ksiaz.jpg"
            alt="Zamek Książ"
            width={900}
            placeholder="blurred"
            layout="constrained"
          />
        );
      case 'zamki_4':
        return (
          <StaticImage
            src="../../../images/wycieczki_miasta_warowne.jpg"
            alt="Miasta warowne"
            width={900}
            placeholder="blurred"
            layout="constrained"
          />
        );

      case 'aktywne_1':
        return (
          <StaticImage
            src="../../../images/wycieczki_biegowe.jpg"
            alt="Biegowe"
            width={900}
            placeholder="blurred"
            layout="constrained"
          />
        );
      case 'aktywne_2':
        return (
          <StaticImage
            src="../../../images/wycieczki_biegowe_2.jpg"
            alt="Biegowe"
            width={900}
            placeholder="blurred"
            layout="constrained"
          />
        );

      default:
        return null;
    }
  };

  return (
    <Modal show={show} onHide={onClose} size="xl" centered>
      <Modal.Body>
        <div className={'modalImageContainer'}>
          {renderImage(imageId)}
          <Button className={'modal_close_button'} variant="danger" onClick={onClose}>
            X
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalZdjecia;
