import {NEW_CLOCK} from './actions';

export default function (state = [], action) {
  switch (action.type) {
    case NEW_CLOCK:
      if (action.payload.data) {
        return [action.payload.data, ...state];
      }
      return state;
    default:
      return state;
  }
}
