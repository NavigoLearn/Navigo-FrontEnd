import React from 'react';
import { useStore } from '@nanostores/react';

import user from 'src/pages/stores/userStore';
import profileData from '../components/data/profile_info.json';
import roadmapProgressData from '../components/data/roadmap_progress.json';
import roadmapDescriptionData from '../components/data/roadmap_description.json';

import PreviewSpace from '../components/PreviewSpace.jsx';
import RoadmapPreview from '../components/RoadmapPreview.jsx';

import { MAX_PREVIEWS } from '../../constants';


const Profile = () => {
  // Use the user store from Nanostores
  const userData = useStore(user);

  // Log the user data received from the store
  console.log('in react component', userData);

  // Function to render roadmap previews
  const renderRoadmapPreviews = (count, data, progressData = null) => {
    const previews = [];

    // Loop through the roadmap data array to create previews
    for (let i = 0; i < count; i++) {
      const roadmapData = data[i];

      // If there is no roadmap data for this index, continue to next iteration
      if (!roadmapData) {
        continue;
      }

      // Get the progress data for the current roadmap, if provided
      const progress = progressData ? progressData[i]?.progressBar : undefined;

      // Push the RoadmapPreview component to previews array
      previews.push(
        <RoadmapPreview
          key={i}
          id={roadmapData.id}
          progress={progress}
          hasProgressBar={!!progressData}
          title={roadmapData.title}
          description={roadmapData.description}
          estimatedTime={roadmapData.estimatedTime}
          numberOfNodes={roadmapData.numberOfNodes}
        />
      );
    }

    return previews;
  };

  return (
    // Profile container div
    <div className='Profile'>
      {/* Left preview space */}
      <PreviewSpace className='previewSpaceLeft'>
        {renderRoadmapPreviews(
          // Number of previews to show
          Math.min(MAX_PREVIEWS, roadmapProgressData.length),
          // Roadmap data to use for previews
          roadmapProgressData,
          // Progress data to show progress bars, if provided
          roadmapProgressData
        )}
      </PreviewSpace>

      {/* Right preview space */}
      <PreviewSpace className='previewSpaceRight'>
        {renderRoadmapPreviews(
          // Number of previews to show
          Math.min(profileData.roadmap_previews, MAX_PREVIEWS),
          // Roadmap data to use for previews
          roadmapDescriptionData
        )}
      </PreviewSpace>

      {/* Feedback button */}
      <button className='feedbackButton'>Feedback</button>

      {/* Rectangles */}
      <div className="rectangle1"></div>
      <div className="rectangle2" />

      {/* Profile picture */}
      <div className="profile-pic">
        <img src={profileData.profilePicture} alt="Profile" />
      </div>

      {/* Profile name */}
      <div className="profile-field">
        <span>{profileData.profileName}</span>
      </div>

      {/* Completed roadmaps */}
      <div className='completed-roadmaps'>
        <span>Completed roadmaps: </span>
        <span>{profileData.completed_roadmaps}</span>
      </div>

      {/* Created roadmaps */}
      <div className='created-roadmaps'>
        <span>Created roadmaps: </span>
        <span>{profileData.created_roadmaps}</span>
      </div>

      {/* In progress roadmaps */}
      <div className='inprogress-roadmaps'>
        <span>In progress roadmaps </span>
      </div>

      {/* Your roadmaps */}
      <div className='yourRoadmapsText'>
        <span>Your roadmaps </span>
      </div>
    </div>
  );
};

export default Profile;