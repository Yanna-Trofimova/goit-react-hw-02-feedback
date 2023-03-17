import PropTypes from 'prop-types';
import React from 'react';
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onBtnClick }) => {
  return (
    <div>
      <div>
        {options.map(option => (
          <button className={css.feedBtn} type="button" key={option} name={option} onClick={onBtnClick} >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions