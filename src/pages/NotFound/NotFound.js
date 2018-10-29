import React from 'react';

import { CenteredWrapper, MainScene } from 'components';
import { Detail, Home } from './NotFoundComponents';

class NotFound extends React.Component {
  render() {
    return [
      <MainScene key="main-scene" />,
      <CenteredWrapper key="wrapper">
        <Detail>IT SEEMS YOU HAVE GONE TO AN EMPTY SPACE.</Detail>
        <Home>BACK TO REALITY</Home>
      </CenteredWrapper>,
    ];
  }
}

export default NotFound;
