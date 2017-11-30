// @flow

import type { State } from 'types';
import type { OwnProps } from 'components/MainPage/DerivedData/DerivedDataContainer';

import createCachedSelector from 're-reselect';

const getPosition = (state: State, props: OwnProps) => props.position;

const getSomeString = (state: State, props: OwnProps) => state.someString;

const getLetters = createCachedSelector(
  getPosition,
  getSomeString,
  (position, someString) => {
    const words = someString.split(/\s+/);
    return words.length > position ? words[position].split('') : '';
  }
)((state: State, props: OwnProps) => props.position);

export default getLetters;
