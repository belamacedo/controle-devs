'use client';
import React from 'react';
import { Pencil2Icon, TrashIcon } from '@radix-ui/react-icons';
import { Button } from '@controle-devs-ui/react';

import { UserProps } from '@/models/User';
import { Option } from '@/models/Option';

import * as Styles from './styles';

export interface CardProps {
  user: UserProps;
}
export const UserCard = ({ user }: CardProps) => {
  const skillsContainerHeight = user.hardSkills.length > 6 ? 'h-28' : 'auto';

  return (
    <>
      <div className={Styles.imageContainer()}>
        <img
          className={Styles.imageContent()}
          alt="profile"
          src={user.imagePath}
        />
      </div>

      <div className={Styles.title()}>{user.fullName}</div>
      <div className={Styles.subtitle()}>{user.jobPosition}</div>

      <div className={`${Styles.skillsContainer()} ${skillsContainerHeight}`}>
        <div className={Styles.skillsContent()}>
          {user.hardSkills?.map((skill: Option) => (
            <span key={skill.value} className={Styles.skills()}>
              {skill.label}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
