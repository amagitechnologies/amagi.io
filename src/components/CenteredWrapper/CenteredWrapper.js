import React from 'react';
import Animate from 'utils/general/animate';
import styled from 'styled-components';

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
    Animate({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
      duration: 1500,
      update: ({ opacity }) => {
        if (this.wrapper) this.wrapper.style.opacity = opacity;
      },
    });
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
