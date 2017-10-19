// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

// =========
// Fetchable
// =========

export type InitFetchable = {| +progress: 'init' |};
export type FetchingFetchable = {| +progress: 'fetching' |};
export type SuccessFetchable<T> = {|
  +progress: 'success',
  +payload: T,
  +invalidated?: boolean,
|};
export type ErrorFetchable = {| +progress: 'error', +error: Error |};
export type Fetchable<T> =
  | InitFetchable
  | FetchingFetchable
  | SuccessFetchable<T>
  | ErrorFetchable;

// =====
// Redux
// =====

export type Dispatch = (action: Action | ThunkAction) => any;
export type ThunkAction = (dispatch: Dispatch, getState: () => State) => any;

export type Store = ReduxStore<State, Action, Dispatch>;

// =======
// State
// =======

export type CounterState = {
  +current: number,
};

// prettier-ignore
export type State = {|
  +counter:    CounterState,
  +contentF:   Fetchable<string>,
  +someString: string,
|};

// =======
// Actions
// =======

type ReduxInitAction = { type: '@@INIT' };

export type UpdateCounterAction = {
  type: 'UPDATE_COUNTER',
  update: number,
};

export type GetRemoteContentRequestAction = {
  type: 'GET_REMOTE_CONTENT_REQUEST',
};

export type GetRemoteContentResponseAction = {
  type: 'GET_REMOTE_CONTENT_RESPONSE',
  content: string,
};

export type GetRemoteContentErrorAction = {
  type: 'GET_REMOTE_CONTENT_ERROR',
  error: Error,
};

export type Action =
  | ReduxInitAction
  | UpdateCounterAction
  | GetRemoteContentRequestAction
  | GetRemoteContentResponseAction
  | GetRemoteContentErrorAction;
