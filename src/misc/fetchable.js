//@flow

import * as React from 'react';

export const INIT: 'init' = 'init';
export const FETCHING: 'fetching' = 'fetching';
export const SUCCESS: 'success' = 'success';
export const ERROR: 'error' = 'error';

export type InitFetchable = {| +progress: typeof INIT |};
export type FetchingFetchable = {| +progress: typeof FETCHING |};
export type SuccessFetchable<T> = {
  +progress: typeof SUCCESS,
  +payload: T,
  +invalidated?: boolean,
};
export type ErrorFetchable = {| +progress: typeof ERROR, +error: Error |};
export type Fetchable<T> =
  | InitFetchable
  | FetchingFetchable
  | SuccessFetchable<T>
  | ErrorFetchable;

export const init = { progress: INIT };
export const fetching = { progress: FETCHING };
export const success = <T>(payload: T): SuccessFetchable<T> => ({
  progress: SUCCESS,
  payload,
});
export const error = (error: Error): ErrorFetchable => ({
  progress: ERROR,
  error,
});

export const isInit = <T>(f: Fetchable<T>) => f.progress === INIT;
export const isFetching = <T>(f: Fetchable<T>) => f.progress === FETCHING;
export const isSuccess = <T>(f: Fetchable<T>) => f.progress === SUCCESS;
export const isValidSuccess = <T>(f: Fetchable<T>) =>
  f.progress === SUCCESS && !f.invalidated;
export const isInvalidated = <T>(f: Fetchable<T>) =>
  f.progress === SUCCESS && f.invalidated;
export const isFetchingOrInvalidated = <T>(f: Fetchable<T>) =>
  isFetching(f) || isInvalidated(f);
export const isError = <T>(f: Fetchable<T>) => f.progress === ERROR;

export const safeSuccess = <T>(origin: ?Fetchable<T>): SuccessFetchable<T> => {
  if (origin != null && origin.progress === SUCCESS) {
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
    case INIT:
      return renderInit === undefined ? (
        <p>{`Waiting for ${name} fetch to start...`}</p>
      ) : (
        renderInit
      );
    case FETCHING:
      return renderFetching === undefined ? (
        <p>{`Fetching ${name}...`}</p>
      ) : (
        renderFetching
      );
    case SUCCESS:
      return renderSuccess(origin.payload, origin.invalidated);
    case ERROR:
      return renderError === undefined ? (
        <p style={{ color: 'red' }}>{`Error fetching ${name}`}</p>
      ) : (
        renderError(origin.error)
      );
    default:
      (origin: empty); // eslint-disable-line no-unused-expressions
      throw new Error('Unexpected fetchable progress');
  }
};
