// @flow

import type { UpdateCounterAction, AsyncActions } from 'types';

import { asyncActions } from 'misc/asyncActions';

export const getRemoteContent: AsyncActions<
  'GET_REMOTE_CONTENT',
  string,
  void
> = asyncActions('GET_REMOTE_CONTENT');

export const updateCounter = (update: number): UpdateCounterAction => ({
  type: 'UPDATE_COUNTER',
  update,
});
