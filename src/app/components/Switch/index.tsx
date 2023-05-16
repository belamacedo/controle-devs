'use client';
import React from 'react';
import * as SwitchUI from '@radix-ui/react-switch';
import * as Styles from './styles';

interface Props {
  label: string;
}

const Switch = ({ label }: Props) => (
 
    <div className={Styles.container()}>
      <label className={Styles.label()} htmlFor='airplane-mode'>
        {label}
      </label>
      <SwitchUI.Root className={Styles.switchRoot()} id='airplane-mode'>
        <SwitchUI.Thumb className={Styles.switchThumb()} />
      </SwitchUI.Root>
    </div>

);

export default Switch;
