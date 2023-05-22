'use client';
import React from 'react';
import * as Label from '@radix-ui/react-label';
import * as Styles from './styles';

interface Props {
  label: string;
}

const Input = ({ label }: Props) => (
  <div className={Styles.div()}>
    <Label.Root className={Styles.label()} htmlFor='firstName'>
      {label}
    </Label.Root>
    <input className={Styles.input()} type='text' id='firstName' />
  </div>
);

export default Input;
