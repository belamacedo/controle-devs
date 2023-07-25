import { cva } from 'class-variance-authority';
export const imageContainer = cva(
  'mx-auto h-32 w-32 rounded-full object-cover border-2 p-1 border-purple-700 dark:border-blue-700',
);

export const imageContent = cva('h-full w-full rounded-full border-white');

export const title = cva(
  'text-center text-purple-700 dark:text-blue-700 font-bold text-xl pt-4',
);

export const subtitle = cva(
  'text-center text-gray-700 dark:text-gray-400 text-sm mb-2',
);

export const skillsContainer = cva(
  'p-1 overflow-y-auto scrollbar-thin rounded h-[100px]',
);

export const skillsContent = cva(
  'flex flex-wrap justify-center px-6 pt-4 pb-2',
);

export const skills = cva(
  'bg-gray-200 dark:bg-gray-950 rounded-full h-8 px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2',
);
