"use client";
import React, { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}
const Card = ({ title, children }: Props) => (
  <div className="max-w-full rounded overflow-hidden shadow-lg">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <div className="text-gray-700 text-base">{children}</div>
    </div>
  </div>
);

export default Card;
