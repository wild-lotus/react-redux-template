// @flow

import type { UpdateCounterAction, AsyncActions } from '../types';

const asyncActions = <Type, Payload, Context>(
  type: Type
): AsyncActions<Type, Payload, Context> => ({
  inProgress: (context: Context) => ({
    type,
    status: 'inProgress',
    context,
  }),
  success: (payload: Payload, context) => ({
    type,
    status: 'success',
    payload,
    context,
  }),
  error: (error: Error, context) => ({
    type,
    status: 'error',
    error,
    context,
  }),
});

export const getRemoteContent: AsyncActions<
  'GET_REMOTE_CONTENT',
  string,
  void
> = asyncActions('GET_REMOTE_CONTENT');

export const updateCounter = (update: number): UpdateCounterAction => ({
  type: 'UPDATE_COUNTER',
  update,
});
