// @flow

import * as React from 'react';
import CounterContainer from '../Counter/CounterContainer';
import RemoteContentContainer from '../RemoteContent/RemoteContentContainer';
import DerivedDataContainer from '../DerivedData/DerivedDataContainer';
import logo from '../../images/logo.svg';
import styles from './MainPage.css';

export default function MainPage() {
  return (
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
      <CounterContainer />
      <RemoteContentContainer />
      <DerivedDataContainer position={3} />
      <footer className={styles.Footer}>
        {process.env.PACKAGE_VERSION} - {process.env.COMMIT_HASH}
      </footer>
    </div>
  );
}
