import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { Button } from '@controle-devs-ui/react';
import * as Styles from './styles';

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === 'dark';

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <Button
      className={Styles.button()}
      intent='transparent'
      onClick={toggleDarkMode}
      icon={isDarkMode ? <MoonIcon /> : <SunIcon />}
    />
  );
};

export default DarkModeToggle;
