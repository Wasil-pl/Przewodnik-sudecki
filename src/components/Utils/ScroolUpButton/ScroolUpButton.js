import React, { useEffect, useState } from 'react';
import * as styles from './ScroolUpButton.module.scss';
import { Container } from 'react-bootstrap';
import { ArrowUpCircleFill } from 'react-bootstrap-icons';

const ScroolUpButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (window === undefined) return;
    const handleScrollButtonVisibility = () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener('scroll', handleScrollButtonVisibility);

    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      {showButton && (
        <button className={styles.scroll_up_button} onClick={handleScrollToTop} aria-label="scroolUp">
          <ArrowUpCircleFill />
        </button>
      )}
    </Container>
  );
};

export default ScroolUpButton;
