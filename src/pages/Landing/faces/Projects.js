import React from 'react';

import {
  AXA_SW_PROJECTS,
  SPLIT_PROJECTS,
  GOVT_PROJECTS,
  PERRY_PROJECTS,
  TDMH_PROJECTS,
  AXA_DO_PROJECTS,
  EMOOV_PROJECTS,
  GAMBLING_PROJECTS,
  LEGAL_PROJECTS,
} from 'constants/projects';

import { css } from 'styled-components';
import { ScreenClassRender, Hidden, Visible } from 'react-grid-system';
import { Wrapper, Divider, Section } from './FacesComponents';
import { Project, ProjectType } from './ProjectsComponents';

class Projects extends React.PureComponent {
  state = {
    active: 'software',
  };

  setActive = ({ active } = {}) => {
    this.setState({ active });
  };

  render() {
    const { active } = this.state;

    return (
      <ScreenClassRender
        render={screen => (
          <Wrapper>
            <Hidden xs sm md>
              <Section>
                <ProjectType
                  active={active === 'software'}
                  onClick={() => this.setActive({ active: 'software' })}
                >
                  Software
                </ProjectType>
                <ProjectType
                  active={active === 'devops'}
                  onClick={() => this.setActive({ active: 'devops' })}
                >
                  DevOps
                </ProjectType>
                <ProjectType
                  active={active === 'data'}
                  onClick={() => this.setActive({ active: 'data' })}
                >
                  Data Science
                </ProjectType>
              </Section>
            </Hidden>
            <Hidden xs sm md>
              <Divider />
            </Hidden>
            <Section
              customstyles={
                !['xs', 'sm', 'md'].includes(screen) &&
                css`
                  max-height: calc(100vh - 200px);
                  overflow-y: auto;
                `
              }
            >
              <Visible xs sm md>
                <h2 className="secondary-text">Software Projects</h2>
              </Visible>
              {(active === 'software' ||
                ['xs', 'sm', 'md'].includes(screen)) && [
                <div key="software-project-1">
                  <b>AXA</b>
                  {AXA_SW_PROJECTS.map(({ name, details }, idx) => (
                    <Project screen={screen} key={`axa-project-${idx}`}>
                      <div className="thumbnail">{name}</div>
                      <div className="description">{details}</div>
                    </Project>
                  ))}
                </div>,
                <div key="software-project-2">
                  <b>SPLITMEDIALABS</b>
                  {SPLIT_PROJECTS.map(({ name, details }, idx) => (
                    <Project screen={screen} key={`split-project-${idx}`}>
                      <div className="thumbnail">{name}</div>
                      <div className="description">{details}</div>
                    </Project>
                  ))}
                </div>,
                <div key="software-project-3">
                  <b>REPUBLIC OF THE PHILIPPINES</b>
                  {GOVT_PROJECTS.map(({ name, details }, idx) => (
                    <Project screen={screen} key={`govt-project-${idx}`}>
                      <div className="thumbnail">{name}</div>
                      <div className="description">{details}</div>
                    </Project>
                  ))}
                </div>,
                <div key="software-project-4">
                  <b>PERRY'S GROUP</b>
                  {PERRY_PROJECTS.map(({ name, details }, idx) => (
                    <Project screen={screen} key={`govt-project-${idx}`}>
                      <div className="thumbnail">{name}</div>
                      <div className="description">{details}</div>
                    </Project>
                  ))}
                </div>,
                <div key="software-project-5">
                  <b>TAYTAY DOCTORS MULTISPECIALTY HOSPITAL</b>
                  {TDMH_PROJECTS.map(({ name, details }, idx) => (
                    <Project screen={screen} key={`govt-project-${idx}`}>
                      <div className="thumbnail">{name}</div>
                      <div className="description">{details}</div>
                    </Project>
                  ))}
                </div>,
              ]}
              <Visible xs sm md>
                <div className="vertical-gutter" />
              </Visible>
              <Visible xs sm md>
                <h2 className="secondary-text">DevOps Projects</h2>
              </Visible>
              {(active === 'devops' || ['xs', 'sm', 'md'].includes(screen)) && [
                <div key="devops-project-1">
                  <b>AXA</b>
                  {AXA_DO_PROJECTS.map(({ name, details }, idx) => (
                    <Project screen={screen} key={`devops-project-${idx}`}>
                      <div className="thumbnail">{name}</div>
                      <div className="description">{details}</div>
                    </Project>
                  ))}
                </div>,
                <div key="devops-project-2">
                  <b>EMOOV</b>
                  {EMOOV_PROJECTS.map(({ name, details }, idx) => (
                    <Project screen={screen} key={`devops-project-${idx}`}>
                      <div className="thumbnail">{name}</div>
                      <div className="description">{details}</div>
                    </Project>
                  ))}
                </div>,
              ]}
              <Visible xs sm md>
                <div className="vertical-gutter" />
              </Visible>
              <Visible xs sm md>
                <h2 className="secondary-text">Data Science Projects</h2>
              </Visible>
              {(active === 'data' || ['xs', 'sm', 'md'].includes(screen)) && [
                <div key="data-project-1">
                  <b>AUSTRALIAN BOOKMAKING COMPANY</b>
                  {GAMBLING_PROJECTS.map(({ name, details }, idx) => (
                    <Project screen={screen} key={`data-project-${idx}`}>
                      <div className="thumbnail">{name}</div>
                      <div className="description">{details}</div>
                    </Project>
                  ))}
                </div>,
                <div key="data-project-2">
                  <b>BAY LAW GROUP</b>
                  {LEGAL_PROJECTS.map(({ name, details }, idx) => (
                    <Project screen={screen} key={`data-project-${idx}`}>
                      <div className="thumbnail">{name}</div>
                      <div className="description">{details}</div>
                    </Project>
                  ))}
                </div>,
              ]}
            </Section>
          </Wrapper>
        )}
      />
    );
  }
}

export default Projects;
