import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      // we have to use ...state to make a new object
      // in memory to compare old state vs new state.
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
