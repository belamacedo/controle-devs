import { cva } from 'class-variance-authority';

export const div = cva('flex flex-wrap items-center gap-[15px] px-5');
export const label = cva('text-[15px] font-medium leading-[35px] text-black');
export const input = cva(
  'bg-blackA5 shadow-blackA9 inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-clack shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9'
);
