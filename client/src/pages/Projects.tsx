import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Project } from '../../../server/src/entities/Project';
import LogOutButton from '../components/LogOutButton';

export default function Projects() {
  const projectsCss = css({
    textAlign: 'center',
    margin: '0 auto'
  });

  const admin = localStorage.getItem('user');

  const [projects, setProjects] = useState([] as Project[]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const projectsDiv = projects.map((project) => {
    return (
      <div key={project.title}>
        <Link to={`/projects/${project.id}`}>
          <h3>{project.title}</h3>
          <p>{project.content}</p>
        </Link>
      </div>
    );
  });

  return (
    <>
      <div css={projectsCss}>
        <h2>Projects</h2>
        {admin && (
          <Link to="/admin/projects">
            <button>Add Project</button>
          </Link>
        )}
        {projectsDiv}
        {admin && <LogOutButton />}
      </div>
    </>
  );
}
