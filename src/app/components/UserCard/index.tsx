'use client';
import React from 'react';
import { Pencil2Icon, TrashIcon } from '@radix-ui/react-icons';
import { Button } from '@controle-devs-ui/react';
import { UserProps } from '@/app/models/User';

import * as Styles from './styles';

export interface CardProps {
  user: UserProps;
  className?: string;
  moreDetails?: boolean;
  onClick: () => void;
  onChange: () => void;
  onDelete: () => void;
}
export const UserCard = ({
  user,
  onChange,
  onDelete,
  onClick,
  moreDetails,
  className,
}: CardProps) => {
  const skillsContainerHeight = user.hardSkills.length > 6 ? '28' : 'auto';

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
          <img
            className={Styles.imageContent()}
            alt='profile'
            src={user.imagePath}
          />
        </div>

        <div className={Styles.title()}>{user.fullName}</div>
        <div className={Styles.subtitle()}>{user.jobPosition}</div>

        <div
          className={`${Styles.skillsContainer()} h-${skillsContainerHeight}`}
        >
          <div className={Styles.skillsContent()}>
            {user.hardSkills?.map((skill) => (
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
