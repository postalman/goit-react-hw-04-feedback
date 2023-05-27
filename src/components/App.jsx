import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Section } from 'components/Sections';
import { ContainerCSS } from 'components/Styles.styled';

import React from 'react';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increment = e => {
    this.setState(prevState => ({
      [e.target.textContent]: prevState[e.target.textContent] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return (
      <ContainerCSS>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.increment}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
        {totalFeedback === 0 ? (
            <p>There is no feedback yet.</p>
          ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          ></Statistics>
          )}
        </Section>
      </ContainerCSS>
    );
  }
}
