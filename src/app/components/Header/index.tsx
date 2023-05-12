'use client';
import React, { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';

import Logo from '../../../assets/viceri-seidor-logo.svg';
import * as Styles from './styles';

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

const Header = () => (
  <>
    <Disclosure as='nav' className='bg-slate-50'>
      {({ open }) => (
        <>
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
                <Menu as='div' className={Styles.menu()}>
                  <div>
                    <Menu.Button className={Styles.menuButton()}>
                      <Logo className={Styles.menuImg()} alt='' />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className={Styles.menuItems()}>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? Styles.menuItemActive() : '',
                              Styles.menuItem()
                            )}
                          >
                            Sair
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  </>
);

export default Header;
