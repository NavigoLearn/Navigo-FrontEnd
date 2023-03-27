import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

/**
 * A container for preview elements
 *
 * @component
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The preview elements to render
 * @param {string} props.className - The additional class name to apply to the container
 */
const PreviewSpace = ({ children, className }) => {
  return (
    <div className={`previewSpace ${className}`}>
      <div className="previewSpace-content">{children}</div>
    </div>
  );
};

PreviewSpace.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default PreviewSpace;
