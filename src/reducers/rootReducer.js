// @flow

import type { Reducer } from 'redux';
import type { State, Action } from '../types';

import { combineReducers } from 'redux';
import counter from './counterReducer';
import contentF from './contentFReducer';
import someString from './someStringReducer';

export const rootReducer: Reducer<State, Action> = combineReducers({
  counter,
  contentF,
  someString,
});

export default rootReducer;
