import React from 'react';
import Animate from 'utils/general/animate';
import * as TWEEN from 'es6-tween';

import { ScreenClassRender } from 'react-grid-system';
import { Scene, Prism } from './TriangularPrismComponents';

class TriangularPrism extends React.PureComponent {
  currentRotation = 0;

  componentDidMount() {
    this.scene.addEventListener('scroll', () => {
      this.props.onScroll({ scrollTop: this.scene.scrollTop });
    });
  }

  rotatePrism = ({ direction = 'left' } = {}) => {
    const to = {
      rotation: this.currentRotation - 90,
    };

    if (direction === 'right') {
      to.rotation = this.currentRotation + 90;
    }

    Animate({
      from: { rotation: this.currentRotation },
      to,
      duration: 1250,
      easing: TWEEN.Easing.Back.InOut,
      update: ({ rotation }) => {
        this.prism.style.transform = `rotateY(${rotation}deg)`;
      },
    });
  };

  translateFace = ({ from = {}, to = {}, delay = 0, face = 'front' } = {}) => {
    let update = ({ translate }) => {
      this.front.style.transform = `translateZ(${translate}px)`;
    };

    if (face === 'left') {
      update = ({ translate }) => {
        this.left.style.transform = `rotateY(-90deg) translateZ(${translate}px)`;
      };
    } else if (face === 'right') {
      update = ({ translate }) => {
        this.right.style.transform = `rotateY(90deg) translateZ(${translate}px)`;
      };
    }

    Animate({
      from,
      to,
      delay,
      update,
      duration: 275,
      easing: TWEEN.Easing.Back.InOut,
    });
  };

  changeOpacity = ({ from = {}, to = {}, delay = 0, face = 'left' } = {}) => {
    Animate({
      from,
      to,
      delay,
      duration: 750,
      update: ({ opacity }) => {
        this[face].style.opacity = opacity;
        this.front.style.opacity = 1 - opacity;

        if (opacity <= 0) {
          this[face].style.visibility = 'hidden';
        } else {
          this[face].style.visibility = 'visible';
        }

        if (1 - opacity <= 0) {
          this.front.style.visibility = 'hidden';
        } else {
          this.front.style.visibility = 'visible';
        }
      },
    });
  };

  next = () => {
    const WIDTH = window.innerWidth - 220;

    this.rotatePrism({ direction: 'left' });

    if (this.currentRotation === 90) {
      this.translateFace({
        from: { translate: 0 },
        to: { translate: WIDTH / 4 },
        face: 'left',
      });

      this.translateFace({
        from: { translate: WIDTH / 4 },
        to: { translate: 0 },
        delay: 500,
      });

      this.changeOpacity({
        from: { opacity: 1 },
        to: { opacity: 0 },
        delay: 500,
      });
    } else if (this.currentRotation === 0) {
      this.translateFace({
        from: { translate: 0 },
        to: { translate: WIDTH / 4 },
      });

      this.translateFace({
        from: { translate: WIDTH / 4 },
        to: { translate: 0 },
        delay: 500,
        face: 'right',
      });

      this.changeOpacity({
        from: { opacity: 0 },
        to: { opacity: 1 },
        face: 'right',
      });
    }

    this.currentRotation -= 90;
  };

  previous = () => {
    const WIDTH = window.innerWidth - 220;

    this.rotatePrism({ direction: 'right' });

    if (this.currentRotation === -90) {
      this.translateFace({
        from: { translate: 0 },
        to: { translate: WIDTH / 4 },
        face: 'right',
      });

      this.translateFace({
        from: { translate: WIDTH / 4 },
        to: { translate: 0 },
        delay: 500,
      });

      this.changeOpacity({
        from: { opacity: 1 },
        to: { opacity: 0 },
        delay: 500,
        face: 'right',
      });
    } else if (this.currentRotation === 0) {
      this.translateFace({
        from: { translate: 0 },
        to: { translate: WIDTH / 4 },
      });

      this.translateFace({
        from: { translate: WIDTH / 4 },
        to: { translate: 0 },
        delay: 500,
        face: 'left',
      });

      this.changeOpacity({
        from: { opacity: 0 },
        to: { opacity: 1 },
      });
    }

    this.currentRotation += 90;
  };

  render() {
    const { left, front, right } = this.props;

    return (
      <ScreenClassRender
        render={screen => (
          <Scene innerRef={element => (this.scene = element)} screen={screen}>
            <Prism innerRef={element => (this.prism = element)} screen={screen}>
              <div ref={element => (this.left = element)} className="face left">
                {left}
              </div>
              <div
                ref={element => (this.front = element)}
                className="face front"
              >
                {front}
              </div>
              <div
                ref={element => (this.right = element)}
                className="face right"
              >
                {right}
              </div>
            </Prism>
          </Scene>
        )}
      />
    );
  }
}

TriangularPrism.defaultProps = {
  onScroll: () => null,
};

export default TriangularPrism;
