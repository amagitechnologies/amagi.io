import React from 'react';

import { Link } from 'react-router-dom';
import { MainScene, CenteredWrapper } from 'components';
import { Wrapper, SectionTitle } from './PrivacyComponents';

class Privacy extends React.Component {
  render() {
    return [
      <MainScene key="main-scene" />,
      <CenteredWrapper key="wrapper">
        <Wrapper>
          <Link to="/">
            <h1 className="logo">AMAGI</h1>
          </Link>
          <SectionTitle>Privacy Policies</SectionTitle>
          <p>
            If you contact us directly, we don't store your data.
          </p>
          <p>
            Visit our other sites to see their privacy policies and terms.
          </p>
          <ul>
            <li>
              <a 
                href="https://drive.google.com/file/u/1/d/1hq4J0wRPPH8nOFlpqNxkGDFxy58oPFZe/view?usp=sharing"
              >
                Free Data Privacy Handbook
              </a>
            </li>
            <li>
              <a 
                href="https://amagiacademy.com/terms"
              >
                Amagi Academy
              </a>
            </li>
            <li>
              <a 
                href="https://techpool.io/terms"
              >
                Techpool Jobs
              </a>
            </li>
            <li>
              <a 
                href="https://cumulosys.com/terms"
              >
                CumuloSys Payroll & Inventory Management
              </a>
            </li>
          </ul>
        </Wrapper>
      </CenteredWrapper>,
    ];
  }
}

export default Privacy;
