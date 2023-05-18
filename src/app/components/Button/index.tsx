import React from 'react';
import { ButtonProps } from './styles';
import * as Styles from './styles';

export const Button = ({ text, intent, ...props }: ButtonProps) => {
  return (
    <button {...props} className={Styles.button({ intent })}>
      {text}
    </button>
  );
};
