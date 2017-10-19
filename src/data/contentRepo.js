// @flow

import fetch from 'isomorphic-fetch';
import { safeEnv } from '../misc/safe';

const baseUrl = safeEnv('REACT_APP_API_URL');

export const getContent = async () => {
  const res = await fetch(baseUrl);
  if (!res.ok) {
    const body = await res.text();
    console.error(body);
    throw Error(`HTTP error ${res.status}: ${body || 'empty body'}`);
  } else {
    const json = await res.json();
    return json.results[0].question;
  }
};
