import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';

import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import SelectCategory from '../components/SelectCategory';
import SelectStack from '../components/SelectStack';
import Stack from '../types/stack';
import LogOutButton from '../components/LogOutButton';

import getToken from '../helpers/getToken';

export default function NewProject() {
  // CSS
  const newProjectCss = css({
    textAlign: 'center',
    margin: '0 auto'
  });

  const submitButtonCss = css({
    margin: '1rem 0'
  });

  // Navigate
  const navigate = useNavigate();

  // State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Full Stack');
  const [content, setContent] = useState('');
  const [liveSite, setLiveSite] = useState('');
  const [github, setGithub] = useState('');
  const [stack, setStack] = useState([] as Stack);
  const [date, setDate] = useState<Dayjs | null>(dayjs('2023-12-14'));
  const order = 0;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (date === null) {
      alert('Please select a date.');
      return;
    }

    const token = getToken();

    const data = {
      title: title,
      category: category,
      content: content,
      liveSite: liveSite,
      github: github,
      stack: stack.join(', '),
      date: date.format('MMMM YYYY'),
      order: order
    };

    fetch(`${import.meta.env.VITE_API_URL}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })
      .then((res) => {
        if (res.status === 200) {
          navigate('/projects');
        } else {
          alert('Project failed to add.');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div css={newProjectCss}>
      <h2>Add a project</h2>
      <form onSubmit={handleSubmit}>
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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker', 'DatePicker']}>
                <DatePicker
                  label="Controlled picker"
                  value={date}
                  onChange={(newDate) => setDate(newDate)}
                />
              </DemoContainer>
            </LocalizationProvider>
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
        <Button variant="contained" type="submit" css={submitButtonCss}>
          Add project
        </Button>
      </form>
      <LogOutButton />
    </div>
  );
}
