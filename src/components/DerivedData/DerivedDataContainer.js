// @flow

import type { MapStateToProps, Connector } from 'react-redux';
import type { State } from '../../types';
import type { Props } from './DerivedData';

import { connect } from 'react-redux';
import getLetters from '../../selectors/getLetters';
import DerivedData from './DerivedData';

export type OwnProps = { position: number };

// const getLettersWithoutSelector = (state: State, props: OwnProps) => {
//   const words = state.someString.split(/\s+/);
//   return words.length > props.position ? words[props.position].split('') : [];
// };

const mapStateToProps: MapStateToProps<State, OwnProps, Props> = (
  state: State,
  ownProps: OwnProps
) => ({
  letters: getLetters(state, ownProps),
  // This is the wrong alternative. Check in the console how the component gets re-rendered with every action dispatched:
  // letters: getLettersWithoutSelector(state, ownProps),
});

const connector: Connector<OwnProps, Props> = connect(mapStateToProps);

export default connector(DerivedData);
