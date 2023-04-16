import React from 'react';
import PropTypes from 'prop-types';

export default (WrappedComponent) => {
  const HOCComptonent = ({ ...props }) => <WrappedComponent {...props} />;

  HOCComptonent.propTypes = {};

  return HOCComptonent;
};
