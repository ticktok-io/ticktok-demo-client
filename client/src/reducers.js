import { combineReducers } from 'redux';
import ClockReducer from './modules/clock/reducer';
import TickReducer from './modules/tick/reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  clocks: ClockReducer,
  ticks: TickReducer,
  form: formReducer
});

export default rootReducer;
