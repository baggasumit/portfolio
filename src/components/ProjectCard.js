import React from 'react';
import githubIcon from '../images/github.svg';

const ProjectCard = props => {
  const { title, description, skills, links } = props.projectDetails;
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p
        className="project-description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <ul>
        {skills.map(skill => (
          <li>{skill}</li>
        ))}
      </ul>
      <div className="project-links">
        <a href={links.demo}>Live Demo</a>
        <a className="secondary" href={links.github}>
          <img src={githubIcon} alt="Github icon" />
          <span>View Source</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
