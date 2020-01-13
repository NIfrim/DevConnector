import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub';
import { getProfileById } from '../../actions/profile';

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  repos,
  auth,
  match
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return loading || profile === null ? (
    <Fragment>
      <Spinner />
    </Fragment>
  ) : (
    <Fragment>
      <Link to='/profiles' className='btn btn-light'>
        Back To Profiles
      </Link>
      {auth.isAuthenticated &&
        auth.loading === false &&
        auth.user._id === profile.user._id && (
          <Link to={'/edit-profile'} className={'btn btn-dark'}>
            Edit Profile
          </Link>
        )}
      <div className='profile-grid my-1'>
        {/*Top*/}
        <ProfileTop profile={profile} />
        {/*/!*About*!/*/}
        <ProfileAbout profile={profile} />
        {/*/!*Experience*!/*/}
        <ProfileExperience experience={profile.experience} />
        {/*/!*Education*!/*/}
        <ProfileEducation education={profile.education} />
        {/*/!*GitHub*!/*/}
        <ProfileGithub username={profile.githubusername} />
      </div>
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  repos: PropTypes.object
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  repos: state.repos
});

export default connect(
  mapStateToProps,
  { getProfileById }
)(Profile);
