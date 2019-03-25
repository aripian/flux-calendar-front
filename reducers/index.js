import {combineReducers} from 'redux';
import formReducer from './FormReducer';
import {reducer as formDetailsReducer} from 'redux-form';
// Combine all reducers to a single reducer function
const rootReducer = combineReducers({
  details: formReducer,
  form: formDetailsReducer
});

export default rootReducer;
