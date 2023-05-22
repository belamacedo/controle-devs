import { cva } from 'class-variance-authority';

export const logoContainer = cva(
  'flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'
);

export const logoSection = cva('flex flex-shrink-0 items-center');

export const logo = cva('h-11 w-auto lg:block dark:hidden');

export const logoDark = cva(' hidden h-11 w-auto dark:block ');
