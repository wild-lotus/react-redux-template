// @flow

import type { Fetchable } from 'misc/fetchable';

import * as React from 'react';
import * as f from 'misc/fetchable';

// prettier-ignore
export type Props = {
  +contentF:         Fetchable<string>,
  +getRemoteContent: () => void,
};

export default function RemoteContent(props: Props) {
  const { contentF, getRemoteContent } = props;
  return (
    <div>
      <h2>Sample remote content</h2>
      {f.render(contentF, 'remote content', content => (
        <p>
          <span style={{ fontWeight: 'bold' }}>True or False?</span> {content}
        </p>
      ))}
      <button onClick={getRemoteContent}>Request new content</button>
    </div>
  );
}
