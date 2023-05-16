'use client';
import React from 'react';
import { DotsVerticalIcon } from '@radix-ui/react-icons';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Styles from './styles';

const Dropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={Styles.button()} aria-label='Customise options'>
          <DotsVerticalIcon />
        </button>
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

export default Dropdown;
