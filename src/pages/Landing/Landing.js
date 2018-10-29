import React from 'react';

import Navigator from './Navigator';
import CenterLine from './CenterLine';

import { ScreenClassRender, Visible, Hidden } from 'react-grid-system';
import {
  CenteredWrapper,
  MainScene,
  PublicFooter,
  TriangularPrism,
} from 'components';
import { About, Contact, Projects } from './faces';

class Landing extends React.Component {
  previous = () => {
    this.mainScene.previousPage();
    this.prism.previous();
  };

  next = () => {
    this.mainScene.nextPage();
    this.prism.next();
  };

  render() {
    return [
      <MainScene
        key="main-scene"
        ref={instance => (this.mainScene = instance)}
      />,
      <ScreenClassRender
        key="wrapper"
        render={screen => {
          return (
            <CenteredWrapper>
              <Navigator previous={this.previous} next={this.next} />
              <Visible xs sm md>
                <CenterLine ref={element => (this.centerLine = element)} />
              </Visible>
              <TriangularPrism
                ref={element => (this.prism = element)}
                left={
                  ['xs', 'sm', 'md'].includes(screen) ? <About /> : <Contact />
                }
                front={
                  ['xs', 'sm', 'md'].includes(screen) ? <Projects /> : <About />
                }
                right={
                  ['xs', 'sm', 'md'].includes(screen) ? (
                    <Contact />
                  ) : (
                    <Projects />
                  )
                }
                onScroll={({ scrollTop }) => {
                  this.centerLine && this.centerLine.onScroll({ scrollTop });
                }}
              />
              <Hidden xs sm md>
                <PublicFooter />
              </Hidden>
            </CenteredWrapper>
          );
        }}
      />,
    ];
  }
}

export default Landing;
