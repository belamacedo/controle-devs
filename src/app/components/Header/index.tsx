'use client';
import React from 'react';

import UserActions from './UserActions';
import Navbar from './Navbar';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  return (
    <Navbar>
      <DarkModeToggle />
      <UserActions />
    </Navbar>
  );
};

export default Header;
