// @flow

import type { Reducer } from 'redux';
import type { Fetchable, Action } from '../types';

import * as f from '../misc/fetchable';

const contentFReducer: Reducer<Fetchable<string>, Action> = (
  state = f.init,
  action
) => {
  switch (action.type) {
    case 'GET_REMOTE_CONTENT':
      switch (action.status) {
        case 'inProgress':
          return f.fetching;
        case 'success':
          return f.success(action.payload);
        case 'error':
          return f.error(action.error);
        default:
          (action: empty); // eslint-disable-line no-unused-expressions
          return state;
      }
    default:
      return state;
  }
};

export default contentFReducer;
