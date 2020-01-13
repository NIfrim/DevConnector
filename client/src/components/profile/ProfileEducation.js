import React from 'react';
import PropTypes from 'prop-types';
import EducationRow from './includes/EducationRow';

const ProfileEducation = ({ education }) => {
  const educationList = education.map(edu => {
    return (
      <div key={edu._id}>
        <EducationRow education={edu} />
      </div>
    );
  });

  return (
    <div className='profile-edu bg-white p-2'>
      <h2 className='text-primary'>Education</h2>
      {educationList}
    </div>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired
};

export default ProfileEducation;
