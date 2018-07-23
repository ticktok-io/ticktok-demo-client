import axios from 'axios';

export const CREATE_CLOCK = 'CREATE_CLOCK';

export function createClock(key, values) {
  const request = axios.post('/api/clocks', { key: key, schedule: values.schedule });

  console.log('Request:', request);
  return {
    type: CREATE_CLOCK,
    payload: request,
  };
}
