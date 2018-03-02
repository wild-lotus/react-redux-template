// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import type { Fetchable } from 'misc/fetchable';

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

export type AsyncAction<Type, Payload, Context> =
  | {
      type: Type,
      status: 'inProgress',
      context: Context,
    }
  | {
      type: Type,
      status: 'success',
      payload: Payload,
      context: Context,
    }
  | {
      type: Type,
      status: 'error',
      error: Error,
      context: Context,
    };

export type AsyncActions<Type, Payload, Context> = {|
  +inProgress: Context => AsyncAction<Type, Payload, Context>,
  +success: (Payload, Context) => AsyncAction<Type, Payload, Context>,
  +error: (Error, Context) => AsyncAction<Type, Payload, Context>,
|};

export type UpdateCounterAction = {
  type: 'UPDATE_COUNTER',
  update: number,
};

export type Action =
  | ReduxInitAction
  | AsyncAction<'GET_REMOTE_CONTENT', string, void>
  | UpdateCounterAction;
