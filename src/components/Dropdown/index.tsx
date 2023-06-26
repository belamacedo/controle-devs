'use client';
import React from 'react';
import { DotsVerticalIcon } from '@radix-ui/react-icons';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Button } from '../Button';
import * as Styles from './styles';

export const Dropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button
          icon={<DotsVerticalIcon />}
          aria-label="Customise options"
          className={Styles.button()}
        />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={Styles.dropdownContent()}
          sideOffset={5}
        >
          <DropdownMenu.Item className={Styles.dropdownItem()}>
            Editar
          </DropdownMenu.Item>
          <DropdownMenu.Item className={Styles.dropdownItem()}>
            Excluir
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
