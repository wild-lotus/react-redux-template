// @flow

import type { Reducer } from 'redux';
import type { Fetchable, Action } from '../types';

import * as f from '../misc/fetchable';

const contentFReducer: Reducer<Fetchable<string>, Action> = (
  state = f.init,
  action
) => {
  switch (action.type) {
    case 'GET_REMOTE_CONTENT_REQUEST':
      return f.fetching;
    case 'GET_REMOTE_CONTENT_RESPONSE':
      return f.success(action.content);
    case 'GET_REMOTE_CONTENT_ERROR':
      return f.error(action.error);
    default:
      return state;
  }
};

export default contentFReducer;
