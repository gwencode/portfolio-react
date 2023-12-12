import { useState } from 'react';
import { css } from '@emotion/react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import SelectCategory from '../Components/SelectCategory';
import SelectStack from '../Components/SelectStack';
import Stack from '../Types/stack';

export default function NewProject() {
  // CSS

  const newProjectCss = css({
    textAlign: 'center',
    margin: '0 auto'
  });

  const formCss = css({
    padding: '0 0 1rem 0'
  });

  // State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Full Stack');
  const [content, setContent] = useState('');
  const [liveSite, setLiveSite] = useState('');
  const [github, setGithub] = useState('');
  const [stack, setStack] = useState([] as Stack);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title, category, content, liveSite, github, stack);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }));

  return (
    <div css={newProjectCss}>
      <h2>Add a project</h2>
      <form onSubmit={handleSubmit} css={formCss}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} lg={4}>
            <TextField
              required
              fullWidth
              id="title"
              label="Title"
              variant="filled"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <SelectCategory category={category} setCategory={setCategory} />
          </Grid>
          <Grid item xs={12} sm lg>
            <Item>Date</Item>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="content"
              label="Content"
              multiline
              required
              fullWidth
              variant="filled"
              onChange={(e) => setContent(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="liveSite"
              label="Live Site"
              placeholder="https://www.example.com"
              variant="filled"
              onChange={(e) => setLiveSite(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="github"
              label="GitHub"
              placeholder="https://github.com/gwencode/Lestang-rooms"
              variant="filled"
              onChange={(e) => setGithub(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <SelectStack stack={stack} setStack={setStack} />
          </Grid>
        </Grid>
        <Button variant="contained" type="submit">
          Add project
        </Button>
      </form>
    </div>
  );
}
