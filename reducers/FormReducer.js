import * as types from '../constants/FormsActionType';
import FormInitialState from './FormInitialState';
import {inputChange} from '../actions/FormActions';

export default function formReducer(state = FormInitialState, action = inputChange) {
  switch (action.type) {
  case types.SET_BOOKING: {
    const data = action.payload;
    return {
      ...state,
      nric: data.nricPass,
      vehno: data.vehNo
    };
  }

  default:
    return state;
  }
}
