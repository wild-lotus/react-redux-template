// @flow

import type {
  UpdateCounterAction,
  GetRemoteContentRequestAction,
  GetRemoteContentResponseAction,
  GetRemoteContentErrorAction,
} from './types';

export const updateCounter = (update: number): UpdateCounterAction => ({
  type: 'UPDATE_COUNTER',
  update,
});

export const getRemoteContentRequest = (): GetRemoteContentRequestAction => ({
  type: 'GET_REMOTE_CONTENT_REQUEST',
});

export const getRemoteContentResponse = (
  content: string
): GetRemoteContentResponseAction => ({
  type: 'GET_REMOTE_CONTENT_RESPONSE',
  content,
});

export const getRemoteContentError = (
  error: Error
): GetRemoteContentErrorAction => ({
  type: 'GET_REMOTE_CONTENT_ERROR',
  error,
});
