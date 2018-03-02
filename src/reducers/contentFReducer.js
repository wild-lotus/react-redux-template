// @flow

import type { Reducer } from 'redux';
import type { Action } from 'types';
import type { Fetchable } from 'misc/fetchable';

import * as f from 'misc/fetchable';
import { asyncActionsReducer } from 'misc/asyncActions';

const contentFReducer: Reducer<Fetchable<string>, Action> = (
  state: Fetchable<string> = f.init,
  action: Action
) => {
  switch (action.type) {
    case 'GET_REMOTE_CONTENT':
      return asyncActionsReducer(action);
    default:
      return state;
  }
};

export default contentFReducer;
