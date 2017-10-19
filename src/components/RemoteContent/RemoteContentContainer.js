// @flow

import type { Connector } from 'react-redux';
import type { State, Dispatch, ThunkAction } from '../../types';
import type { Props } from './RemoteContent';

import { connect } from 'react-redux';
import {
  getRemoteContentRequest,
  getRemoteContentResponse,
  getRemoteContentError,
} from '../../actions';
import * as f from '../../misc/fetchable';
import { getContent } from '../../data/contentRepo';
import RemoteContent from './RemoteContent';

type OwnProps = {||};

const mapStateToProps = (state: State, ownProps: OwnProps) => ({
  contentF: state.contentF,
});

const getRemoteContentThunk = (): ThunkAction => async (dispatch, getState) => {
  const { contentF } = getState();
  if (contentF !== f.fetching) {
    dispatch(getRemoteContentRequest());
    try {
      dispatch(getRemoteContentResponse(await getContent()));
    } catch (error) {
      dispatch(getRemoteContentError(error));
    }
  }
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps) => ({
  getRemoteContent: () => {
    dispatch(getRemoteContentThunk());
  },
});

const connector: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(RemoteContent);
