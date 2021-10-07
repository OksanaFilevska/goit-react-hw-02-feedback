import React from 'react';

import s from './FeedbackOptions.module.css';

import Section from '../Section';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Section title="Please leave feedback">
    <div className={s.section}>
      {options.map((option, idx) => (
        <button
          className={s.btn}
          key={idx}
          type="button"
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  </Section>
);

export default FeedbackOptions;