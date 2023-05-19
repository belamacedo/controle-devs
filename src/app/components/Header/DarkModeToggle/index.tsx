import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';

import { Button } from '../../Button';

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === 'dark';

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <Button
      intent='transparent'
      shape='icon'
      onClick={toggleDarkMode}
      icon={isDarkMode ? <MoonIcon /> : <SunIcon />}
    />
  );
};

export default DarkModeToggle;
