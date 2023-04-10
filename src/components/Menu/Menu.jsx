import React from 'react';
import styles from './menu.module.scss';

function MenuItem({ item: { name, link } }) {
  return (
    <a className={styles['menu-link']} href={link}>
      {name}
    </a>
  );
}

function Menu({ menuItem }) {
  return (
    <nav className={styles.menu}>
      {menuItem.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </nav>
  );
}

export default Menu;
