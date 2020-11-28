import { combineReducers } from 'redux';

import auth from './auth/reducer';

const rootReducers = combineReducers({
  auth,
});

export default rootReducers;