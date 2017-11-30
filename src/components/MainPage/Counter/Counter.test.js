// @flow

import * as React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('Counter', () => {
  it('renders without crashing', () => {
    shallow(<Counter current={67251352} updateCounter={() => {}} />);
  });
});
