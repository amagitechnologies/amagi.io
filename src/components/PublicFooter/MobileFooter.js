import React from 'react';

import { Link } from 'react-router-dom';
import { Row } from './PublicFooterComponents';

export default () => (
  <Row>
    <Link to="/" className="link secondary-text">
      AMAGI.IO
    </Link>
    <Link to="/privacy-policies" className="link">
      PRIVACY POLICIES
    </Link>
    <a href="https://techpool.io/" className="link">
      CAREERS
    </a>
  </Row>
);
