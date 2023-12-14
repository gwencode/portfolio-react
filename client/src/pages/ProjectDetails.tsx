// import { useState } from 'react';
import { useParams } from 'react-router-dom';
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

  return (
    <>
      <h1>Project details</h1>
    </>
  );
}
