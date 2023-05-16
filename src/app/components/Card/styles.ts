import { cva } from 'class-variance-authority';

export const width = cva('max-w-full rounded overflow-hidden shadow-lg');

export const padding = cva('px-6 py-4');

export const title = cva('font-bold text-xl mb-2');

export const children = cva('text-gray-700 text-base');
