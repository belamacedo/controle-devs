'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';

import * as Styles from './styles';

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === 'dark';

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <button className={Styles.darkModeButton()} onClick={toggleDarkMode}>
      {isDarkMode ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default DarkModeToggle;
