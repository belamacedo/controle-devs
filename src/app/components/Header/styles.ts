import { cva } from 'class-variance-authority';

export const marginPadding = cva('mx-auto max-w-full px-2 sm:px-6 lg:px-8');

export const relativeFlex = cva(
  'relative flex h-16 items-center justify-between'
);

export const flex = cva(
  'flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'
);

export const flexShrink = cva('flex flex-shrink-0 items-center');

export const absoluteInset = cva(
  'absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'
);

export const addUserButton = cva(
  'hover:delay-100 rounded-md h-8 w-40 bg-purple-700 p-1 text-white hover:bg-violet-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 '
);

export const logo = cva('hidden h-11 w-auto lg:block');

export const menu = cva('relative ml-3');

export const menuButton = cva(
  'flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
);

export const menuImg = cva('h-8 w-8 rounded-full');

export const menuItems = cva(
  'absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
);

export const active = {
  activeItem: cva('bg-gray-100'),
  notActiveItem: cva('block px-4 py-2 text-sm text-gray-700'),
};
