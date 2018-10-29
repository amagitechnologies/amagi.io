import React from 'react';
import Theme from 'theme/theme';
import styled from 'styled-components';

import { ScreenClassRender } from 'react-grid-system';

const DivWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: ${props =>
    ['xs', 'sm', 'md'].includes(props.screen) ? 'column' : 'row'};
  justify-content: space-between;
  align-items: center;
  padding: ${props =>
    ['xs', 'sm', 'md'].includes(props.screen) ? '10px' : '10px 110px'};
  width: calc(
    100% -
      ${props => (['xs', 'sm', 'md'].includes(props.screen) ? '20px' : '220px')}
  );

  ${props => props.customstyles};
`;

export const Wrapper = props => (
  <ScreenClassRender
    render={screen => (
      <DivWrapper customstyles={props.customstyles} screen={screen}>
        {props.children}
      </DivWrapper>
    )}
  />
);

export const Divider = styled.div`
  width: 1px;
  height: 85%;
  background-color: ${Theme.accent};
  opacity: 0.3;
  margin: 0 50px;
`;

export const Section = styled.div`
  flex: 1;
  width: 100%;
  text-align: left;

  h2 {
    margin-bottom: 20px;
    font-size: 1.8rem;

    &:last-of-type {
      margin-top: 20px;
    }
  }

  .detail {
    display: block;
    margin-top: 8px;
    margin-bottom: 12px;

    .social {
      margin-bottom: 8px;
      display: block;
    }

    a {
      text-decoration: none;
      color: ${Theme.primary};
    }
  }

  .contactDetail {
    display: block;
    margin-top: 8px;
    margin-bottom: 12px;

    .social {
      margin-bottom: 8px;
      display: block;
    }

    a {
      text-decoration: none;
      color: ${Theme.primary};
    }
  }

  .vertical-gutter {
    width: 100%;
    height: 40px;
  }

  ${props => props.customstyles};
`;
