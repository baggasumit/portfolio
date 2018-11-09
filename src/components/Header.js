import React from 'react';

import githubIcon from '../images/github.svg';
import linkedinIcon from '../images/linkedin.svg';

const Header = () => (
  <header>
    <a href="https://www.linkedin.com/in/baggasumit/">
      <img src={linkedinIcon} alt="LinkedIn Icon" />
    </a>
    <a href="https://github.com/baggasumit">
      <img src={githubIcon} alt="Github Icon" />
    </a>
  </header>
);

export default Header;
