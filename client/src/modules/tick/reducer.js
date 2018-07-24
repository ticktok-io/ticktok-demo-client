import {FETCH_TICKS} from "./actions";


export default function (state = [], action) {
  switch (action.type) {
    case FETCH_TICKS:
      const { payload } = action;
      if(payload.data) {
        return state.concat(action.payload.data);
      }
      return state;
    default:
      return state;
  }
}
