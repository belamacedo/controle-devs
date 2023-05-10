'use client';
import React from 'react';
import * as Label from '@radix-ui/react-label';

interface Props {
  label: string;
}

const Input = ({ label }: Props) => (
  <div className='flex flex-wrap items-center gap-[15px] px-5'>
    <Label.Root
      className='text-[15px] font-medium leading-[35px] text-black'
      htmlFor='firstName'
    >
      {label}
    </Label.Root>
    <input
      className='bg-blackA5 shadow-blackA9 inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-clack shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9'
      type='text'
      id='firstName'
    />
  </div>
);

export default Input;
