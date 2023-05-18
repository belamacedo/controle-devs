import React from 'react';
import { ButtonProps } from './styles';
import * as Styles from './styles';

export const Button = ({
  text,
  intent,
  shape,
  size,
  imageSrc,
  ...props
}: ButtonProps) => {
  return (
    <button {...props} className={Styles.button({ intent, shape, size })}>
      {imageSrc && (
        <img
          src={imageSrc}
          alt='Avatar do usuário'
          className={Styles.buttonImage()}
        />
      )}
      {text}
    </button>
  );
};
