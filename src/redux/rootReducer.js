import {combineReducers} from 'redux';

import messageBox from './messageBox/reducer';
import auth from './auth/reducer';

export default combineReducers({
  messageBox,
  auth,
});
