import { cva } from 'class-variance-authority';

export const container = cva(
  'absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'
);

export const addButton = cva(
  'transition ease-out duration-100 transform rounded-md h-8 w-40 bg-purple-700 p-1 text-white hover:bg-violet-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 '
);
