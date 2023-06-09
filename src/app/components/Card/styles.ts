import { cva } from "class-variance-authority";

export const container = cva(
  "max-w-sm items-center justify-center w-full bg-white dark:bg-gray-900 hover:bg-gray-100  dark:hover:bg-gray-800 rounded overflow-hidden shadow-lg px-6 py-4"
);
export const actions = cva("flex justify-end pb-4");

export const EditAndDeleteButtons = cva(
  "  dark:text-blue-700 dark:hover:text-blue-600 font-semibold p-1 "
);

export const EditAndDeleteIcons = cva(
  "w-5 h-5 inline-block hover:text-purple-600 text-primary "
);

export const imageContainer = cva(
  " mx-auto h-32 w-32 rounded-full object-cover border-2 p-1 border-primary dark:border-blue-700"
);

export const imageContent = cva("h-full w-full rounded-full border-white");

export const title = cva(
  "text-center text-primary dark:text-blue-700 font-bold text-xl mb-2 pt-4"
);
export const children = cva(
  "text-gray-700 dark:text-gray-200 text-center text-base"
);

export const skillsContent = cva(
  "flex flex-wrap justify-center px-6 pt-4 pb-2"
);

export const skills = cva(
  " bg-gray-200  dark:bg-gray-950 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2"
);

export const moreDetails = cva("flex justify-end m-4");
