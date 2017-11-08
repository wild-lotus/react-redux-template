// @flow

import type { Connector } from 'react-redux';
import type { State, Dispatch } from '../../types';
import type { Props } from './Counter';

import { connect } from 'react-redux';
import { updateCounter } from '../../actions/actions';
import Counter from './Counter';

type OwnProps = {||};

const mapStateToProps = (state: State, ownProps: OwnProps) => ({
  current: state.counter.current,
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps) => ({
  updateCounter: update => {
    dispatch(updateCounter(update));
  },
});

const connector: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(Counter);
