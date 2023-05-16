'use client';
import React from 'react';
import * as CheckboxInput from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import * as Styles from './styles';

interface Props {
  text: string;
}
const Checkbox = ({ text, ...props }: Props) => (
  <CheckboxInput.Root {...props} className={Styles.checkboxRoot()}>
    <div className={Styles.inputDiv()}>
      <CheckboxInput.Indicator>
        <CheckIcon />
      </CheckboxInput.Indicator>
    </div>
    <span className={Styles.span()}>{text}</span>
  </CheckboxInput.Root>
);

export default Checkbox;
