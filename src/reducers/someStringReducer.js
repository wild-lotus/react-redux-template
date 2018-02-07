// @flow

import type { Reducer } from 'redux';
import type { Action } from 'types';

const someStringReducer: Reducer<string, Action> = (
  state: string = 'I am a sample sentence. Data will be derived from me.',
  action: Action
) => state;

export default someStringReducer;
