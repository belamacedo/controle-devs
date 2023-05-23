import { ButtonHTMLAttributes, ReactElement, SVGProps } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

export const button = cva(
  'transition ease-out duration-100 transform font-semibold ',
  {
    variants: {
      intent: {
        primary:
          'bg-violet-700 text-white hover:bg-violet-600  focus:ring-white focus:ring-offset-2 rounded-md ',

        secondary:
          'bg-transparent border-indigo-700 hover:text-white border-2 text-indigo-700 dark:text-white hover:bg-violet-600  focus:ring-white focus:ring-offset-2  rounded-md h-8 w-40',
        menuButton:
          'rounded-full w-8 flex bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800',
        transparent: ' rounded-s-sm bg-transparent w-2',
      },
      size: {
        small: ['text-sm h-8 w-28 '],
        medium: ['text-base h-8 w-40 '],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
  },
);

export const buttonImage = cva('h-8 w-8 rounded-full');
export const buttonIcon = cva(
  'p-2rounded-lg text-black dark:text-white hover:text-neutral-700 dark:hover:text-gray-100',
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  text?: string;
  imageSrc?: string;
  alt?: string;
  icon?: ReactElement<SVGProps<SVGSVGElement>>;
}
