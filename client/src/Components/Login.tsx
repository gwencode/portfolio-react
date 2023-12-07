import { css } from '@emotion/react';
import { useState } from 'react';

import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import PasswordIcon from '@mui/icons-material/Password';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Login() {
  const loginCss = css({
    textAlign: 'center',
    margin: '0 auto'
  });

  const greyButtonCss = css({
    backgroundColor: '#9e9e9e',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#757575'
    }
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = { email: email, password: password };

    fetch('http://localhost:5000/api/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => {
        if (res.status === 200) {
          window.location.href = '/';
          alert('Login successful.');
        } else {
          alert('Login failed.');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div css={loginCss}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            width: 300,
            margin: '32px auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <TextField
            required
            id="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              )
            }}
            variant="standard"
          />
          <TextField
            required
            id="password"
            label="Paswword"
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PasswordIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            variant="standard"
          />
        </Box>
        <Button
          variant="contained"
          size="large"
          css={greyButtonCss}
          type="submit"
        >
          Log in
        </Button>
      </form>
    </div>
  );
}
