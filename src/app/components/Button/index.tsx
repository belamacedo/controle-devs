'use client';
import React from 'react';
import * as Styles from './styles';

interface Props {
  text: string;
}

const Button = ({ text, ...props }: Props) => (
  <button {...props} className={Styles.button()}>
    {text}
  </button>
);

export default Button;
