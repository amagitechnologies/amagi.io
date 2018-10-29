import React from 'react';

import { Line, Mouse } from './CenterLineComponents';

class CenterLine extends React.PureComponent {
  previousScrollTop = 0;

  onScroll = ({ scrollTop } = {}) => {
    if (scrollTop > 90) {
      this.mouse.style.opacity = 0.1;
    } else {
      console.log('back');
      this.mouse.style.opacity = 1;
    }

    this.previousScrollTop = scrollTop;
  };
  render() {
    return (
      <Line>
        <Mouse innerRef={element => (this.mouse = element)}>
          <div className="wheel" />
        </Mouse>
      </Line>
    );
  }
}

export default CenterLine;
