import React from 'react';
import cl from 'clsx';

import styles from './Button.module.scss';

const Button = ({ text, theme = 'default', rounded = false, ...props }) => {
  return (
    <button
      className={cl(
        styles.button,
        styles[`button-${theme}`],
        rounded && styles[`button-rounded`]
      )}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
