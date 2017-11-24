// @flow

import type { Reducer } from 'redux';
import type { Fetchable, Action } from '../types';

import * as f from '../misc/fetchable';
import { asyncActionsReducer } from '../misc/asyncActions';

const contentFReducer: Reducer<Fetchable<string>, Action> = (
  state = f.init,
  action
) => {
  switch (action.type) {
    case 'GET_REMOTE_CONTENT':
      return asyncActionsReducer(action);
    default:
      return state;
  }
};

export default contentFReducer;
