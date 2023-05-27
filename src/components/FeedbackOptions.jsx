import PropTypes from 'prop-types';
import { BtnCSS, FeedbackCSS } from 'components/Styles.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackCSS>
      {Object.keys(options).map((key) => (
        <BtnCSS
          key={key}
          type="button"
          name={key}
          onClick={onLeaveFeedback}
        >
          {key}
        </BtnCSS>
      ))}
    </FeedbackCSS>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  };