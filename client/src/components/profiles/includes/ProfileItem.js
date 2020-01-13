import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProfileItem = ({ profile }) => {
  const {
    status,
    company,
    location,
    user: { _id, name, avatar },
    skills
  } = profile;

  const skillItems = skills.slice(0, 4).map((skill, index) => {
    return (
      <li key={index} className='text-primary'>
        <i className='fas fa-check' /> {skill}
      </li>
    );
  });

  return (
    <Fragment>
      <div className='profile bg-light'>
        <img className='round-img' src={avatar} alt='avatar' />
        <div>
          <h2>{name}</h2>
          <p>
            {company && (
              <span>
                {status} at {company}
              </span>
            )}
          </p>
          <p className={'my-1'}>{location && <span>{location}</span>}</p>
          <Link to={`/profile/${_id}`} className='btn btn-primary'>
            View Profile
          </Link>
        </div>

        <ul>{skillItems}</ul>
      </div>
    </Fragment>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
