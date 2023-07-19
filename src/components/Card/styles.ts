import { cva } from 'class-variance-authority';

export const container = cva(
  'grid grid-cols-1 pt-8 w-1/4  bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 rounded overflow-hidden shadow-lg px-6 py-4',
);
export const actions = cva('flex justify-end pb-4');

export const EditAndDeleteButtons = cva(
  'dark:text-blue-700 dark:hover:text-blue-600 font-semibold p-1',
);

export const EditAndDeleteIcons = cva(
  'w-5 h-5 inline-block hover:text-purple-600 text-purple-700 dark:text-blue-700',
);

export const content = cva('flex flex-col w-full');

export const moreDetails = cva('flex justify-end mb-4 mt-4 px-4');
