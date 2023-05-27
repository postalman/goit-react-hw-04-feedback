import PropTypes from 'prop-types';
import React from 'react';
import { Notification } from 'components/Notification';
import { StatsCSS } from 'components/Styles.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  total() === 0 ? (
    <Notification message="There is no feedback" />
  ) : (
    <StatsCSS>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total()}</p>
      <p>Positive feeback: {positivePercentage()}%</p>
    </StatsCSS>
  )
);


Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
  };