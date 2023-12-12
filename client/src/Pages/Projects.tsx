import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { Project } from '../../../server/src/entities/Project';

export default function Projects() {
  const projectsCss = css({
    textAlign: 'center',
    margin: '0 auto'
  });

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
      <div css={projectsCss}>
        <h2>Projects</h2>
        {projectsDiv}
      </div>
    </>
  );
}
