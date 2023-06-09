import { cva } from "class-variance-authority";

export const container = cva("flex flex-1 flex-col gap-4 p-16");
export const backContent = cva(
  "flex items-center gap-1 text-xl leading-relaxed text-gray-800 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-100"
);

export const arrowIcon = cva("h-6 w-6");

export const title = cva(
  "bold leading-none text-3xl text-gray-800 dark:text-gray-300 mb-8"
);
