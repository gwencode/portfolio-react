import { useState } from 'react';
import { css } from '@emotion/react';

import Button from '@mui/material/Button';

export default function LogOutButton() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const logoutCss = css({
    margin: '1rem 0'
  });

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
    window.location.href = '/admin/login';
  };

  return (
    <>
      {token && (
        <Button
          css={logoutCss}
          variant="contained"
          color="secondary"
          onClick={handleLogout}
        >
          Log Out
        </Button>
      )}
    </>
  );
}
