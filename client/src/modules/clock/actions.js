import axios from 'axios';

const API_KEY = 'Bfmx3Z7y9GxY4yLrKP';
const TICKTOK_DEMO_NEW_CLOCK = `https://ticktok-io-dev.herokuapp.com/api/v1/clocks?access_token=${API_KEY}`;

export const NEW_CLOCK = 'NEW_CLOCK';

export function registerClock(clock) {
  const request = axios.post(TICKTOK_DEMO_NEW_CLOCK, { schedule: clock }, { headers: { 'Access-Control-Allow-Origin': '*' } });

  console.log('Request:', request);
  return {
    type: 'NEW_CLOCK',
    payload: request,
  };
}
