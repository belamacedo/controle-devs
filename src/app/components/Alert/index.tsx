'use client';
import React, { ReactNode } from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import * as Styles from './styles';

interface Props {
  title: string;
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

const Alert = ({ title, children, open, onClose }: Props) => (
  <AlertDialog.Root open={open} onOpenChange={onClose}>
    <AlertDialog.Portal>
      <AlertDialog.Overlay className={Styles.overlay()} />
      <AlertDialog.Content className={Styles.content()}>
        <AlertDialog.Title className={Styles.title()}>
          {title}
        </AlertDialog.Title>
        <AlertDialog.Description className={Styles.description()}>
          {children}
        </AlertDialog.Description>
        <div className={Styles.buttonDiv()}>
          <AlertDialog.Cancel asChild>
            <button className={Styles.cancelButton()}>Cancelar</button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <button className={Styles.actionButton()}>
              Sim, desejo deletar o usuário
            </button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

export default Alert;
