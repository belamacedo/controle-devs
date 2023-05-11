"use client";
import React from "react";
import * as CheckboxInput from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

interface Props {
  text: string;
}
const Checkbox = ({ text, ...props }: Props) => (
  <CheckboxInput.Root
    {...props}
    className="flex items-center  focus:outline-none"
  >
    <div className="w-4 h-4 text-blue-600 bg-gray-300 border-white rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
      <CheckboxInput.Indicator>
        <CheckIcon />
      </CheckboxInput.Indicator>
    </div>
    <span className="ml-2 text-sm text-gray-900 dark:text-gray-300">
      {text}
    </span>
  </CheckboxInput.Root>
);

export default Checkbox;
