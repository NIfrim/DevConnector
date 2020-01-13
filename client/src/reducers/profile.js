import {
  CLEAR_PROFILE,
  GET_GITHUB_REPOS,
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  REMOVE_EDUCATION,
  REMOVE_EXPERIENCE,
  UPDATE_PROFILE
} from '../actions/types';

const initState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {}
};

export default function(state = initState, action) {
  const { type, payload } = action;
  const isLoading = !payload;

  switch (type) {
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: isLoading
      };
    case REMOVE_EXPERIENCE:
    case REMOVE_EDUCATION:
    case UPDATE_PROFILE:
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: isLoading
      };
    case GET_GITHUB_REPOS:
      return {
        ...state,
        repos: payload,
        loading: isLoading
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: isLoading
      };
    default:
      return state;
  }
}
