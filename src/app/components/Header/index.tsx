'use client';
import React, { useState } from 'react';

import Logo from '../../../assets/viceri-seidor-logo.svg';

import * as Styles from './styles';

const Header = () => {
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
    <>
      <nav className='bg-slate-50'>
        <div className={Styles.marginPadding()}>
          <div className={Styles.relativeFlex()}>
            <div className={Styles.flex()}>
              <div className={Styles.flexShrink()}>
                <Logo className={Styles.logo()} />
              </div>
            </div>
            <div className={Styles.absoluteInset()}>
              <button className={Styles.addUserButton()}>
                Adicionar usuário
              </button>
              <div className={Styles.menu()}>
                <div>
                  <button
                    className={Styles.menuButton()}
                    onClick={handleOpenMenu}
                  >
                    <Logo className={Styles.menuImg()} alt='' />
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
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
