import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import Spinner from '../layout/Spinner';

// Actions
import { getAllProfiles } from '../../actions/profile';
import ProfileItem from './includes/ProfileItem';

const Profiles = ({ profile: { profiles, loading }, getAllProfiles }) => {
  useEffect(() => {
    getAllProfiles();
  }, [getAllProfiles]);

  const profileItems = profiles.map(profile => {
    return <ProfileItem key={profile._id} profile={profile} />;
  });

  return loading && profiles === null ? (
    <Fragment>
      <Spinner />
    </Fragment>
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Developers</h1>
      <p className='lead'>
        <i className='fab fa-connectdevelop' /> Browse and connect with
        developers
      </p>
      <div className='profiles'>
        {profileItems.length > 0 ? profileItems : <h4>No Profiles found...</h4>}
      </div>
    </Fragment>
  );
};

Profiles.propTypes = {
  getAllProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getAllProfiles }
)(Profiles);
