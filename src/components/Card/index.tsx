'use client';
import React, { ReactNode } from 'react';
import { Pencil2Icon, TrashIcon } from '@radix-ui/react-icons';
import { Button } from '@controle-devs-ui/react';

import * as Styles from './styles';

export interface CardProps {
  className?: string;
  moreDetails?: boolean;
  children: ReactNode;
  onClick: () => void;
  onChange: () => void;
  onDelete: () => void;
}
export const Card = ({
  onChange,
  onDelete,
  onClick,
  moreDetails,
  className,
  children,
}: CardProps) => {
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
        {children}
        {moreDetails && (
          <div className={Styles.moreDetails()}>
            <Button size={'small'} text="Mais detalhes" onClick={onClick} />
          </div>
        )}
      </div>
    </div>
  );
};
