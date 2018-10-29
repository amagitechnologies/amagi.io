import styled from 'styled-components';
import Theme from 'theme/theme';

export const Project = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  margin-top: 16px;

  &:last-of-type {
    margin-bottom: 36px;
  }

  .thumbnail {
    min-width: 150px;
    min-height: 75px;
    width: 150px;
    height: 75px;
    margin-right: 16px;
    border: 1px solid;
    border-color: rgba(255, 255, 255, 0.4);
    padding: 5px;
    font-weight: bold;
    font-size: 0.8rem;
    color: ${Theme.primary};
    display: flex;
    align-items: flex-end;
    position: relative;
    cursor: pointer;
    transition: border-color 275ms ease-out;

    &:after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 5px;
      width: 60px;
      height: 1px;
      background-color: ${Theme.accent};
    }

    &:hover {
      border-color: rgba(255, 255, 255, 1);
      transition: border-color 275ms ease-in;
    }
  }

  .description {
  }
`;

export const ProjectType = styled.h2`
  font-size: 5rem !important;
  color: ${props => (props.active ? Theme.accent : 'rgba(255, 255, 255, 0.7)')};
  transition: color 275ms ease-out;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    cursor: pointer;
    color: ${Theme.accent};
    transition: color 275ms ease-in;
  }
`;
