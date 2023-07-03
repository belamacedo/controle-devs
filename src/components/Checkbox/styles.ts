import { cva } from 'class-variance-authority';

export const checkboxRoot = cva('flex items-center  focus:outline-none');

export const inputDiv = cva(
  'w-4 h-4 text-blue-600 bg-gray-300 border-white rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
);

export const span = cva('ml-2 text-sm text-gray-900 dark:text-gray-300');
