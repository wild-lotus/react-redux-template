// @flow

import * as React from 'react';
import styles from './Counter.css';

// prettier-ignore
export type Props = {
  +current:       number,
  +updateCounter: number => void,
};

export default function Counter(props: Props) {
  const { current, updateCounter } = props;
  return (
    <div className={styles.Root}>
      <h2>Sample counter</h2>
      <button onClick={() => updateCounter(1)}>+</button>
      <p>{current}</p>
      <button onClick={() => updateCounter(-1)}>-</button>
    </div>
  );
}
