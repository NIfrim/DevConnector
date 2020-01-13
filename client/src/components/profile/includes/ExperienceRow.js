import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ExperienceRow = ({ experience }) => {
  const { company, title, from, to, current, description } = experience;

  return (
    <Fragment>
      <h3 className='text-dark'>{company}</h3>
      <p>
        <Moment format={'YYYY/MM/DD'}>{from}</Moment> -{' '}
        {current === true ? (
          ' Present'
        ) : (
          <Moment format={'YYYY/MM/DD'}>{to}</Moment>
        )}
      </p>
      <p>
        <strong>Position: </strong>
        {title}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
    </Fragment>
  );
};

ExperienceRow.propTypes = {
  experience: PropTypes.object.isRequired
};

export default ExperienceRow;
