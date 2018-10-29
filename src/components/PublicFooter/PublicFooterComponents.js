import styled from 'styled-components';
import Theme from 'theme/theme';

export const Wrapper = styled.div`
  padding: 10px
    ${props => (['xs', 'sm', 'md'].includes(props.screen) ? '10px' : '170px')};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .link {
    position: relative;
    text-decoration: none;
    color: ${Theme.primaryVariant};

    &:not(:last-child) {
      padding-right: 10px;
      margin-right: 10px;
    }

    &:not(:last-child):after {
      position: absolute;
      content: ':';
      right: 0;
      top: -1px;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;
