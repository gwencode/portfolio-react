// import { useState } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Project from '../types/project';
// import { css } from '@emotion/react';

// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';

// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';

// import SelectCategory from '../components/SelectCategory';
// import SelectStack from '../components/SelectStack';
// import Stack from '../types/stack';
// import LogOutButton from '../components/LogOutButton';

// import { User } from '../types/user';

export default function ProjectDetails() {
  const { id } = useParams();

  if (!id) {
    return <h1>Project not found</h1>;
  }

  const [project, setProject] = useState({} as Project);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/projects/${id}`)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);

  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.content}</p>
    </>
  );
}
