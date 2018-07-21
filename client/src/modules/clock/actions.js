import axios from 'axios';

const API_KEY = 'Bfmx3Z7y9GxY4yLrKP';
const TICKTOK_DEMO_NEW_CLOCK = `/clocks`;

export const NEW_CLOCK = 'NEW_CLOCK';

export function createClock(clock) {
  const request = axios.post(TICKTOK_DEMO_NEW_CLOCK, { schedule: clock });

  console.log('Request:', request);
  return {
    type: 'NEW_CLOCK',
    payload: request,
  };
}
