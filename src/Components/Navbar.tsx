import { css } from '@emotion/react';

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
      <a href="#home" css={navLinkCss}>
        Home
      </a>
      <a href="#about" css={navLinkCss}>
        About
      </a>
      <a href="#projects" css={navLinkCss}>
        Projects
      </a>
      <a href="#contact" css={navLinkCss}>
        Contact
      </a>
    </nav>
  );
}
