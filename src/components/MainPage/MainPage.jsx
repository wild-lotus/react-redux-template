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
          <nav>
            <Link to="/" className={styles.Link}>
              Home
            </Link>
            <Link to="/counter" className={styles.Link}>
              Counter
            </Link>
            <Link to="/remote-content" className={styles.Link}>
              Remote content
            </Link>
            <Link to="/derived-data" className={styles.Link}>
              Derived Data
            </Link>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/counter" component={CounterContainer} />
            <Route path="/remote-content" component={RemoteContentContainer} />
            <Route
              path="/derived-data"
              render={() => <DerivedDataContainer position={3} />}
            />
            <Route
              path="/ops"
              render={() => <iframe title="ops" src="http://localhost:3000" />}
            />
            <Route
              render={() => <p className={styles.Intro}>Select a sample</p>}
            />
          </Switch>
        </main>
        <footer className={styles.Footer}>
          {process.env.PACKAGE_VERSION} - {process.env.COMMIT_HASH}
        </footer>
      </div>
    </Router>
  );
}
