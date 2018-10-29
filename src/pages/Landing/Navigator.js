import React from 'react';
import Animate from 'utils/general/animate';
import * as TWEEN from 'es6-tween';

import FACE_LINKS from 'constants/prismfaces';

import { ScreenClassRender } from 'react-grid-system';
import {
  LeftLink,
  LeftLinkLine,
  RightLink,
  RightLinkLine,
} from './NavigatorComponents';

class Navigator extends React.PureComponent {
  isNavigating = false;

  state = {
    activePage: 0,
  };

  previous = () => {
    if (this.state.activePage < 0 || this.isNavigating) return;

    this.changeLinkText({ isNext: false });
    this.props.previous();
  };

  next = () => {
    if (this.state.activePage > 0 || this.isNavigating) return;

    this.changeLinkText({ isNext: true });
    this.props.next();
  };

  changeLinkText = ({ isNext = true } = {}) => {
    this.isNavigating = true;

    const down = Animate({
      from: { scale: 1 },
      to: { scale: 0 },
      duration: 200,
      easing: TWEEN.Easing.Back.InOut,
      update: ({ scale }) => {
        this.leftText.style.transform = `rotate(-90deg) scale(${scale})`;
        this.rightText.style.transform = `rotate(90deg) scale(${scale})`;
      },
      complete: () => {
        this.setState({
          activePage: isNext
            ? this.state.activePage + 1
            : this.state.activePage - 1,
        });
        this.isNavigating = false;
      },
    });

    const up = Animate({
      from: { scale: 0 },
      to: { scale: 1 },
      duration: 200,
      easing: TWEEN.Easing.Back.InOut,
      update: ({ scale }) => {
        this.leftText.style.transform = `rotate(-90deg) scale(${scale})`;
        this.rightText.style.transform = `rotate(90deg) scale(${scale})`;
      },
      autoStart: false,
    });

    down.chainedTweens(up);
  };

  componentDidMount() {
    if (this.leftLine && this.rightLine) {
      Animate({
        from: { height: 1 },
        to: { height: 100 },
        duration: 1750,
        easing: TWEEN.Easing.Exponential.Out,
        delay: 1000,
        update: ({ height }) => {
          if (this.leftLine && this.rightLine) {
            this.leftLine.style.height = `${height}%`;
            this.rightLine.style.height = `${height}%`;
          }
        },
      });
    }
  }

  render() {
    const { activePage } = this.state;

    return (
      <ScreenClassRender
        render={screen => {
          if (['xs', 'sm', 'md'].includes(screen)) {
            return null;
          }

          return [
            <LeftLink
              key="left-link"
              onClick={this.previous}
              last={!FACE_LINKS[activePage].left}
            >
              <div
                className="text left"
                ref={element => (this.leftText = element)}
              >
                {FACE_LINKS[activePage].left && (
                  <span>{FACE_LINKS[activePage].left}</span>
                )}
              </div>
              <LeftLinkLine innerRef={element => (this.leftLine = element)} />
            </LeftLink>,
            <RightLink
              key="right-link"
              onClick={this.next}
              last={!FACE_LINKS[activePage].right}
            >
              <div
                className="text right"
                ref={element => (this.rightText = element)}
              >
                {FACE_LINKS[activePage].right && (
                  <span>{FACE_LINKS[activePage].right}</span>
                )}
              </div>
              <RightLinkLine innerRef={element => (this.rightLine = element)} />
            </RightLink>,
          ];
        }}
      />
    );
  }
}

Navigator.defaultProps = {
  previous: () => null,
  next: () => null,
};

export default Navigator;
