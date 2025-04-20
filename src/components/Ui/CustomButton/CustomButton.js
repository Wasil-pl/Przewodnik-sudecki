import React from 'react';
import * as styles from './CustomButton.module.scss';
import { Button } from 'react-bootstrap';

const CustomButton = ({ text, link, variant = '', onClick }) => {
  return (
    <Button onClick={onClick} href={link} variant="outline" className={`${styles.button} ${styles[variant]}`}>
      {text}
    </Button>
  );
};

export default CustomButton;
