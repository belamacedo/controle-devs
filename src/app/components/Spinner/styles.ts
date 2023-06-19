import { cva } from "class-variance-authority";

export const container = cva("flex justify-center items-center p-16 ");

export const spinner = cva(
  "w-10 h-10 rounded-full animate-spin border-2 border-solid border-violet-700 border-t-transparent"
);
