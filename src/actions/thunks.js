// @flow

import type {
  ThunkAction,
  // AsyncActions,
} from '../types';

import { getRemoteContent } from './actions';
import { getContent } from 'data/contentRepo';

const basicThunk = <Payload, Context>(
  asyncActions: *, // FIXME: F**k it! I can't make it work :@ (AsyncActions<Type, Payload, Context>)
  promise: () => Promise<Payload>,
  context: Context
): ThunkAction => async (dispatch, getState) => {
  dispatch(asyncActions.inProgress(context));
  let result;
  try {
    result = await promise();
  } catch (error) {
    dispatch(asyncActions.error(error, context));
    return;
  }
  dispatch(asyncActions.success(result, context));
};

export const getRemoteContentThunk = () =>
  basicThunk(getRemoteContent, getContent);
