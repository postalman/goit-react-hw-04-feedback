import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Section } from 'components/Sections';
import { ContainerCSS } from 'components/Styles.styled';
import { useState } from 'react';

import React from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const state = { good, neutral, bad };

  const increment = key => {

    if (key === 'good') {
      setGood(prevGood => prevGood + 1);
    }
    if (key === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    }
    if (key === 'bad') {
      setBad(prevBad => prevBad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };

  const totalFeedback = countTotalFeedback();
  return (
    <ContainerCSS>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={state}
          onLeaveFeedback={increment}
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
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          ></Statistics>
        )}
      </Section>
    </ContainerCSS>
  );
};

export default App;
