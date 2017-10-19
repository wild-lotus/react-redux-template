// @flow

import * as React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

describe('MainPage', () => {
  it('renders without crashing', () => {
    shallow(<MainPage />);
  });
});
