import styled from 'styled-components';

export const Scene = styled.div`
  height: 100vh;
  width: calc(
    100vw -
      ${props => (['xs', 'sm', 'md'].includes(props.screen) ? '0px' : '220px')}
  );
  position: absolute;
  top: 0;
  bottom: 0;
  perspective: 1000px;
  ${props =>
    ['xs', 'sm', 'md'].includes(props.screen)
      ? 'overflow-y: auto;'
      : 'overflow: hidden'};
`;

export const Prism = styled.div`
  position: relative;
  height: 100vh;
  width: calc(
    100vw -
      ${props => (['xs', 'sm', 'md'].includes(props.screen) ? '0px' : '220px')}
  );
  transform-style: preserve-3d;

  .face {
    position: ${props =>
      ['xs', 'sm', 'md'].includes(props.screen) ? 'initial' : 'absolute'};
    width: calc(
      100vw -
        ${props =>
          ['xs', 'sm', 'md'].includes(props.screen) ? '0px' : '220px'}
    );
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${props =>
      !['xs', 'sm', 'md'].includes(props.screen) &&
      `

    height: 100vh;
    &.left {
      transform: rotateY(-90deg) translateZ(calc((100vw - 220px) / 4));
      opacity: 0;
      visibility: hidden;
    }

    &.right {
      transform: rotateY(90deg) translateZ(calc((100vw - 220px) / 4));
      opacity: 0;
      visibility: hidden;
    }

    &.front {
      transform: rotateY(0deg);
    }`};
  }
`;
