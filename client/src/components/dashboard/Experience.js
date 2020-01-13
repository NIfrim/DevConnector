import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Components
import ExperienceTable from './includes/ExperienceTable';

const Experience = ({ experience }) => {
  return (
    <Fragment>
      <h2 className='my-2'>Experience Credentials</h2>
      <ExperienceTable experience={experience} />
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired
};

export default Experience;
