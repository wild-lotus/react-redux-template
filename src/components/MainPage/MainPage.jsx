// @flow

import * as React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import CounterContainer from './Counter/CounterContainer';
import RemoteContentContainer from './RemoteContent/RemoteContentContainer';
import DerivedDataContainer from './DerivedData/DerivedDataContainer';
import logo from 'images/logo.svg';
import styles from './MainPage.css';

export default function MainPage() {
  return (
    <Router>
      <div className={styles.Root}>
        <header className={styles.Header}>
          <img src={logo} className={styles.Logo} alt="logo" />
          <h1 className={styles.Title}> Welcome to the Front-end</h1>
        </header>
        <p className={styles.Intro}>
          To get started, edit <code>
            src/components/MainPage/MainPage.js
          </code>{' '}
          and save to reload.
        </p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/remote-content">Remote content</Link>
          </li>
          <li>
            <Link to="/derived-data">Derived Data</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/counter" component={CounterContainer} />
          <Route path="/remote-content" component={RemoteContentContainer} />
          <Route
            path="/derived-data"
            render={() => <DerivedDataContainer position={3} />}
          />
          <Route render={() => 'Select an example'} />
        </Switch>
        {/* <CounterContainer />
        <RemoteContentContainer />
        <DerivedDataContainer position={3} /> */}

        <footer className={styles.Footer}>
          {process.env.PACKAGE_VERSION} - {process.env.COMMIT_HASH}
        </footer>
      </div>
    </Router>
  );
}
