// import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
// import Project from '../Types/project';
import { Project } from '../../../server/src/entities/Project';

export default function Projects() {
  const [projects, setProjects] = useState([] as Project[]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const projectsDiv = projects.map((project) => {
    return (
      <div key={project.title}>
        <h3>{project.title}</h3>
        <p>{project.content}</p>
      </div>
    );
  });

  return (
    <>
      <h1>Projects</h1>
      {projectsDiv}
    </>
  );
}
