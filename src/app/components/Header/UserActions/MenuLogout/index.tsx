import React, { useState } from 'react';
import Image from 'next/image';

import UserAvatar from '../../../../../assets/user-avatar.png';

import * as Styles from './styles';

const MenuLogout = () => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItemClassName = `${
    isActive ? Styles.menuItemActive() : ''
  } ${Styles.menuItem()}`;

  return (
    <div className={Styles.menu()}>
      <div>
        <button className={Styles.menuButton()} onClick={handleOpenMenu}>
          <Image
            src={UserAvatar}
            className={Styles.menuImg()}
            alt='Foto do usuário'
          />
        </button>
      </div>
      {isOpen && (
        <div className={Styles.menuItems()}>
          <a
            href='#'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={menuItemClassName}
          >
            Sair
          </a>
        </div>
      )}
    </div>
  );
};

export default MenuLogout;
