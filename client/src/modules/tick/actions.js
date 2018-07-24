import axios from 'axios';

export const FETCH_TICKS = 'fetch_ticks';

export function fetchTicks(index) {
  const request = axios.get(`/api/ticks?index=${index}`);

  return {
    type: FETCH_TICKS,
    payload: request,
  };
}
