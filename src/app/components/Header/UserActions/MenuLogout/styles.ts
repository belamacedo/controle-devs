import { cva } from 'class-variance-authority';

export const menu = cva('relative ml-3');

export const menuButton = cva(
  'flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
);

export const menuImg = cva('h-8 w-8 rounded-full');

export const menuItems = cva(
  'transition ease-out duration-100 transform absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
);

export const menuItem = cva('block px-4 py-2 text-sm text-gray-700');

export const menuItemActive = cva('bg-gray-100');
