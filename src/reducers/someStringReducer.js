// @flow

import type { Reducer } from 'redux';
import type { Action } from 'types';

const someStringReducer: Reducer<string, Action> = (
  state = 'I am a sample sentence. Data will be derived from me.',
  action
) => state;

export default someStringReducer;
