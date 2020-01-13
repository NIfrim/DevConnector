import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Components
import ExperienceRow from './ExperienceRow';

const ExperienceTable = ({ experience }) => {
  const experiencesRows = experience.map(exp => {
    return <ExperienceRow key={exp._id} experience={exp} />;
  });

  return (
    <Fragment>
      <table className='table'>
        <thead>
          <tr>
            <th>Company</th>
            <th className='hide-sm'>Title</th>
            <th>Years</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{experiencesRows}</tbody>
      </table>
    </Fragment>
  );
};

ExperienceTable.propTypes = {
  experience: PropTypes.array.isRequired
};

export default ExperienceTable;
