import React from 'react';

import s from './Statistics.module.css';
import Section from '../Section';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <Section title="Statistics">
    <div>
      <p className={s.description}>Good: {good}</p>
      <p className={s.description}>Neutral: {neutral}</p>
      <p className={s.description}>Bad: {bad}</p>
      <p className={s.description}>Total: {total}</p>
      <p className={s.description}>Positive feedback: {positivePercentage}%</p>
    </div>
  </Section>
);
export default Statistics;