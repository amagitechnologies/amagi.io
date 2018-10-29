import styled, { keyframes } from 'styled-components';

const shrinkWidth = keyframes`
  from {
    width: 26px;
  }
  to {
    width: 3px;
  }
`;

const expandHeight = keyframes`
from {
  width: 3px;
}
to {
  width: 26px;
}
`;

const Link = styled.div`
  position: absolute;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 110px;
  bakcground-color: transparent;
  overflow: hidden;
  transition: background-color 275ms ease-out;

  .text {
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    width: 100vh;
    text-align: center;

    &.left {
      transform: rotate(-90deg);
    }

    &.right {
      transform: rotate(90deg);
    }

    span {
      position: relative;

      &:before,
      &:after {
        content: '';
        width: 3px;
        height: 2px;
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
        background-color: #ffffff;
        position: absolute;
        top: calc(50% - 2px);
        animation: ${expandHeight} 550ms cubic-bezier(0.19, 1, 0.22, 1);
        animation-fill-mode: forwards;
      }

      &:before {
        left: -45px;
      }

      &:after {
        right: -45px;
      }
    }
  }

  ${props =>
    !props.last &&
    `&:hover {
    background-color: rgba(0, 0, 0, 0.2);
    transition: background-color 275ms ease-in;
    cursor: pointer;

    .text span:before,
    .text span:after {
      animation: ${shrinkWidth} 550ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
      animation-fill-mode: forwards;
    }
  }`};
`;

const LinkLine = styled.div`
  position: absolute;
  width: 2px;
  height: 1%;
  background-color: rgba(255, 255, 255, 0.1);

  &:before {
    position: absolute;
    content: '';
    width: 2px;
    height: 8px;
    background-color: rgba(255, 255, 255, 1);
    top: 0;
  }

  &:after {
    position: absolute;
    content: '';
    width: 2px;
    height: 8px;
    background-color: rgba(255, 255, 255, 1);
    bottom: 0;
  }
`;

export const LeftLinkLine = styled(LinkLine)`
  right: 0;
  bottom: 0;
`;

export const RightLinkLine = styled(LinkLine)`
  left: 0;
  top: 0;
`;

export const LeftLink = styled(Link)`
  top: 0;
  left: 0;
`;

export const RightLink = styled(Link)`
  top: 0;
  right: 0;
`;
