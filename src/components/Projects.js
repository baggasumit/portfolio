import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../content/projects.json';

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      {projects.map(project => (
        <ProjectCard projectDetails={project} />
      ))}
    </section>
  );
};

export default Projects;
