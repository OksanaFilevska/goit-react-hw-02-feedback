import React from 'react';

import s from './Section.module.css';

const Section = ({ children, title }) => (
  <div>
    <h2 className={s.title}>{title}</h2>
    {children}
  </div>
);

export default Section;