import { ButtonHTMLAttributes, ReactElement, SVGProps } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

export const button = cva('transition ease-out duration-100 transform ', {
  variants: {
    intent: {
      primary:
        'bg-purple-700 text-white hover:bg-violet-600  focus:ring-white focus:ring-offset-2 ',

      secondary:
        'bg-transparent border-indigo-700 hover:text-white border-2 text-black  dark:text-white hover:bg-violet-600  focus:ring-white focus:ring-offset-2  ',
      menuButton:
        'flex bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800',
      transparent: 'bg-transparent',
    },
    size: {
      small: ['text-sm'],
      medium: ['text-base'],
    },
    shape: {
      rectangular: 'rounded-md h-8 w-40',
      circular: 'rounded-full',
      icon: 'rounded-s-sm',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
    shape: 'rectangular',
  },
});

export const buttonImage = cva('h-8 w-8 rounded-full');
export const buttonIcon = cva(
  'p-2rounded-lg text-sky-950 hover:text-sky-900 dark:text-gray-300 dark:hover:text-white'
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  text?: string;
  imageSrc?: string;
  alt?: string;
  icon?: ReactElement<SVGProps<SVGSVGElement>>;
}
