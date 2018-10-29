import Theme from 'theme/theme';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Detail = styled.p`
  font-size: 1rem;
  color: ${Theme.primaryVariant};
`;

export const Home = styled(Link).attrs({
  to: '/',
})`
  display: block;
  color: ${Theme.primary};
  margin-top: 24px;
  padding: 10px;
  border-bottom: 1px solid ${Theme.accent};
`;
