

import PropTypes from 'prop-types';
import css from './Statistics.module.css'
import React from 'react';


const Statistics = ({ good, neutral, bad, sum, positiveFeedback }) => {
    return (
      <div>
            <ul className={css.feedList}>
                <li>
         <p >Good: {good}</p>
        </li>
        <li>
           <p>Neutral: {neutral}</p>
        </li>
        <li>
           <p>Bad: {bad}</p>
        </li>
        <li>
           <p>Total: {sum}</p>
        </li>
        <li>
          <p>Positive feedback:{positiveFeedback}% </p>
        </li>
            </ul>
      </div>
    
        
    
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  sum: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics
