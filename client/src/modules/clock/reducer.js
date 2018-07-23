import {CREATE_CLOCK} from './actions';

export default function (state = [], action) {
  switch (action.type) {
    case CREATE_CLOCK:
      if (action.payload.data) {
        return [action.payload.data, ...state];
      }
      return state;
    default:
      return state;
  }
}
