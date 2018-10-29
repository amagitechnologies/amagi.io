import Theme from 'theme/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: calc(100vh - 100px);
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  padding: 50px;

  h1 {
    display: inline-block;
  }
`;

export const SectionTitle = styled.h3`
  color: ${Theme.accent};
  margin-top: 36px;
`;
