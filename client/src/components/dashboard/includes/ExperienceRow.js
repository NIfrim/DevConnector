import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';

// Actions
import { removeExperience } from '../../../actions/profile';

const ExperienceRow = ({ experience, removeExperience }) => {
  const { _id, company, title, from, to, current } = experience;

  return (
    <Fragment>
      <tr>
        <td>{company}</td>
        <td className='hide-sm'>{title}</td>
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
            onClick={() => removeExperience(_id)}
            className='btn btn-danger'
          >
            Delete
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

ExperienceRow.propTypes = {
  removeExperience: PropTypes.func.isRequired,
  experience: PropTypes.object.isRequired
};

export default connect(
  null,
  { removeExperience }
)(ExperienceRow);
