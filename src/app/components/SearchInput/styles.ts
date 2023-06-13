import { VariantProps, cva } from 'class-variance-authority';

export const container = cva('relative flex items-center');
export const inputStyles = cva(`border  rounded px-4 py-2 pr-10 bg-transparent text-gray-700 text-center`);
export const icon = cva('absolute right-3 text-gray-500')
