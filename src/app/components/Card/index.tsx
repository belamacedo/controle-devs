'use client';
import React, { ReactNode } from 'react';
import { Pencil2Icon, TrashIcon } from '@radix-ui/react-icons';

import { Button } from '@controle-devs-ui/react';

import * as Styles from './styles';

export interface CardProps {
  title: ReactNode | string;
  subtitle: string;
  image: string;
  skills: string[];
  className?: string;
  moreDetails?: boolean;
  onClick: () => void;
  onChange: () => void;
  onDelete: () => void;
}
export const Card = ({
  title,
  subtitle,
  image,
  skills,
  onChange,
  onDelete,
  onClick,
  moreDetails,
  className,
}: CardProps) => {
  const skillsContainerHeight = skills.length > 6 ? '28' : 'auto';

  return (
    <div className={`${Styles.container()} ${className}`}>
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
      <div className={Styles.content()}>
        <div className={Styles.imageContainer()}>
          <img className={Styles.imageContent()} alt='profile' src={image} />
        </div>

        <div className={Styles.title()}>{title}</div>
        <div className={Styles.subtitle()}>{subtitle}</div>

        <div
          className={`${Styles.skillsContainer()} h-${skillsContainerHeight}`}
        >
          <div className={Styles.skillsContent()}>
            {skills?.map((skill) => (
              <span key={skill} className={Styles.skills()}>
                {skill}
              </span>
            ))}
          </div>
        </div>
        {moreDetails && (
          <div className={Styles.moreDetails()}>
            <Button size={'small'} text='Mais detalhes' onClick={onClick} />
          </div>
        )}
      </div>
    </div>
  );
};
