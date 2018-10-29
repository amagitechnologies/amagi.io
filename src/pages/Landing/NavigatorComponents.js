import styled from 'styled-components';

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

  ${props =>
    !props.last &&
    `&:hover {
    background-color: rgba(0, 0, 0, 0.2);
    transition: background-color 275ms ease-in;
    cursor: pointer;
  }`};

  .text {
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 0.1rem;

    &.left {
      transform: rotate(-90deg);
    }

    &.right {
      transform: rotate(90deg);
    }
  }
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
