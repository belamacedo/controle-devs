"use client";
import React, { ReactNode } from "react";
import { Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@controle-devs-ui/react";

import * as Styles from "./styles";

export interface CardProps {
  title: ReactNode | string;
  children: ReactNode;
  image: string;
  skills: string[];
  onClick: () => void;
  onChange: () => void;
  onDelete: () => void;
}
export const Card = ({
  title,
  children,
  image,
  skills,
  onChange,
  onDelete,
  onClick,
}: CardProps) => (
  <div className={Styles.container()} onClick={onClick}>
    <div className={Styles.actions()}>
      <Button
        className={Styles.EditAndDeleteButtons()}
        onClick={onChange}
        icon={<Pencil2Icon className={Styles.EditAndDeleteIcons()} />}
      ></Button>
      <Button
        className={Styles.EditAndDeleteButtons()}
        onClick={onDelete}
        icon={<TrashIcon className={Styles.EditAndDeleteIcons()} />}
      ></Button>
    </div>
    <div className={Styles.imageContainer()}>
      <img className={Styles.imageContent()} alt="profile" src={image}></img>
    </div>

    <div className={Styles.title()}>{title}</div>
    <div className={Styles.children()}>{children}</div>

    <div className={Styles.skillsContent()}>
      {skills?.map((skill) => (
        <span key={skill} className={Styles.skills()}>
          {skill}
        </span>
      ))}
    </div>
  </div>
);
