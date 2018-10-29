import React from 'react';
import styled from 'styled-components';

import * as TWEEN from 'es6-tween';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
`;

class CenteredWrapper extends React.PureComponent {
  componentDidMount = () => {
    new TWEEN.Tween({
      opacity: 0,
    })
      .easing(TWEEN.Easing.Quadratic.In)
      .to(
        {
          opacity: 1,
        },
        1500
      )
      .on('update', ({ opacity }) => {
        if (this.wrapper) this.wrapper.style.opacity = opacity;
      })
      .start();
  };

  render() {
    return (
      <Wrapper innerRef={element => (this.wrapper = element)}>
        {this.props.children}
      </Wrapper>
    );
  }
}

export default CenteredWrapper;
