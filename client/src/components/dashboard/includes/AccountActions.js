import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeAccount } from '../../../actions/profile';

const AccountActions = ({ removeAccount }) => {
  return (
    <Fragment>
      <div className='my-2'>
        <button className='btn btn-danger' onClick={() => removeAccount()}>
          <i className='fas fa-user-minus' />
          Delete My Account
        </button>
      </div>
    </Fragment>
  );
};

AccountActions.propTypes = {
  removeAccount: PropTypes.func.isRequired
};

export default connect(
  null,
  { removeAccount }
)(AccountActions);
