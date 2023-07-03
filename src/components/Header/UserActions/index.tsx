import React from 'react';
import MenuLogout from './MenuLogout';
import AddUser from './AddUser';
import * as Styles from './styles';
import DarkModeToggle from '../DarkModeToggle';

const UserActions = () => (
  <div className={Styles.container()}>
    <div className={Styles.actionContainer()}>
      <div className={Styles.actionItem()}>
        <AddUser />
      </div>
      <MenuLogout />
    </div>
  </div>
);

export default UserActions;
