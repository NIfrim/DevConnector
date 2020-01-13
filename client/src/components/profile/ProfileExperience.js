import React from 'react';
import PropTypes from 'prop-types';

// Components
import ExperienceRow from './includes/ExperienceRow';

const ProfileExperience = ({ experience }) => {
  const expRows = experience.map(exp => {
    return (
      <div key={exp._id}>
        <ExperienceRow experience={exp} />
      </div>
    );
  });

  return (
    <div className='profile-exp bg-white p-2'>
      <h2 className='text-primary'>Experience</h2>
      {expRows}
    </div>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.array.isRequired
};

export default ProfileExperience;
