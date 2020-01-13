import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Components
import EducationTable from './includes/EducationTable';

const Education = ({ education }) => {
  return (
    <Fragment>
      <h2 className='my-2'>Education Credentials</h2>
      <EducationTable education={education} />
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired
};

export default Education;
