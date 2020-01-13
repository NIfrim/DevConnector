import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';

// Actions
import { removeEducation } from '../../../actions/profile';

const EducationRow = ({ education, removeEducation }) => {
  const { _id, school, degree, from, to, current } = education;

  return (
    <Fragment>
      <tr>
        <td>{school}</td>
        <td className='hide-sm'>{degree}</td>
        <td>
          <Moment format={'YYYY/MM/DD'}>{from}</Moment> -{' '}
          {current === true ? (
            ' Present'
          ) : (
            <Moment format={'YYYY/MM/DD'}>{to}</Moment>
          )}
        </td>
        <td>
          <button
            className='btn btn-danger'
            onClick={() => removeEducation(_id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

EducationRow.propTypes = {
  education: PropTypes.object.isRequired,
  removeEducation: PropTypes.func.isRequired
};

export default connect(
  null,
  { removeEducation }
)(EducationRow);
