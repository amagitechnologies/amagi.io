import React from 'react';

import { css } from 'styled-components';
import { ScreenClassRender, Visible } from 'react-grid-system';
import { Wrapper, Section, Divider } from './FacesComponents';
import { FormWrapper, FieldsRow, Field } from './ContactComponents';
import { PublicFooter } from 'components';

export default () => (
  <ScreenClassRender
    render={screen => (
      <Wrapper
        screen={screen}
        customstyles={
          ['xs', 'sm', 'md'].includes(screen)
            ? css`
                margin-top: 50vh;
              `
            : css``
        }
      >
        <Section>
          <h2 className="secondary-text">Technical Specializations</h2>
          <p>
            <b>Software: </b>
            <span className="detail">
              JavaScript, React.js, React Native, D3.js, Node.js, Koa, GraphQL,
              PostgreSQL, MySQL, MongoDB, Elasticsearch, Golang, Python,
              RabbitMQ, Pandas, NumPy, SciPy, gRPC, Scikit-learn, Tensorflow, 
              Jupyter, OpenCV, and more.
            </span>
            <br />
            <b>DevOps: </b>
            <span className="detail">
              Docker, Docker Swarm, Kubernetes, Helm, OpenShift, AWS, Digital
              Ocean, Azure, Ansible, Bash, Linux, Mac, NGINX, Traefik, SSL/TLS,
              Let's Encrypt, Jenkins, Gitlab CI, ELK Stack, Prometheus, Terraform, 
              and more.
            </span>
            <br />
            <b>Data Science: </b>
            <span className="detail">
              Machine Learning, Deep Learning, Classifiers, Regressions, 
              Clustering, Computer Vision, Descriptive Analytics, Risk Analysis, 
              Backtesting, Econometrics, Natural Language Processing, and more.
            </span>
            <br />
            <b>Training: </b>
            <span className="detail">
              <a href="https://amagiacademy.com">Amagi Academy</a>
            </span>
          </p>
        </Section>
        <Divider />
        <Section>
          <h2 className="secondary-text">Contact Information</h2>
          <FieldsRow>
            <Field>
              <div className="input">
                <a href="mailto:contact@amagi.io">Email: contact@amagi.io</a>
              </div>
              <div className="input">Phone: +63 02 816 7055</div>
              <br />
              <div className="input">
                <a href="https://goo.gl/maps/YmM3beS1iT82">
                  - Makati City, Philippines
                </a>
                <br />
                <a href="https://goo.gl/maps/iS3EYeaVf1y">
                  - Kwun Tong, Hong Kong
                </a>
              </div>
            </Field>
          </FieldsRow>
          <h2 className="secondary-text">Message Us</h2>
          <FormWrapper>
            <FieldsRow>
              <Field>
                <div className="label">Name</div>
                <div className="input">
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Luke Skywalker"
                    required
                  />
                </div>
              </Field>
              <div className="gutter" />
              <Field>
                <div className="label">Email</div>
                <div className="input">
                  <input
                    type="email"
                    name="email"
                    placeholder="e.g. youremail@domain.com"
                    required
                  />
                </div>
              </Field>
            </FieldsRow>
            <FieldsRow>
              <Field>
                <div className="label">Message</div>
                <div className="input">
                  <textarea
                    rows="3"
                    name="message"
                    placeholder="Type your message..."
                  />
                </div>
              </Field>
            </FieldsRow>
            <FieldsRow>
              <Field>
                <button type="submit">Send Message</button>
              </Field>
            </FieldsRow>
          </FormWrapper>
          <Visible xs sm md>
            <PublicFooter mobile />
          </Visible>
        </Section>
      </Wrapper>
    )}
  />
);
