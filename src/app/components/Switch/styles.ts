import { cva } from 'class-variance-authority';

export const div = cva('flex items-center');
export const label = cva('text-black text-[15px] leading-none pr-[15px]');

export const switchRoot = cva(
  'w-[42px] h-[25px] bg-blackA9 rounded-full relative shadow-[0_2px_10px] shadow-blackA7 focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-black outline-none cursor-default'
);

export const switchThumb = cva(
  'block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA7 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]'
);
