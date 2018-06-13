import { combineReducers } from 'redux';
import ClockReducer from './modules/clock/reducer';

const rootReducer = combineReducers({
  weather: ClockReducer,
});

export default rootReducer;
