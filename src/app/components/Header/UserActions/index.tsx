import React from 'react';
import MenuLogout from './MenuLogout';

import AddUser from './AddUser';
import * as Styles from './styles';

const UserActions = () => (
  <div className={Styles.container()}>
    <AddUser />
    <MenuLogout />
  </div>
);

export default UserActions;
