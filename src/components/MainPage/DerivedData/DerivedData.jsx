// @flow

import * as React from 'react';
import styles from './DerivedData.css';

// prettier-ignore
export type Props = {
  letters:  Array<string>,
};

export default function DerivedData(props: Props) {
  const { letters } = props;
  console.log('Rendered DerivedData. This should only happen once.');
  return (
    <div className={styles.Root}>
      <h2>Sample derived data</h2>
      <p>
        {letters
          ? `I received these letters: ${letters.join(', ')}.`
          : 'I received no letters.'}
      </p>
      <p>Check the console to see how many times I get rendered.</p>
    </div>
  );
}
