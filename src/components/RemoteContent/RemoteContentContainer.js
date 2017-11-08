// @flow

import type { Connector } from 'react-redux';
import type { State, Dispatch } from '../../types';
import type { Props } from './RemoteContent';

import { connect } from 'react-redux';
import { getRemoteContentThunk } from '../../actions/thunks';
import RemoteContent from './RemoteContent';

type OwnProps = {||};

const mapStateToProps = (state: State, ownProps: OwnProps) => ({
  contentF: state.contentF,
});

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
