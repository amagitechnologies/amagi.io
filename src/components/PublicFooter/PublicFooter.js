import React from 'react';
import MobileFooter from './MobileFooter';

import { Link } from 'react-router-dom';
import { ScreenClassRender } from 'react-grid-system';
import { Wrapper, Row } from './PublicFooterComponents';

export default ({ mobile }) => (
  <ScreenClassRender
    render={screen => {
      if (mobile) return <MobileFooter />;
      return (
        <Wrapper screen={screen}>
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
          <Row>
            <a
              className="link"
              href="https://www.facebook.com/amagitechnologies/"
            >
              FACEBOOK
            </a>
            <a className="link" href="https://www.instagram.com/amagitech/">
              INSTAGRAM
            </a>
          </Row>
        </Wrapper>
      );
    }}
  />
);
