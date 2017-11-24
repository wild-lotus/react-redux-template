// @flow

import type { Fetchable, AsyncAction, AsyncActions } from '../types';

import * as f from './fetchable';

export const IN_PROGRESS = 'inProgress';
export const SUCCESS = 'success';
export const ERROR = 'error';

export const asyncActions = <Type, Payload, Context>(
  type: Type
): AsyncActions<Type, Payload, Context> => ({
  inProgress: (context: Context) => ({
    type,
    status: IN_PROGRESS,
    context,
  }),
  success: (payload: Payload, context) => ({
    type,
    status: SUCCESS,
    payload,
    context,
  }),
  error: (error: Error, context) => ({
    type,
    status: ERROR,
    error,
    context,
  }),
});

export const asyncActionsReducer = <Type, Payload, Context>(
  action: AsyncAction<Type, Payload, Context>,
  fetchable?: Fetchable<Payload>
): Fetchable<Payload> => {
  switch (action.status) {
    case 'inProgress':
      return fetchable && fetchable.progress === SUCCESS
        ? f.invalidate(fetchable)
        : f.fetching;
    case 'success':
      return f.success(action.payload);
    case 'error':
      return f.error(action.error);
    default:
      (action: empty); // eslint-disable-line no-unused-expressions
      throw new Error('Unexpected async action state');
  }
};
