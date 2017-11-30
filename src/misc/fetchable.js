//@flow

import type { SuccessFetchable, ErrorFetchable, Fetchable } from 'types';

import * as React from 'react';

export const INIT_PROGRESS = 'init';
export const FETCHING_PROGRESS = 'fetching';
export const SUCCESS_PROGRESS = 'success';
export const ERROR_PROGRESS = 'error';

export const init = { progress: INIT_PROGRESS };
export const fetching = { progress: FETCHING_PROGRESS };

export const isInit = <T>(f: Fetchable<T>) => f.progress === INIT_PROGRESS;
export const isFetching = <T>(f: Fetchable<T>) =>
  f.progress === FETCHING_PROGRESS;
export const isSuccess = <T>(f: Fetchable<T>) =>
  f.progress === SUCCESS_PROGRESS;
export const isError = <T>(f: Fetchable<T>) => f.progress === ERROR_PROGRESS;

export const success = <T>(payload: T): SuccessFetchable<T> => ({
  progress: SUCCESS_PROGRESS,
  payload,
});
export const error = (error: Error): ErrorFetchable => ({
  progress: ERROR_PROGRESS,
  error,
});

export const safeSuccess = <T>(origin: ?Fetchable<T>): SuccessFetchable<T> => {
  if (origin != null && origin.progress === SUCCESS_PROGRESS) {
    return origin;
  }
  throw new Error('Invalid cast from Fetchable to SuccessFetchable');
};

export const safePayload = <T>(origin: ?Fetchable<T>): T =>
  safeSuccess(origin).payload;

export const invalidate = <T>(
  origin: SuccessFetchable<T>
): SuccessFetchable<T> => ({
  ...origin,
  invalidated: true,
});

export const update = <T>(
  origin: SuccessFetchable<T>,
  updatePayload: T => T,
  invalidate?: boolean
): SuccessFetchable<T> => {
  return {
    ...origin,
    payload: updatePayload(origin.payload),
    invalidated: invalidate != null ? invalidate : origin.invalidated,
  };
};

export const render = <T>(
  origin: Fetchable<T>,
  name: string,
  renderSuccess: (payload: T, invalidated?: boolean) => React.Node,
  renderInit?: React.Node,
  renderFetching?: React.Node,
  renderError?: (error: Error) => React.Node
): React.Node => {
  switch (origin.progress) {
    case INIT_PROGRESS:
      return renderInit || <p>{`Waiting for ${name} fetch to start...`}</p>;
    case FETCHING_PROGRESS:
      return renderFetching || <p>{`Fetching ${name}...`}</p>;
    case SUCCESS_PROGRESS:
      return renderSuccess(origin.payload, origin.invalidated);
    case ERROR_PROGRESS:
      console.error(`Error fetching ${name}:`, origin.error);
      return renderError ? (
        renderError(origin.error)
      ) : (
        <p style={{ color: 'red' }}>{`Error fetching ${name}`}</p>
      );
    default:
      (origin: empty); // eslint-disable-line no-unused-expressions
      throw new Error('Unexpected fetchable progress');
  }
};
