// @flow

import type { Fetchable } from '../../types.js';

import * as React from 'react';
import * as f from '../../misc/fetchable';
import styles from './RemoteContent.css';

// prettier-ignore
export type Props = {
  +contentF:         Fetchable<string>,
  +getRemoteContent: () => void,
};

export default (props: Props) => {
  const { contentF, getRemoteContent } = props;
  return (
    <div className={styles.Root}>
      <h2>Sample remote content</h2>
      {f.render(contentF, 'remote content', content => (
        <p>
          <span style={{ fontWeight: 'bold' }}>True or False?</span> {content}
        </p>
      ))}
      <button onClick={getRemoteContent}>Request new content</button>
    </div>
  );
};
