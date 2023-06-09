import { cva } from "class-variance-authority";

export const container = cva("flex justify-center");

export const formContainer = cva("space-y-8");

export const formContent = cva("grid grid-cols-2");

export const contentLeftFields = cva("w-60 space-y-8");

export const photo = cva("bold text-lg dark:text-white");

export const message = cva("text-red-900");

export const contentRightFields = cva("w-96 justify-end space-y-8");

export const biography = cva("bold text-lg dark:text-white pr-48");

export const biographyInput = cva("h-24 border-2 rounded w-full");

export const userName = cva("bold text-lg dark:text-white pr-48");

export const email = cva("bold text-lg dark:text-white pr-48");

export const description = cva("bold text-lg dark:text-white pr-48");

export const hardSkills = cva("bold text-lg dark:text-white");

export const squad = cva("bold text-lg dark:text-white");
