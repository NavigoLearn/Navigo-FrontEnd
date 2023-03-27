import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const RoadmapPreview = ({
  id,
  progress,
  hasProgressBar,
  title,
  description,
  estimatedTime,
  numberOfNodes,
}) => {
  // Render progress bar if progress data is available
  const progressBar = progress !== undefined && (
    <div className='progressBarContainer'>
      <div className='progressBar' style={{ width: `${progress}%` }} />
    </div>
  );

  return (
    <div className='roadmapPreview'>
      {/* Left section of the preview */}
      <div className='rectangle13'>
        {/* Render ID only if available */}
        {/* {id && <span className='roadmapId'>ID: {id}</span>} */}
        <h3 className='previewTitle'>{title}</h3>
        <p className='previewDescription'>{description}</p>
        <span className='estimatedTime'>
          Estimated time to completion: {estimatedTime} hours
        </span>
        <span className='numberOfNodes'>Number of Nodes: {numberOfNodes}</span>
        {/* Render progress bar only if available */}
        {hasProgressBar && progressBar}
      </div>

      {/* Right section of the preview */}
      <div className='rectangle8'>
        <button className='explore'>Explore</button>
      </div>
    </div>
  );
};

// Validate prop types to prevent unexpected data types
RoadmapPreview.propTypes = {
  id: PropTypes.number.isRequired,
  progress: PropTypes.number,
  hasProgressBar: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  estimatedTime: PropTypes.number.isRequired,
  numberOfNodes: PropTypes.number.isRequired,
};

export default RoadmapPreview;
