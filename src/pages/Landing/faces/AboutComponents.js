import styled from 'styled-components';

export const Brand = styled.h1.attrs({
  className: 'logo',
})`
  font-size: ${props =>
    ['xs', 'sm', 'md'].includes(props.screen)
      ? ['xs'].includes(props.screen)
        ? '3.5rem'
        : '5rem'
      : '8rem'};
  letter-spacing: 1rem;
  font-weight: bold;
`;

export const Tagline = styled.h3.attrs({
  className: 'secondary-text',
})`
  font-size: ${props => (['xs'].includes(props.screen) ? '0.8rem' : '1rem')};
  font-weight: bold;
`;
