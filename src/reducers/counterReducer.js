// @flow

import type { Reducer } from 'redux';
import type { CounterState, Action } from 'types';

const counterReducer: Reducer<CounterState, Action> = (
  state = { current: 0 },
  action
) => {
  switch (action.type) {
    case 'UPDATE_COUNTER':
      return { ...state, current: state.current + action.update };
    default:
      return state;
  }
};

export default counterReducer;
