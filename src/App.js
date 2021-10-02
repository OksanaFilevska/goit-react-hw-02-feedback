import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Container from './components/Container/Container';

import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';

class App extends Component {
  static defaultProps = {};

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = name => {
    this.setState({ [name]: this.state[name] + 1 });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }

  render() {
    const keys = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <FeedbackOptions options={keys} onLeaveFeedback={this.handleFeedback} />
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Container>
    );
  }
}

export default App;
