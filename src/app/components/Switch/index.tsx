'use client';
import React from 'react';
import * as SwitchUI from '@radix-ui/react-switch';
import * as Styles from './styles';

interface Props {
  label: string;
}

const Switch = ({ label }: Props) => (
  <form>
    <div
      className={Styles.container()}
    >
      <label
        className='text-black text-[15px] leading-none pr-[15px]'
        htmlFor='airplane-mode'
      >
        {label}
      </label>
      <SwitchUI.Root
        className={Styles.switchRoot()}
        id='airplane-mode'
      >
        <SwitchUI.Thumb className='block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA7 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]' />
      </SwitchUI.Root>
    </div>
  </form>
);

export default Switch;
