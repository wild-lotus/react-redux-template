//@flow

import type { SuccessFetchable, ErrorFetchable, Fetchable } from '../types';

import * as React from 'react';

export const init = { progress: 'init' };

export const fetching = { progress: 'fetching' };

export const success = <T>(payload: T): SuccessFetchable<T> => ({
  progress: 'success',
  payload,
});

export const error = (error: Error): ErrorFetchable => ({
  progress: 'error',
  error,
});

export const safeSuccess = <T>(origin: ?Fetchable<T>): SuccessFetchable<T> => {
  if (origin != null && origin.progress === 'success') {
    return origin;
  }
  throw new Error('Invalid cast from Fetchable to SuccessFetchable');
};

export const payload = <T>(origin: ?Fetchable<T>): T =>
  safeSuccess(origin).payload;

export const invalidate = <T>(origin: Fetchable<T>): SuccessFetchable<T> => ({
  progress: 'success',
  payload: safeSuccess(origin).payload,
  invalidated: true,
});

export const update = <T>(
  origin: Fetchable<T>,
  updatePayload: T => T,
  invalidate?: boolean
): SuccessFetchable<T> => {
  const success = safeSuccess(origin);
  return {
    progress: 'success',
    payload: updatePayload(success.payload),
    invalidated: invalidate != null ? invalidate : success.invalidated,
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
    case 'init':
      return renderInit || <p>{`Waiting for ${name} fetch to start...`}</p>;
    case 'fetching':
      return renderFetching || <p>{`Fetching ${name}...`}</p>;
    case 'success':
      return renderSuccess(origin.payload, origin.invalidated);
    case 'error':
      console.error(`Error fetching ${name}:`, origin.error);
      return renderError ? (
        renderError(origin.error)
      ) : (
        <p style={{ color: 'red' }}>{`Error fetching ${name}`}</p>
      );
    default:
      // eslint-disable-next-line
      (origin: empty);
  }
};
