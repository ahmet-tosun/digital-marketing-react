import React from 'react';

import Logo from '../Logo/Logo';
import { Menu } from '../Menu';
import { Button } from '../UI';

import styles from './header.module.scss';

function Header({ menuItem }) {
  return (
    <header className={styles.header}>
      <Logo />
      <div style={{ marginLeft: '120px' }}>
        <Menu menuItem={menuItem} />
      </div>
      <div style={{ marginLeft: 'auto' }}>
        <Button text='GET IN TOUCH' theme='primary' />
      </div>
    </header>
  );
}

export default Header;
