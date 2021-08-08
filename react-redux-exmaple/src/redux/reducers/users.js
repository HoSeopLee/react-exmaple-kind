import {
  GET_USERS_FAIL,
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USER_FULFILLED,
  GET_USER_PENDING,
  GET_USER_REJECTED,
} from '../actions';

const initalState = {
  loading: false,
  data: [],
  error: null,
};

const users = (state = initalState, action) => {
  if (action.type === GET_USERS_START || action.type === GET_USER_PENDING) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }
  if (action.type === GET_USERS_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: action.data,
    };
  }
  if (action.type === GET_USER_FULFILLED) {
    return {
      ...state,
      loading: false,
      data: action.payload,
    };
  }
  if (action.type === GET_USERS_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }
  if (action.type === GET_USER_REJECTED) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  return state;
};

export default users;
