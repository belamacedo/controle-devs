import { cva } from 'class-variance-authority';

export const userDetailsContainer = cva('flex');
export const columnOneContainer = cva('w-2/5 pr-4');
export const columnOneContent = cva('flex flex-col items-center text-sm');
export const imageContainer = cva('flex-shrink-0 mx-auto h-32 w-32 rounded-full object-cover border-2 p-1 border-purple-700 dark:border-blue-700');
export const image = cva('h-full w-full rounded-full border-white');
export const nameJobContainer = cva('ml-4 text-center');
export const fullName = cva('text-2xl font-bold');
export const jobPosition = cva('text-base');
export const bioContainer = cva('p-4');
export const bioText = cva('italic text-left');
export const columnTwoContainer = cva('w-3/5 pl-4');
export const squadContainer = cva('mt-2 flex flex-wrap');
export const squadContent = cva('w-full');
export const squad = cva('text-lg font-bold mb-2');
export const squadSpecsContent = cva('flex justify-start');
export const name = cva('text-sm mr-6');
export const leader = cva('text-sm');
export const textSpan = cva('font-bold');
export const squadMemberContainer = cva('w-full mt-4');
export const membersText = cva('text-lg font-bold');
export const memberNamesContainer = cva('flex flex-wrap mt-2');
export const memberNames = cva('text-sm font-medium bg-purple-500  dark:bg-blue-500 text-white rounded-full px-3 py-1 mr-2 mb-2');
export const hardSkillsContainer =  cva('mt-4');
export const hardSkillsText =  cva('text-lg font-bold');
export const hardSkills =  cva('flex flex-wrap mt-2');
export const hardSkillsItems =  cva('text-sm font-medium bg-purple-700  dark:bg-blue-700 text-white rounded-full px-3 py-1 mr-2 mb-2');


