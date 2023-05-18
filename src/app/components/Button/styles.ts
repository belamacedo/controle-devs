import { ButtonHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

export const button = cva(
  'transition ease-out duration-100 transform rounded-md h-8 w-40',
  {
    variants: {
      intent: {
        primary:
          'bg-purple-700 text-white hover:bg-violet-600 hover:text-white focus:ring-white focus:ring-offset-2 ',

        secondary:
          'bg-transparent border-indigo-700  border-2 text-black  dark:text-white hover:bg-violet-600  hover:text-white focus:ring-white focus:ring-offset-2 ',
      },
      size: {
        small: ['text-sm'],
        medium: ['text-base'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  text: string;
}
