import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Components
import EducationRow from './EducationRow';

const EducationTable = ({ education }) => {
  const educationRows = education.map(edu => {
    return <EducationRow key={edu._id} education={edu} />;
  });

  return (
    <Fragment>
      <table className='table'>
        <thead>
          <tr>
            <th>School</th>
            <th className='hide-sm'>Degree</th>
            <th>Period</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{educationRows}</tbody>
      </table>
    </Fragment>
  );
};

EducationTable.propTypes = {
  education: PropTypes.array.isRequired
};

export default EducationTable;
