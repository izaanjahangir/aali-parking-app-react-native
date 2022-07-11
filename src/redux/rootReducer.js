import {combineReducers} from 'redux';

import messageBox from './messageBox/reducer';
import auth from './auth/reducer';
import config from './config/reducer';

export default combineReducers({
  messageBox,
  auth,
  config
});
