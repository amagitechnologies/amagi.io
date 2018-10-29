import React from 'react';

import { ScreenClassRender } from 'react-grid-system';
import { Brand, Tagline } from './AboutComponents';

export default () => (
  <ScreenClassRender
    render={screen => [
      <Brand key="brand" screen={screen}>
        AMAGI
      </Brand>,
      <Tagline key="tagline" screen={screen}>
        DIGITAL SOLUTIONS FOR A BETTER TOMORROW
      </Tagline>,
    ]}
  />
);
