

import PropTypes from 'prop-types';
import React from 'react';
import css from './Section.module.css'

const Section = ({ title, children }) => {
  return (
    <section>
          <h2 className={css.titles}>{title}</h2>
          {children}
        </section>
    );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section