import styled, { keyframes } from 'styled-components';
import Theme from 'theme/theme';

const scrollWheel = keyframes`
    0% {
        transform: translateY(0);
        opacity: 1;
    }

    100% {
        transform: translateY(14px);
        opacity: 0.3;
    }
`;

export const Line = styled.div`
  width: 1px;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.1);
  position: relative;

  &:after {
  }
`;

export const Mouse = styled.div`
  position: absolute;
  bottom: 80px;
  left: -10px;
  right: 0;
  width: 10px;
  height: 18px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-radius: 5px;
  padding: 4px;
  border: 2px solid ${Theme.accent};
  display: flex;
  justify-content: center;

  .wheel {
    width: 5px;
    height: 5px;
    border-radius: 5px;
    background-color: ${Theme.accent};
    animation: ${scrollWheel} 1.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      infinite;
  }
`;
