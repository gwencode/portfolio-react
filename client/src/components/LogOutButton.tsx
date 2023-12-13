import { css } from '@emotion/react';
import { useAuth } from '../hooks/useAuth';

import Button from '@mui/material/Button';

export default function LogOutButton() {
  const user = localStorage.getItem('user');
  const { logout } = useAuth();

  const logoutCss = css({
    margin: '1rem 0'
  });

  const handleLogout = () => {
    logout();
    window.location.href = '/admin/login';
  };

  return (
    <>
      {user && (
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
