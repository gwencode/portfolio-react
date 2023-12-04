import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const navbarCss = css({
    position: 'fixed',
    width: '100%',
    backgroundColor: '#f8f9fa',
    boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)',
    display: 'flex',
    justifyContent: 'center !important',
    alignItems: 'center !important',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    '@media (min-width: 992px)': {
      flexWrap: 'nowrap',
      justifyContent: 'flex-start'
    }
  });

  const navLinkCss = css({
    color: 'rgb(26, 106, 162)',
    fontWeight: 'bold',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    '@media (min-width: 992px)': {
      padding: '0.5rem 1.5rem'
    },
    ':hover': {
      color: '#000000',
      textDecoration: 'none'
    }
  });

  return (
    <nav css={navbarCss}>
      <Link to="/" css={navLinkCss}>
        Home
      </Link>
      <Link to="/about" css={navLinkCss}>
        About
      </Link>
      <Link to="/projects" css={navLinkCss}>
        Projects
      </Link>
      <Link to="/contact" css={navLinkCss}>
        Contact
      </Link>
    </nav>
  );
}
