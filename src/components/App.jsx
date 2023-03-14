

import React, { Component } from 'react';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hadleClick = e => {
    const { name } = e.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countSumOfFeedbacks() {
    return Object.values(this.state).reduce((acc, currentValue) => {
      return acc + currentValue;
    }, 0);
  }

  countPositiveFeedback() {
    const { good } = this.state;
    return Math.round((good / this.countSumOfFeedbacks()) * 100);
  }

  render() {
    const { good, bad, neutral } = this.state;

    return (
      <>
       
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onBtnClick={this.hadleClick}
          />
        </Section>

        <Section title="Statistics">
          {good === 0 && bad === 0 && neutral === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              sum={this.countSumOfFeedbacks()}
              positiveFeedback={this.countPositiveFeedback()}
            />
          )}
          </Section>
          
      </>
    );
  }
}

export default App