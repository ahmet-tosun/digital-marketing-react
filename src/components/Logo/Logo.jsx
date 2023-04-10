import React from 'react';
import LogoSVG from '../../assets/Logo.svg';

function Logo({ link, ...props }) {
  return (
    <a href={link} {...props}>
      <img src={LogoSVG} alt='' />
    </a>
  );
}

export default Logo;
