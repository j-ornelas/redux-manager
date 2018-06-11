import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  error: '',
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  console.log('action', action);
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case EMAIL_CHANGED:
      // we have to use ...state to make a new object
      // in memory to compare old state vs new state.
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: '',
      };
    case LOGIN_USER_FAIL:
      console.log('login user fail payload', action.payload.code);
      return {
        ...state,
        loading: false,
        error: action.payload.code,
        password: '',
      };
    default:
      return state;
  }
};




/*
boilerplate reducer:
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // insert actions here vvv
    default:
      return state;
  }
};
*/
