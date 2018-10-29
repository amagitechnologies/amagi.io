import React from 'react';

class Loader extends React.PureComponent {
  width = 2;

  componentDidMount() {
    this.stretchLine();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.stretchLine);
  }

  stretchLine = () => {
    if (!this.line) {
      cancelAnimationFrame(this.stretchLine);
      return;
    }

    requestAnimationFrame(this.stretchLine);

    this.width += 2;
    if (this.width >= 200) this.width = 2;

    this.line.style.width = `${this.width}px`;
  };

  render() {
    return (
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
          ref={element => (this.line = element)}
          style={{
            height: 1,
            width: 2,
            marginTop: 14,
            backgroundColor: '#fe9156',
          }}
        />
      </div>
    );
  }
}

export default Loader;
