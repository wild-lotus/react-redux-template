// @flow

// eslint-disable-next-line
import mapPrototypeTojson from 'map.prototype.tojson';

import type { Store } from './types';

import * as React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { ThemeProvider } from 'styled-components';
import rootReducer from './reducers/rootReducer';
import MainPage from './components/MainPage/MainPage';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      serialize: true,
    })) ||
  compose;

const store: Store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

const theme = {
  mainColor: '#417490',
  secondaryColor: '#c7c9c0',
  backgroundColor: '#f1f1ef',
};

const rootElement = document.getElementById('root');
rootElement &&
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainPage />
      </ThemeProvider>
    </Provider>,
    rootElement
  );

registerServiceWorker();
