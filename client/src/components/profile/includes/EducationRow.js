import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const EducationRow = ({ education }) => {
  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description
  } = education;

  return (
    <Fragment>
      <h3>{school}</h3>
      <p>
        <Moment format={'YYYY/MM/DD'}>{from}</Moment> -{' '}
        {current === true ? (
          ' Present'
        ) : (
          <Moment format={'YYYY/MM/DD'}>{to}</Moment>
        )}
      </p>
      <p>
        <strong>Degree: </strong>
        {degree}
      </p>
      <p>
        <strong>Field Of Study: </strong>
        {fieldofstudy}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
    </Fragment>
  );
};

EducationRow.propTypes = {
  education: PropTypes.object.isRequired
};

export default EducationRow;
