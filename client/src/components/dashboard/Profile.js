import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrProfile } from '../../actions/profile';

const Profile = ({
  profile: { profile, loading },
  auth: { user },
  getCurrProfile
}) => {
  const [profileData, setProfileData] = useState({
    user: '',
    experience: '',
    education: ''
  });

  const { user, experience, education } = profileData;

  if (!loading)
    setProfileData(() => {
      user;
    });

  return (
    <Fragment>
      <h2 className='my-2'>Experience Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Company</th>
            <th className='hide-sm'>Title</th>
            <th className='hide-sm'>Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tech Guy Web Solutions</td>
            <td className='hide-sm'>Senior Developer</td>
            <td className='hide-sm'>02-03-2009 - 01-02-2014</td>
            <td>
              <button className='btn btn-danger'>Delete</button>
            </td>
          </tr>
          <tr>
            <td>Traversy Media</td>
            <td className='hide-sm'>Instructor & Developer</td>
            <td className='hide-sm'>02-03-2015 - Now</td>
            <td>
              <button className='btn btn-danger'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className='my-2'>Education Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>School</th>
            <th className='hide-sm'>Degree</th>
            <th className='hide-sm'>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Northern Essex</td>
            <td className='hide-sm'>Associates</td>
            <td className='hide-sm'>02-03-2007 - 01-02-2009</td>
            <td>
              <button className='btn btn-danger'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className='my-2'>
        <button className='btn btn-danger'>
          <i className='fas fa-user-minus'></i>
          Delete My Account
        </button>
      </div>
    </Fragment>
  );
};

Profile.propTypes = {
  getCurrProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrProfile }
)(Profile);
