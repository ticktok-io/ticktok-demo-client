import { combineReducers } from 'redux';
import ClockReducer from './modules/clock/reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  weather: ClockReducer,
  form: formReducer
});

export default rootReducer;
