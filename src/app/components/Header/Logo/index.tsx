import React from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

import LogoLight from '../../../../assets/viceri-seidor-logo.svg';
import LogoDark from '../../../../assets/viceri-seidor-logo-dark.svg';

import * as Styles from './styles';

const Logo = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div className={Styles.logoContainer()}>
      <div className={Styles.logoSection()}>
        <Link href='/'>
        {isDarkMode ? (
          <LogoDark className={Styles.logoDark()} />
        ) : (
          <LogoLight className={Styles.logo()} />
        )}
        </Link>
      </div>
    </div>
  );
};

export default Logo;
