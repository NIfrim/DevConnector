import axios from 'axios';
import { setAlert } from './alert';

import {
  ACCOUNT_REMOVED,
  CLEAR_PROFILE,
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  REMOVE_EDUCATION,
  REMOVE_EXPERIENCE,
  UPDATE_PROFILE,
  GET_GITHUB_REPOS
} from './types';

// Get logged in user profile
export const getCurrProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/profile/me');

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get profile by :id
export const getProfileById = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/profile/user/${userId}`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get all profiles
export const getAllProfiles = () => async dispatch => {
  dispatch({ type: CLEAR_PROFILE });

  try {
    const res = await axios.get('/api/profile');

    dispatch({
      type: GET_PROFILES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get github repos
export const getGithubRepos = username => async dispatch => {
  try {
    const res = await axios.get(`/api/profile/github/${username}`);

    dispatch({
      type: GET_GITHUB_REPOS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Create or update profile
export const createProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.post('api/profile', formData, config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

    // Redirect using history
    if (!edit) {
      history.push('/dashboard');
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger', 3000)));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add ProfileExperience
export const addExperience = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.put('api/profile/experience', formData, config);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert('ProfileExperience added', 'success', 3000));

    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger', 3000)));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add ProfileEducation
export const addEducation = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.put('api/profile/education', formData, config);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert('ProfileEducation added', 'success', 3000));

    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger', 3000)));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Remove ProfileEducation
export const removeEducation = id => async dispatch => {
  try {
    const res = await axios.delete(`api/profile/education/${id}`);

    dispatch({
      type: REMOVE_EDUCATION,
      payload: res.data
    });

    dispatch(setAlert('ProfileEducation removed', 'danger', 3000));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.message, status: err.status }
    });
  }
};

// Remove ProfileExperience
export const removeExperience = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/profile/experience/${id}`);

    dispatch({
      type: REMOVE_EXPERIENCE,
      payload: res.data
    });

    dispatch(setAlert('ProfileExperience removed', 'danger', 3000));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.message, status: err.status }
    });
  }
};

// Remove Account & Profile
export const removeAccount = () => async dispatch => {
  if (window.confirm('Are you sure? This cannot be undone!')) {
    try {
      await axios.delete('api/profile');

      dispatch({
        type: CLEAR_PROFILE
      });
      dispatch({
        type: ACCOUNT_REMOVED
      });

      dispatch(setAlert('Account permanently removed', null, 3000));
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.message, status: err.status }
      });
    }
  }
};
