"use client";
import React from "react";

interface Props {
  text: string;
}

const Button = ({ text, ...props }: Props) => (
  <button
    {...props}
    className="bg-white hover:bg-gray-100 text-gray-500 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
  >
    {text}
  </button>
);

export default Button;
