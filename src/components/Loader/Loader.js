import React from 'react';

import { keyframes } from 'styled-components';

const expandWidth = keyframes`
  from {
    width: 2px;
  }
  to{
    width: 200px;
  }
`;

export default () => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      color: 'rgba(255, 255, 255, 0.6)',
    }}
  >
    <div>LOADING</div>
    <div
      style={{
        height: 1,
        marginTop: 14,
        backgroundColor: '#fe9156',
        animation: `${expandWidth} 2.75s cubic-bezier(0.19, 1, 0.22, 1) infinite`,
        animationFillMode: 'forwards',
      }}
    />
  </div>
);
